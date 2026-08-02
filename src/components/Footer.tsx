import React from 'react';
import { motion } from 'motion/react';

export const Footer = () => {
  return (
    <footer className="py-6 border-t border-white/10 relative z-40">
      <div className="w-full max-w-[1400px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-1.5"
        >
          <p className="text-gray-500 text-xs font-mono">
            Built with <span className="text-neon-pink">❤️</span> by <span className="text-white font-bold">Vijayapandian T</span>
          </p>
          <p className="text-[10px] text-gray-600 font-mono">
            &copy; {new Date().getFullYear()} Vijayapandian T. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
