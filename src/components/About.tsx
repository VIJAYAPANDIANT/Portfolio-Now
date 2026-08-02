import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-[90px] relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6">
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
              I am a <strong className="text-white font-semibold">Pre-Final Year Computer Science Engineering student</strong> at <strong className="text-white font-semibold">SRM Easwari Engineering College</strong>, aspiring to become a <strong className="text-white font-semibold">Software Development Engineer (SDE)</strong>. I am passionate about building <strong className="text-white font-semibold">scalable, high-performance, and AI-powered software solutions</strong> that solve real-world problems.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              My primary focus is <strong className="text-white font-semibold">Java Full Stack Development</strong>, with hands-on experience in <strong className="text-white font-semibold">Java, Spring Boot, React, JavaScript, SQL, Node.js, Express.js, MySQL, PostgreSQL, MongoDB, and Firebase</strong>. I enjoy designing backend systems, developing RESTful APIs, and building modern full-stack web applications while continuously strengthening my problem-solving skills through <strong className="text-white font-semibold">Data Structures & Algorithms (DSA)</strong>.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              Through internships, personal projects, and continuous learning, I have gained practical experience in <strong className="text-white font-semibold">software engineering, backend development, database design, cloud technologies, and AI integration</strong>. I enjoy transforming ideas into scalable, maintainable, and user-focused applications.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              I am continuously learning and exploring <strong className="text-white font-semibold">software architecture, cloud computing, system design, and Artificial Intelligence</strong> to become a <strong className="text-white font-semibold">well-rounded software engineer</strong> ready to build impactful products.
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
