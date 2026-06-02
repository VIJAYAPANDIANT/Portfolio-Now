import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, X, Terminal, Cpu, Play } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  category: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
  logs: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Smart Resume Builder',
    description: 'Full-stack application with JWT authentication, responsive dashboard, and AI ATS Checker using OpenAI Vision API.',
    challenge: 'Recruiters reject resumes in under 6 seconds. Candidates lack insight into how Applicant Tracking Systems (ATS) score their profiles.',
    solution: 'Engineered an interactive resume workspace that renders resume forms in real-time, coupled with an ATS score compiler leveraging Gemini/OpenAI Vision API to perform layout analysis and provide structured enhancement suggestions.',
    category: 'Web',
    tech: ['React', 'Node.js', 'Supabase', 'Tailwind', 'OpenAI API'],
    image: '/smart_resume.png',
    github: 'https://github.com/VIJAYAPANDIANT',
    live: 'https://github.com/VIJAYAPANDIANT',
    logs: [
      '[SYS] Initializing parser engine...',
      '[SYS] Loading PDF reader binaries... OK',
      '[SYS] Connecting to secure OpenAI Vision API gateway...',
      '[SYS] Sending prompt payload [Image matrix: 800x1200]...',
      '[API] ATS SCORE RETRIEVED: 84 / 100',
      '[API] SUGGESTIONS:',
      '  - Expand technical achievements under SDE section.',
      '  - Align dates to right margin for parser layout standard.',
      '[SYS] Analysis compilation complete.'
    ]
  },
  {
    id: 2,
    title: 'AI Smart Waste Mapping',
    description: 'Platform using Node.js & Google Gemini API to classify waste images. Interactive dashboard and gamified rewards system.',
    challenge: 'Manual sorting of recyclables is inefficient and lacks community engagement. City boards cannot map municipal waste patterns.',
    solution: 'Designed a geospatial portal utilizing Node.js and the Gemini API. Citizens upload photos of waste, our model classifies it (organic vs. recyclable), logs the geographic coordinates, maps clusters, and awards gamified eco-credits to the user.',
    category: 'AI',
    tech: ['Node.js', 'Supabase', 'Chart.js', 'Gemini API'],
    image: '/waste_mapping.png',
    github: 'https://github.com/VIJAYAPANDIANT',
    live: 'https://github.com/VIJAYAPANDIANT',
    logs: [
      '[SYS] Initializing geospatial mapping overlay...',
      '[SYS] Leaflet Map tiles rendered successfully.',
      '[SYS] Syncing Gemini API model endpoint...',
      '[SYS] Image upload received (UUID: waste_data_4920)...',
      '[API] Running vision classifier: gemini-2.5-flash...',
      '[API] RESULT: Recyclable (HDPE Plastic Bottle) [Conf: 96.2%]',
      '[DB] Logged coordinates: [13.0827° N, 80.2707° E]',
      '[SYS] User account awarded +10 ECO-Credits.',
      '[SYS] Pipeline finished.'
    ]
  },
  {
    id: 3,
    title: 'Online Examination System',
    description: 'Scalable examination system with RabbitMQ & Redis, multi-language compiler, and AI-based real-time proctoring.',
    challenge: 'Online assessments face high rates of academic dishonesty and suffer from compiler server bottlenecks during peak submission hours.',
    solution: 'Developed a resilient test platform. Built a custom compiler sandboxed environment, queued executions using RabbitMQ, and cached data structures with Redis. Built an AI proctoring module using computer vision to track eye movement and detect extra displays in the user field of view.',
    category: 'Backend',
    tech: ['React', 'Spring Boot', 'Redis', 'RabbitMQ', 'WebSockets'],
    image: '/exam_system.png',
    github: 'https://github.com/VIJAYAPANDIANT',
    live: 'https://github.com/VIJAYAPANDIANT',
    logs: [
      '[SYS] Spawning compiler sandbox container...',
      '[SYS] Redis cluster status: ONLINE [Cache hit: 94.2%]',
      '[SYS] RabbitMQ exchange connected [Routing key: exam.submit.v1]',
      '[PROC] Initializing camera streams...',
      '[PROC] Face Mesh active. Tracking pupil coordinates...',
      '[PROC] WARNING: User looking off-screen for > 3.0s. Incident logged.',
      '[COMP] Executing code test cases (Language: Java)...',
      '[COMP] Output: PASS (Time: 32ms | Memory: 4.8MB)',
      '[SYS] Assessment sync complete.'
    ]
  }
];

const categories = ['All', 'AI', 'Web', 'Backend'];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [isConsoleRunning, setIsConsoleRunning] = useState(false);

  const filteredProjects = projects.filter(p => 
    activeCategory === 'All' || p.category === activeCategory
  );

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setConsoleLogs([]);
    setIsConsoleRunning(false);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setConsoleLogs([]);
    setIsConsoleRunning(false);
  };

  const runConsoleTest = (logs: string[]) => {
    if (isConsoleRunning) return;
    setIsConsoleRunning(true);
    setConsoleLogs([]);
    
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < logs.length) {
        setConsoleLogs(prev => [...prev, logs[currentIdx]]);
        currentIdx++;
      } else {
        clearInterval(interval);
        setIsConsoleRunning(false);
      }
    }, 400);
  };

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
                className={`px-4 py-1 text-[10px] font-mono uppercase tracking-widest border transition-all cursor-pointer ${
                  activeCategory === cat 
                    ? 'bg-neon-blue text-black border-neon-blue font-bold shadow-[0_0_10px_rgba(0,243,255,0.3)]' 
                    : 'border-white/10 text-gray-500 hover:border-neon-blue/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                onClick={() => handleOpenModal(project)}
                className="glass rounded-sm overflow-hidden group border-l-4 border-l-neon-blue/30 cursor-pointer transition-all hover:border-l-neon-blue hover:neon-glow hover:bg-black/50"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neon-blue/10 mix-blend-overlay" />
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/80 border border-neon-blue/30 text-neon-blue text-[9px] font-mono uppercase">
                    Click to Open Info
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
                  <h3 className="text-xl font-bold mb-3 font-mono uppercase tracking-tight text-white group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
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

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="bg-black/95 border border-neon-blue/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-sm flex flex-col relative text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner brackets inside modal */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-neon-blue/30 pointer-events-none" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-neon-blue/30 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-neon-blue/30 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-neon-blue/30 pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="flex items-center gap-3">
                  <Cpu className="text-neon-blue animate-pulse" size={18} />
                  <span className="text-[10px] font-mono text-neon-blue uppercase tracking-widest border border-neon-blue/30 px-2 py-0.5">
                    {selectedProject.category} CORE
                  </span>
                </div>
                <button 
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content Grid */}
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Challenge and Solution */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold font-mono text-white mb-2 uppercase tracking-tight">
                      {selectedProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-2 py-0.5 bg-neon-blue/10 text-[9px] font-mono text-neon-blue border border-neon-blue/20 uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neon-pink flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-neon-pink rounded-full" />
                      The Challenge
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-light">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-ai-green flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-ai-green rounded-full" />
                      The Solution
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-light">
                      {selectedProject.solution}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-white/10 text-xs text-gray-300 hover:text-neon-blue hover:border-neon-blue/50 font-mono uppercase tracking-wider transition-colors rounded-sm cursor-pointer"
                    >
                      <Github size={14} /> Repository
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-neon-blue text-black text-xs font-bold font-mono uppercase tracking-wider hover:neon-glow transition-all rounded-sm cursor-pointer"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>

                {/* Right: Simulation Console */}
                <div className="flex flex-col h-full min-h-[300px] border border-white/10 rounded-sm bg-black/40 p-4 font-mono text-xs text-white">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 select-none">
                    <div className="flex items-center gap-2 text-gray-500 text-[10px]">
                      <Terminal size={12} />
                      <span>SIMULATOR_SHELL</span>
                    </div>
                    <button
                      onClick={() => runConsoleTest(selectedProject.logs)}
                      disabled={isConsoleRunning}
                      className="flex items-center gap-1 px-2.5 py-1 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue hover:bg-neon-blue hover:text-black transition-all text-[9px] rounded-sm disabled:opacity-30 cursor-pointer"
                    >
                      <Play size={10} /> RUN DIAGNOSTIC
                    </button>
                  </div>

                  {/* Logs Screen */}
                  <div className="flex-1 overflow-y-auto space-y-2 text-[10px] text-gray-400">
                    {consoleLogs.length === 0 && !isConsoleRunning ? (
                      <p className="text-gray-600 italic mt-8 text-center">[ Diagnostic system idle. Click Run Diagnostic above. ]</p>
                    ) : (
                      consoleLogs.map((log, idx) => (
                        <p 
                          key={idx} 
                          className={
                            log.startsWith('[SYS]') ? 'text-neon-blue' :
                            log.startsWith('[API]') ? 'text-neon-purple font-bold' :
                            log.startsWith('[COMP]') ? 'text-ai-green' :
                            log.startsWith('[PROC]') ? 'text-neon-pink' :
                            'text-white'
                          }
                        >
                          {log}
                        </p>
                      ))
                    )}
                    {isConsoleRunning && (
                      <span className="inline-block w-2 h-3 bg-neon-blue animate-pulse ml-1" />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
