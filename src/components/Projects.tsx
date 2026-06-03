import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Smart Resume Builder',
    description: 'A full-stack AI-powered Resume Builder & ATS Checker. Features real-time side-by-side preview, ATS scoring, CV tailoring, and cover letter generation.',
    category: 'Web',
    tech: ['React', 'Express.js', 'PostgreSQL', 'Gemini API', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/VIJAYAPANDIANT/Smart-Resume-Builder',
    live: 'https://smart-resume-builder-a1ej.vercel.app'
  },
  {
    id: 2,
    title: 'AI Smart Waste Mapping',
    description: 'A community-driven platform empowering citizens to track and manage waste hotspots. Features AI-powered waste classification, live interactive mapping, and a gamified reputation system.',
    category: 'AI',
    tech: ['Node.js', 'Express.js', 'Supabase', 'Leaflet.js', 'Chart.js', 'Gemini API'],
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/VIJAYAPANDIANT/AI-Powered-Smart-Waste-Mapping-Platform',
    live: '#'
  },
  {
    id: 3,
    title: 'Online Examination System',
    description: 'Cutting-edge Online Examination System with AI Proctoring. Features real-time monitoring, multi-language code execution, and dynamic leaderboards. Secure, scalable, and fully Dockerized.',
    category: 'Backend',
    tech: ['React', 'Spring Boot', 'MySQL', 'Docker', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/VIJAYAPANDIANT/Online-Examination-System',
    live: 'https://online-examination-system-m6sf.vercel.app'
  },
  {
    id: 4,
    title: 'College Discovery Platform',
    description: 'Premium full-stack college discovery and comparison platform that helps students explore, compare, and analyze universities using smart filters, tuition insights, and reviews.',
    category: 'Web',
    tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind', 'Zustand'],
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/VIJAYAPANDIANT/College-Discovery-Platform',
    live: 'https://college-discovery-platform-mfqh.vercel.app'
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
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-neon-blue" />
              <h2 className="text-3xl md:text-4xl font-bold font-mono uppercase tracking-tighter whitespace-nowrap">
                <span className="text-neon-blue">03.</span> PROJECT_ARCHIVE
              </h2>
            </div>
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
