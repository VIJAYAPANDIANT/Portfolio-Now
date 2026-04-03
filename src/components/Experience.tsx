import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    type: 'work',
    title: 'SQL Developer Intern',
    company: 'Elevate Labs',
    period: 'Jan 2026 - Present',
    desc: 'Completed SQL tasks involving queries, joins, and data analysis. Built monthly SQL-based real-world projects and optimized relational database queries.',
    icon: Briefcase
  },
  {
    type: 'work',
    title: 'Green Intern',
    company: '1M1B (1 Million for 1 Billion)',
    period: 'Feb 2026 - Mar 2026',
    desc: 'Designed and developed an AI-Powered Smart Waste Mapping Platform with real-time geospatial tracking to analyze and visualize waste accumulation patterns.',
    icon: Briefcase
  },
  {
    type: 'work',
    title: 'Java Developer & UI/UX Intern',
    company: 'Codec Technologies',
    period: 'January 2026',
    desc: 'Designed and developed Food Delivery System and Expense Tracker projects using Java and UI/UX principles, focusing on functionality and usability.',
    icon: Briefcase
  },
  {
    type: 'work',
    title: 'AI for Sustainability Virtual Intern',
    company: '1M1B (1 Million for 1 Billion)',
    period: 'Dec 2025 - Jan 2026',
    desc: 'Developed "EcoWise Pro", a sustainability-focused project using AI concepts to explore real-world applications resolving environmental challenges.',
    icon: Briefcase
  },
  {
    type: 'work',
    title: 'AI / ML & Data Analytics Intern',
    company: 'NoviTech R&D Pvt Ltd',
    period: 'Aug 2025 - Dec 2025',
    desc: 'Learned and applied fundamentals of Artificial Intelligence, Machine Learning, and Data Analytics through hands-on tasks involving data preprocessing and basic model building.',
    icon: Briefcase
  },
  {
    type: 'work',
    title: 'Java Development Intern',
    company: 'Cognifyz Technologies',
    period: 'Aug 2025 - Sep 2025',
    desc: 'Strengthened core Java concepts through problem-solving and practical exercises while solving assigned Java programming tasks.',
    icon: Briefcase
  },
  {
    type: 'work',
    title: 'Cloud Development Intern',
    company: 'Zero2site',
    period: 'May 2025 - Jun 2025',
    desc: 'Built cloud-based web applications using HTML, CSS, JavaScript, and Firebase. Developed Event Poll and Task Management modules.',
    icon: Briefcase
  },
  {
    type: 'education',
    title: 'B.E. in Computer Science',
    company: 'Easwari Engineering College',
    period: '2024 - 2028',
    desc: 'CGPA: 8.33. Focused on core programming, problem-solving, and practical applications.',
    icon: GraduationCap
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-neon-blue" />
          <h2 className="text-4xl font-bold font-mono uppercase tracking-tighter">
            <span className="text-neon-blue">04.</span> Timeline_Log
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neon-blue/20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 w-full">
                  <div className={`glass p-6 rounded-sm border-t border-neon-blue/20 relative ${
                    i % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <span className="text-neon-blue font-mono text-[10px] mb-2 block uppercase tracking-widest">
                      [ {item.period} ]
                    </span>
                    <h3 className="text-xl font-bold mb-1 font-mono uppercase">{item.title}</h3>
                    <h4 className="text-gray-500 font-mono text-xs mb-4">{item.company}</h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-sm bg-black border border-neon-blue/50 rotate-45 group hover:neon-glow transition-all">
                  <item.icon size={16} className="text-neon-blue -rotate-45" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
