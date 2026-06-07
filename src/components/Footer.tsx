import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export const Footer = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="py-6 border-t border-white/10 relative z-40">
      <div className="w-full max-w-[1400px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-2"
        >
          <p className="text-gray-500 text-sm">
            Built with <span className="text-neon-pink">❤️</span> by <span className="text-white font-bold">Vijayapandian T</span>
          </p>
          <div className="flex justify-center gap-8 text-xs text-gray-600">
            <button 
              onClick={() => setModalType('privacy')} 
              className="hover:text-neon-blue transition-colors cursor-pointer font-mono text-[10px] uppercase tracking-wider"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setModalType('terms')} 
              className="hover:text-neon-blue transition-colors cursor-pointer font-mono text-[10px] uppercase tracking-wider"
            >
              Terms of Service
            </button>
          </div>
          <p className="text-[10px] text-gray-700 mt-4 font-mono">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </motion.div>
      </div>

      {/* Cyberpunk Modal Overlays */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={() => setModalType(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass max-w-lg w-full p-8 rounded-sm border-t border-neon-blue/20 relative z-10"
            >
              <button 
                onClick={() => setModalType(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-neon-blue transition-colors cursor-pointer p-1"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              
              <h3 className="text-lg font-bold font-mono text-neon-blue mb-6 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-4 bg-neon-blue inline-block animate-pulse" />
                {modalType === 'privacy' ? 'Security Protocol: Privacy Policy' : 'Terms of Transmission: Terms of Service'}
              </h3>
              
              <div className="text-xs font-mono text-gray-400 space-y-4 max-h-[300px] overflow-y-auto pr-2 leading-relaxed">
                {modalType === 'privacy' ? (
                  <>
                    <p className="text-neon-pink font-semibold">[ SECTION_01: INFORMATION COLLECTION ]</p>
                    <p>We do not collect any personal data automatically, except for standard connection metrics. Any personal information (Name, Email, Message) is only recorded if you voluntarily transmit it via the contact form.</p>
                    
                    <p className="text-neon-pink font-semibold">[ SECTION_02: TELEMETRY & PROCESSING ]</p>
                    <p>All contact submissions are routed securely via FormSubmit AJAX endpoints and WhatsApp APIs. We do not store your communication data on our own servers, nor do we distribute, share, or sell details to third-party organizations.</p>
                    
                    <p className="text-neon-pink font-semibold">[ SECTION_03: COOKIE SCHEMES ]</p>
                    <p>This web interface does not make use of persistent tracking cookies or user fingerprinting technologies.</p>
                    
                    <p className="text-neon-pink font-semibold">[ SECTION_04: CONTACT PROTOCOL ]</p>
                    <p>For deletion requests, inquiries, or security concerns, execute communication directly to: <span className="text-white">vijayapandian112007@gmail.com</span>.</p>
                  </>
                ) : (
                  <>
                    <p className="text-neon-pink font-semibold">[ DECREE_01: INTELLECTUAL ASSETS ]</p>
                    <p>All program designs, components, graphics, animations, and layouts featured on this portfolio site are protected as the intellectual property of Vijayapandian T. Unauthorized copying, distribution, or resale is strictly prohibited.</p>
                    
                    <p className="text-neon-pink font-semibold">[ DECREE_02: INPUT RULES & CONDUCT ]</p>
                    <p>Spamming, automated transmissions, or loading the contact framework with malicious strings (including SQL injections or cross-site scripting attempts) will result in immediate network blocklisting.</p>
                    
                    <p className="text-neon-pink font-semibold">[ DECREE_03: TECHNICAL DISCLAIMERS ]</p>
                    <p>This application is provided "as is" without representation or warranties of any kind. The host/author is not liable for data loss, service downtime, or hardware issues resulting from browsing this site.</p>
                    
                    <p className="text-neon-pink font-semibold">[ DECREE_04: MODIFICATION RIGHTS ]</p>
                    <p>We reserve the right to alter security rules and terms without prior notice to the browser agent.</p>
                  </>
                )}
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => setModalType(null)}
                  className="px-4 py-2 border border-neon-blue/40 hover:border-neon-blue text-neon-blue text-[10px] font-mono uppercase tracking-widest transition-all hover:bg-neon-blue/10 cursor-pointer"
                >
                  Terminate Interface
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
