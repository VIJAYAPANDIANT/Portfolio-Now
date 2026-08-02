import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, Loader2, Trophy } from 'lucide-react';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('sending');

    try {
      // 1. Send Email via FormSubmit AJAX API
      const response = await fetch("https://formsubmit.co/ajax/vijayapandian112007@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Message: message
        })
      });

      if (response.ok) {
        setStatus('success');
        
        // 2. Open WhatsApp click-to-chat API (91 is country code for India)
        const whatsappText = encodeURIComponent(`*New Portfolio Message*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`);
        window.open(`https://api.whatsapp.com/send?phone=918610554060&text=${whatsappText}`, '_blank');
        
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
        
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="w-full max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-neon-blue" />
            <h2 className="text-3xl md:text-4xl font-bold font-mono uppercase tracking-tighter whitespace-nowrap">
              <span className="text-neon-blue">05.</span> Connect With Me
            </h2>
          </div>
          <div className="text-xs font-mono text-neon-blue mt-2 ml-16 flex items-center gap-2 tracking-widest uppercase">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available for Internships & SDE Opportunities
          </div>
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
                  <p className="text-lg font-mono">vijayapandian112007@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-neon-purple/10 rounded-sm text-neon-purple">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-lg font-mono">+91 8610554060</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-neon-pink/10 rounded-sm text-neon-pink">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-lg font-mono">Chennai, India</p>
                </div>
              </div>
            </div>

            <div className="space-y-2 py-2">
              <h3 className="text-base font-mono font-bold text-white uppercase tracking-wider">
                Let's build something amazing together.
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                Whether it's software engineering, backend development,
                full-stack applications, or AI-powered solutions,
                I'd love to connect.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://linkedin.com/in/vijayapandian-t"
                target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"
                whileHover={{ y: -3, backgroundColor: 'rgba(0, 243, 255, 0.1)' }}
                className="p-4 glass rounded-sm text-gray-500 hover:text-neon-blue transition-all border border-white/5 flex items-center justify-center"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/VIJAYAPANDIANT"
                target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"
                whileHover={{ y: -3, backgroundColor: 'rgba(0, 243, 255, 0.1)' }}
                className="p-4 glass rounded-sm text-gray-500 hover:text-neon-blue transition-all border border-white/5 flex items-center justify-center"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://vj-achievement-universe.vercel.app/"
                target="_blank" rel="noopener noreferrer" aria-label="Achievement Universe" title="Achievement Universe"
                whileHover={{ y: -3, backgroundColor: 'rgba(0, 243, 255, 0.1)' }}
                className="p-4 glass rounded-sm text-gray-500 hover:text-neon-blue transition-all border border-white/5 flex items-center justify-center"
              >
                <Trophy size={20} />
              </motion.a>
              <motion.a
                href="https://leetcode.com/u/hackervj18"
                target="_blank" rel="noopener noreferrer" aria-label="LeetCode" title="LeetCode"
                whileHover={{ y: -3, backgroundColor: 'rgba(0, 243, 255, 0.1)' }}
                className="p-4 glass rounded-sm text-gray-500 hover:text-neon-blue transition-all border border-white/5 flex items-center justify-center group"
              >
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/leetcode.svg" 
                  alt="LeetCode" 
                  className="w-5 h-5 invert opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </motion.a>
              <motion.a
                href="https://www.codechef.com/users/vijay_code07"
                target="_blank" rel="noopener noreferrer" aria-label="CodeChef" title="CodeChef"
                whileHover={{ y: -3, backgroundColor: 'rgba(0, 243, 255, 0.1)' }}
                className="p-4 glass rounded-sm text-gray-500 hover:text-neon-blue transition-all border border-white/5 flex items-center justify-center group"
              >
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/codechef.svg" 
                  alt="CodeChef" 
                  className="w-5 h-5 invert opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </motion.a>
              <motion.a
                href="https://www.hackerrank.com/profile/vijayapandian111"
                target="_blank" rel="noopener noreferrer" aria-label="HackerRank" title="HackerRank"
                whileHover={{ y: -3, backgroundColor: 'rgba(0, 243, 255, 0.1)' }}
                className="p-4 glass rounded-sm text-gray-500 hover:text-neon-blue transition-all border border-white/5 flex items-center justify-center group"
              >
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/hackerrank.svg" 
                  alt="HackerRank" 
                  className="w-5 h-5 invert opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </motion.a>
              <motion.a
                href="https://www.geeksforgeeks.org/profile/vijayapandiant11"
                target="_blank" rel="noopener noreferrer" aria-label="GeeksforGeeks" title="GeeksforGeeks"
                whileHover={{ y: -3, backgroundColor: 'rgba(0, 243, 255, 0.1)' }}
                className="p-4 glass rounded-sm text-gray-500 hover:text-neon-blue transition-all border border-white/5 flex items-center justify-center group"
              >
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/geeksforgeeks.svg" 
                  alt="GeeksforGeeks" 
                  className="w-5 h-5 invert opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-[1.5]"
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-sm space-y-6 border-t border-neon-blue/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Input_Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 font-mono text-sm focus:outline-none focus:border-neon-blue transition-colors text-white"
                    placeholder="IDENTIFY_YOURSELF"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Input_Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 font-mono text-sm focus:outline-none focus:border-neon-blue transition-colors text-white"
                    placeholder="RETURN_ADDRESS"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Transmission_Body</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-sm px-4 py-3 font-mono text-sm focus:outline-none focus:border-neon-blue transition-colors resize-none text-white"
                  placeholder="ENTER_MESSAGE_DATA..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'sending' ? 1 : 1.01, letterSpacing: '0.2em' }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.99 }}
                className="w-full py-4 bg-neon-blue text-black font-mono font-bold rounded-sm flex items-center justify-center gap-2 hover:neon-glow transition-all uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>Transmitting <Loader2 className="w-5 h-5 animate-spin" /></>
                ) : status === 'success' ? (
                  'Transmission Successful!'
                ) : status === 'error' ? (
                  'Transmission Failed!'
                ) : (
                  <>Execute Transmission <Send size={18} /></>
                )}
              </motion.button>
              {status === 'success' && (
                <p className="text-xs font-mono text-neon-blue text-center uppercase tracking-wider mt-2">
                  Email sent! Opening WhatsApp to send directly...
                </p>
              )}
              {status === 'error' && (
                <p className="text-xs font-mono text-red-500 text-center uppercase tracking-wider mt-2">
                  Form transmission failed. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
