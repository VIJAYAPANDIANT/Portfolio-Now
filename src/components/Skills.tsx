import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Layers, 
  Terminal,
  Smartphone,
  Cloud
} from 'lucide-react';

const skills = [
  { name: 'Java', icon: Code2, color: 'text-orange-500', level: 90 },
  { name: 'JavaScript', icon: Terminal, color: 'text-yellow-400', level: 85 },
  { name: 'React', icon: Globe, color: 'text-blue-400', level: 80 },
  { name: 'Node.js', icon: Layers, color: 'text-green-600', level: 80 },
  { name: 'SQL', icon: Database, color: 'text-green-500', level: 75 },
  { name: 'Python', icon: Cpu, color: 'text-blue-600', level: 70 },
  { name: 'PostgreSQL', icon: Database, color: 'text-blue-400', level: 75 },
  { name: 'MongoDB', icon: Cloud, color: 'text-green-500', level: 70 },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-neon-blue" />
          <h2 className="text-4xl font-bold font-mono uppercase tracking-tighter">
            <span className="text-neon-blue">02.</span> Skill_Matrix
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass p-6 rounded-sm group transition-all hover:border-neon-blue/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
                <skill.icon size={48} />
              </div>
              
              <div className={`p-3 rounded-sm bg-white/5 w-fit mb-6 transition-all ${skill.color}`}>
                <skill.icon size={24} />
              </div>
              
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
