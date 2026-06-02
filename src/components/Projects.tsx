import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Smart Resume Builder',
    description: 'Full-stack application with JWT authentication, responsive dashboard, and AI ATS Checker using OpenAI Vision API.',
    category: 'Web',
    tech: ['React', 'Node.js', 'Supabase', 'Tailwind', 'OpenAI API'],
    image: 'https://picsum.photos/seed/resume/600/400',
    github: '#',
    live: '#'
  },
  {
    id: 2,
    title: 'AI Smart Waste Mapping',
    description: 'Platform using Node.js & Google Gemini API to classify waste images. Interactive dashboard and gamified rewards system.',
    category: 'AI',
    tech: ['Node.js', 'Supabase', 'Chart.js', 'Gemini API'],
    image: 'https://picsum.photos/seed/waste/600/400',
    github: '#',
    live: '#'
  },
  {
    id: 3,
    title: 'Online Examination System',
    description: 'Scalable examination system with RabbitMQ & Redis, multi-language compiler, and AI-based real-time proctoring.',
    category: 'Backend',
    tech: ['React', 'Spring Boot', 'Redis', 'RabbitMQ', 'WebSockets'],
    image: 'https://picsum.photos/seed/exam/600/400',
    github: '#',
    live: '#'
  }
];

const categories = ['All', 'AI', 'Web', 'Backend'];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="text-left">
            <h2 className="text-4xl font-bold font-mono uppercase tracking-tighter mb-4">
              <span className="text-neon-blue">03.</span> Project_Archive
            </h2>
            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
              [ Total_Entries: {projects.length} ] [ Status: Verified ]
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1 text-[10px] font-mono uppercase tracking-widest border transition-all ${
                  activeCategory === cat 
                    ? 'bg-neon-blue text-black border-neon-blue font-bold' 
                    : 'border-white/10 text-gray-500 hover:border-neon-blue/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="glass rounded-sm overflow-hidden group border-l-4 border-l-neon-blue/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neon-blue/10 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" title="GitHub Repository" className="p-3 bg-black/80 border border-neon-blue/50 rounded-full hover:bg-neon-blue hover:text-black transition-all">
                      <Github size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" title="Live Demo" className="p-3 bg-black/80 border border-neon-blue/50 rounded-full hover:bg-neon-blue hover:text-black transition-all">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-neon-blue uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-gray-600">
                      ID: {project.id.toString().padStart(3, '0')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-mono uppercase">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 bg-white/5 text-[9px] font-mono text-gray-400 border border-white/10 uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
