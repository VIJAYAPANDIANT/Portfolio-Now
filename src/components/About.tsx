import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
                }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple opacity-50 blur-2xl"
              />
              <img
                src="/profile.jpg"
                alt="Profile"
                className="relative z-10 w-full h-full object-cover rounded-2xl border-2 border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex flex-col mb-6">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-neon-blue" />
                <h2 className="text-4xl font-bold font-mono uppercase tracking-tighter">
                  <span className="text-neon-blue">01.</span> PROFILE
                </h2>
              </div>
              <div className="text-[10px] font-mono text-neon-blue mt-1.5 ml-16 tracking-widest uppercase">
                SYSTEM STATUS: ACTIVE
              </div>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              I am a <strong className="text-white font-semibold">Pre-Final Year Computer Science Engineering student</strong> at <strong className="text-white font-semibold">SRM Easwari Engineering College</strong>, passionate about building <strong className="text-white font-semibold">scalable software systems</strong>, <strong className="text-white font-semibold">backend applications</strong>, and <strong className="text-white font-semibold">AI-driven solutions</strong>.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              With a strong focus on <strong className="text-white font-semibold">problem solving</strong>, <strong className="text-white font-semibold">full-stack development</strong>, and <strong className="text-white font-semibold">modern software engineering</strong>, I enjoy transforming ideas into practical, real-world applications.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              My expertise includes <strong className="text-white font-semibold">Java, JavaScript, SQL, and modern web technologies</strong>, with hands-on experience developing <strong className="text-white font-semibold">web applications, backend systems, and intelligent software solutions</strong>.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              Whether designing scalable APIs, building interactive user experiences, or exploring Artificial Intelligence, I aim to create technology that delivers <strong className="text-white font-semibold">impact, performance, and meaningful innovation</strong>.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-4 rounded-sm border-l-2 border-neon-blue">
                <h4 className="text-neon-blue font-mono font-bold text-2xl">Student</h4>
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">Experience</p>
              </div>
              <div className="glass p-4 rounded-sm border-l-2 border-neon-purple">
                <h4 className="text-neon-purple font-mono font-bold text-2xl">10+</h4>
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">Projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
