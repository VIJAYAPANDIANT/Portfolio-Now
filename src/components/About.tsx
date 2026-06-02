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
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto group">
              {/* Animated rotating background mesh glow */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
                }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink opacity-40 blur-2xl group-hover:opacity-75 transition-opacity"
              />
              
              {/* Corner brackets */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-neon-blue" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-neon-blue" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-neon-blue" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-neon-blue" />

              <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl border border-neon-blue/30 bg-black/60 group-hover:border-neon-blue transition-all duration-300">
                {/* scanline overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent pointer-events-none z-20 animate-pulse" />
                <img
                  src="/cyber_avatar.png"
                  alt="Vijayapandian T"
                  className="relative z-10 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-neon-blue" />
              <h2 className="text-4xl font-bold font-mono uppercase tracking-tighter">
                <span className="text-neon-blue">01.</span> User_Profile
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              I am a passionate developer currently pursuing my B.E. in Computer Science and Engineering at Easwari Engineering College. With a strong focus on building robust full-stack systems and exploring the frontiers of Artificial Intelligence, my journey is driven by a curiosity to solve complex problems.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              With expertise in Java, JavaScript, and modern web technologies, I strive to create impactful digital experiences. Whether it's architecting scalable APIs or developing intuitive user interfaces, I bring a blend of technical skill and creative thinking to every project.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="glass p-4 rounded-sm border-l-2 border-neon-blue hover:bg-neon-blue/5 transition-colors">
                <h4 className="text-neon-blue font-mono font-bold text-2xl">Student</h4>
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">Experience</p>
              </div>
              <div className="glass p-4 rounded-sm border-l-2 border-neon-purple hover:bg-neon-purple/5 transition-colors">
                <h4 className="text-neon-purple font-mono font-bold text-2xl">10+</h4>
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">Projects</p>
              </div>
            </div>

            <div className="glass p-4 rounded-sm border border-white/5 font-mono text-[10px] text-gray-500 grid grid-cols-2 gap-2">
              <div>&gt; HOSTNAME: VP_CORE_NET</div>
              <div>&gt; CPU_LOAD: 8.4% [OK]</div>
              <div>&gt; STACK_SYNC: 100% [SYNCED]</div>
              <div>&gt; MEMORY_ALLOC: NORMAL</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
