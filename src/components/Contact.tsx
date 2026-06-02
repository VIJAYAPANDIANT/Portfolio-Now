import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Terminal, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [transmissionLogs, setTransmissionLogs] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setTransmissionLogs([]);

    const steps = [
      '>> INITIATING SMTP PROTOCOL STACK...',
      '>> RESOLVING DNS: SMTP.VP_CORE_NET... OK',
      '>> ESTABLISHING SECURE COMMS LINK...',
      '>> PACKING TRANSMISSION PAYLOAD...',
      '>> ENCRYPTING TRANSACTION BODY (AES-256)... OK',
      '>> UPLOADING DATA CLUSTERS...',
      '>> PACKETS: [ 10% ... 40% ... 80% ... 100% ]',
      '>> TRANSLATING DIGITAL TELEMETRY...',
      '>> STATUS CODE: 202 DEPOSITED',
      '>> SUCCESS: COMMS LINK SECURED. RESPONSE QUEUED.'
    ];

    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < steps.length) {
        setTransmissionLogs((prev) => [...prev, steps[currentIdx]]);
        currentIdx++;
      } else {
        clearInterval(interval);
        
        // Save locally
        const existingMessages = JSON.parse(localStorage.getItem('vp_inbox_messages') || '[]');
        existingMessages.push({
          ...formData,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('vp_inbox_messages', JSON.stringify(existingMessages));

        setIsSending(false);
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
      }
    }, 400);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-neon-blue" />
          <h2 className="text-4xl font-bold font-mono uppercase tracking-tighter">
            <span className="text-neon-blue">05.</span> Comms_Channel
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <div className="glass p-6 rounded-sm space-y-6 border-l-2 border-neon-blue">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neon-blue/10 rounded-sm text-neon-blue">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">Protocol: SMTP</h4>
                  <p className="text-base sm:text-lg font-mono break-all">vijayapandian112007@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-neon-purple/10 rounded-sm text-neon-purple">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">Protocol: VOIP</h4>
                  <p className="text-base sm:text-lg font-mono">+91 8610554060</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-neon-pink/10 rounded-sm text-neon-pink">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">Location: GEO</h4>
                  <p className="text-base sm:text-lg font-mono">Chennai, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <motion.a
                href="https://linkedin.com/in/vijayapandian-t"
                target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"
                whileHover={{ y: -3, backgroundColor: 'rgba(0, 243, 255, 0.1)' }}
                className="p-4 glass rounded-sm text-gray-500 hover:text-neon-blue transition-all border border-white/5 cursor-pointer"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/VIJAYAPANDIANT"
                target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"
                whileHover={{ y: -3, backgroundColor: 'rgba(0, 243, 255, 0.1)' }}
                className="p-4 glass rounded-sm text-gray-500 hover:text-neon-blue transition-all border border-white/5 cursor-pointer"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-[1.5] relative"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-sm border border-neon-blue/10 pointer-events-none -z-10" />

            <AnimatePresence mode="wait">
              {isSending ? (
                <motion.div
                  key="sending"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass p-8 rounded-sm h-[380px] flex flex-col justify-between border border-neon-blue/40 font-mono text-xs"
                >
                  <div className="flex items-center gap-2 text-neon-blue pb-3 border-b border-white/10 select-none">
                    <Terminal size={14} className="animate-pulse" />
                    <span>VP_CORE_COMMS_LINK</span>
                  </div>
                  
                  <div className="flex-1 py-4 overflow-y-auto space-y-1.5 text-gray-400 select-text">
                    {transmissionLogs.map((log, idx) => (
                      <p 
                        key={idx} 
                        className={log.startsWith('>> SUCCESS') ? 'text-ai-green font-bold' : log.startsWith('>> STATUS') ? 'text-neon-purple' : 'text-gray-400'}
                      >
                        {log}
                      </p>
                    ))}
                    <span className="inline-block w-1.5 h-3 bg-neon-blue animate-pulse ml-1" />
                  </div>
                  
                  <div className="text-[10px] text-gray-600 border-t border-white/5 pt-2">
                    SECURE NODE TRANSIT ACTIVE // ENCRYPT_AES_256
                  </div>
                </motion.div>
              ) : isSent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="glass p-8 rounded-sm h-[380px] flex flex-col items-center justify-center text-center border border-ai-green/40 space-y-6"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-ai-green"
                  >
                    <CheckCircle2 size={56} />
                  </motion.div>
                  
                  <div className="space-y-2">
                    <h3 className="font-mono font-bold text-xl text-white uppercase tracking-wider">Transmission Deposited</h3>
                    <p className="text-gray-400 text-xs font-light max-w-sm">
                      Your message payload has been successfully dispatched to Vijayapandian's neural core queue. Connection status: 202 ACCEPTED.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSent(false)}
                    className="px-6 py-2.5 bg-transparent border border-ai-green text-ai-green hover:bg-ai-green/10 text-xs font-mono font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer"
                  >
                    Send Another Transmission
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="glass p-8 rounded-sm space-y-6 border border-white/10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Input_Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 font-mono text-sm focus:outline-none focus:border-neon-blue transition-colors text-white"
                        placeholder="IDENTIFY_YOURSELF"
                        autoComplete="name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Input_Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 font-mono text-sm focus:outline-none focus:border-neon-blue transition-colors text-white"
                        placeholder="RETURN_ADDRESS"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Transmission_Body</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 font-mono text-sm focus:outline-none focus:border-neon-blue transition-colors resize-none text-white"
                      placeholder="ENTER_MESSAGE_DATA..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.01, letterSpacing: '0.15em' }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full py-4 bg-neon-blue text-black font-mono font-bold rounded-sm flex items-center justify-center gap-2 hover:neon-glow transition-all uppercase tracking-widest cursor-pointer"
                  >
                    Execute Transmission <Send size={16} />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
