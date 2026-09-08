import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  Terminal, 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Wind, 
  Laptop, 
  Atom, 
  Cpu, 
  FileSpreadsheet, 
  Figma, 
  Palette, 
  GitBranch, 
  Github, 
  Gitlab, 
  Wrench, 
  Sun,
  Server,
  Network,
  Leaf,
  Cloud,
  Zap
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'ALL' },
  { id: 'languages', name: 'LANGUAGES' },
  { id: 'frontend', name: 'FRONTEND' },
  { id: 'backend', name: 'BACKEND' },
  { id: 'database', name: 'DATABASE' },
  { id: 'cloud', name: 'CLOUD' },
  { id: 'tools', name: 'TOOLS' }
];

const skills = [
  // Programming Languages
  { name: 'Java', categories: ['languages'], icon: Coffee, color: 'text-orange-500' },
  { name: 'Python', categories: ['languages'], icon: Terminal, color: 'text-yellow-500' },
  { name: 'JavaScript', categories: ['languages'], icon: Code2, color: 'text-yellow-400' },
  { name: 'TypeScript', categories: ['languages'], icon: Code2, color: 'text-blue-500' },
  { name: 'SQL', categories: ['languages'], icon: Database, color: 'text-blue-400' },
  { name: 'C', categories: ['languages'], icon: Terminal, color: 'text-gray-400' },

  // Frontend Development
  { name: 'HTML', categories: ['frontend'], icon: Globe, color: 'text-orange-600' },
  { name: 'CSS', categories: ['frontend'], icon: Layers, color: 'text-blue-400' },
  { name: 'Tailwind CSS', categories: ['frontend'], icon: Wind, color: 'text-sky-400' },
  { name: 'Bootstrap', categories: ['frontend'], icon: Laptop, color: 'text-purple-500' },
  { name: 'React', categories: ['frontend'], icon: Atom, color: 'text-cyan-400' },
  { name: 'Next.js', categories: ['frontend'], icon: Layers, color: 'text-white' },
  { name: 'Vite', categories: ['frontend'], icon: Zap, color: 'text-purple-400' },

  // Backend Development
  { name: 'Spring Boot', categories: ['backend'], icon: Coffee, color: 'text-green-500' },
  { name: 'Node.js', categories: ['backend'], icon: Cpu, color: 'text-green-600' },
  { name: 'Express.js', categories: ['backend'], icon: Terminal, color: 'text-gray-300' },
  { name: 'Flask', categories: ['backend'], icon: Server, color: 'text-gray-200' },

  // Database & Concepts
  { name: 'PostgreSQL', categories: ['database'], icon: Database, color: 'text-blue-400' },
  { name: 'MongoDB', categories: ['database'], icon: Leaf, color: 'text-green-500' },
  { name: 'MySQL', categories: ['database'], icon: Database, color: 'text-blue-500' },
  { name: 'SQLite', categories: ['database'], icon: Database, color: 'text-sky-400' },

  // Cloud & Deployment
  { name: 'AWS', categories: ['cloud'], icon: Cloud, color: 'text-orange-400' },
  { name: 'Firebase Hosting', categories: ['cloud'], icon: Server, color: 'text-yellow-500' },
  { name: 'Vercel', categories: ['cloud'], icon: Globe, color: 'text-white' },
  { name: 'Netlify', categories: ['cloud'], icon: Globe, color: 'text-teal-400' },

  // Tools & Technologies
  { name: 'Git', categories: ['tools'], icon: GitBranch, color: 'text-orange-600' },
  { name: 'GitHub', categories: ['tools'], icon: Github, color: 'text-white' },
  { name: 'GitLab', categories: ['tools'], icon: Gitlab, color: 'text-orange-500' },
  { name: 'VS Code', categories: ['tools'], icon: Laptop, color: 'text-blue-500' },
  { name: 'IntelliJ IDEA', categories: ['tools'], icon: Wrench, color: 'text-indigo-500' },
  { name: 'Eclipse', categories: ['tools'], icon: Sun, color: 'text-blue-400' },

  // Data Analytics & Spreadsheets (Moved to tools)
  { name: 'Excel', categories: ['tools'], icon: FileSpreadsheet, color: 'text-green-700' },

  // UI / UX & Design (Moved to tools)
  { name: 'Figma', categories: ['tools'], icon: Figma, color: 'text-pink-500' },
  { name: 'Canva', categories: ['tools'], icon: Palette, color: 'text-blue-400' },
  { name: 'WordPress', categories: ['tools'], icon: Globe, color: 'text-sky-600' }
];

// Helper mapping to official logos CDN
const getLogoUrl = (skillName: string) => {
  const slug = skillName.toLowerCase().trim();
  switch (slug) {
    case 'aws':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg';
    case 'firebase hosting':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg';
    case 'vercel':
      return 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/vercel.svg';
    case 'netlify':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg';
    case 'java':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg';
    case 'python':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg';
    case 'javascript':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg';
    case 'typescript':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg';
    case 'c':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg';
    case 'html':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg';
    case 'css':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg';
    case 'tailwind css':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg';
    case 'bootstrap':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg';
    case 'react':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg';
    case 'next.js':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg';
    case 'spring boot':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg';
    case 'node.js':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg';
    case 'express.js':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg';
    case 'postgresql':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg';
    case 'mongodb':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg';
    case 'mysql':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg';
    case 'sqlite':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg';
    case 'excel':
      return 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/microsoftexcel.svg';
    case 'figma':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg';
    case 'canva':
      return 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg';
    case 'wordpress':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg';
    case 'git':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg';
    case 'github':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg';
    case 'gitlab':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg';
    case 'vs code':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg';
    case 'intellij idea':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg';
    case 'eclipse':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg';
    case 'vite':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg';
    case 'flask':
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg';
    default:
      return null;
  }
};

const needsInvert = (name: string) => {
  const slug = name.toLowerCase().trim();
  return slug === 'github' || slug === 'next.js' || slug === 'express.js' || slug === 'vercel' || slug === 'flask';
};

// Skill Card Logo Component (with Fallback)
const SkillCardLogo = ({ name, fallbackIcon: FallbackIcon, color, isBg = false }: { name: string; fallbackIcon: React.ComponentType<any>; color: string; isBg?: boolean }) => {
  const [error, setError] = useState(false);
  const logoUrl = getLogoUrl(name);

  if (logoUrl && !error) {
    if (isBg) {
      return (
        <img
          src={logoUrl}
          alt=""
          className={`w-14 h-14 object-contain opacity-[0.04] group-hover:opacity-[0.09] transition-opacity select-none pointer-events-none ${needsInvert(name) ? 'invert' : ''}`}
          onError={() => setError(true)}
        />
      );
    }
    return (
      <img
        src={logoUrl}
        alt={`${name} logo`}
        className={`w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-110 ${needsInvert(name) ? 'invert' : ''}`}
        onError={() => setError(true)}
      />
    );
  }

  // Fallback to Lucide Icons
  if (isBg) {
    return <FallbackIcon className="opacity-5 group-hover:opacity-10 transition-opacity" size={48} />;
  }
  return <FallbackIcon className={color} size={18} />;
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = skills.filter(
    skill => activeCategory === 'all' || skill.categories.includes(activeCategory)
  );

  // Split skills into three rows for a triple-decker train effect
  const row1 = filteredSkills.filter((_, idx) => idx % 3 === 0);
  const row2 = filteredSkills.filter((_, idx) => idx % 3 === 1);
  const row3 = filteredSkills.filter((_, idx) => idx % 3 === 2);

  // Helper to repeat items so the marquee has enough length to loop seamlessly
  const getRepeatedRow = (rowSkills: typeof skills, targetCount = 10) => {
    if (rowSkills.length === 0) return [];
    let repeated = [...rowSkills];
    while (repeated.length < targetCount) {
      repeated = [...repeated, ...rowSkills];
    }
    return repeated;
  };

  const renderSkillCard = (skill: typeof skills[0], index: number, prefix: string, isStatic: boolean = false) => (
    <div 
      key={`${prefix}-${skill.name}-${index}`}
      className={`${isStatic ? 'w-full' : 'w-52'} h-20 glass p-4 rounded-sm flex items-center gap-3 relative overflow-hidden group border border-white/10 hover:border-neon-blue/50 hover:bg-black/80 transition-all duration-300 flex-shrink-0 cursor-pointer select-none`}
    >
      {/* Decorative corner lines for sci-fi look */}
      <div className="absolute top-0 left-0 w-2 h-[1px] bg-neon-blue/20 group-hover:bg-neon-blue/50 transition-colors" />
      <div className="absolute top-0 left-0 w-[1px] h-2 bg-neon-blue/20 group-hover:bg-neon-blue/50 transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-neon-blue/20 group-hover:bg-neon-blue/50 transition-colors" />
      <div className="absolute bottom-0 right-0 w-[1px] h-2 bg-neon-blue/20 group-hover:bg-neon-blue/50 transition-colors" />

      {/* Background faint giant icon */}
      <div className="absolute -top-1 -right-1 p-2 transition-all duration-300 transform group-hover:scale-110">
        <SkillCardLogo name={skill.name} fallbackIcon={skill.icon} color={skill.color} isBg={true} />
      </div>
      
      {/* Small icon on the left inside a container */}
      <div className="p-2 rounded-sm bg-white/5 w-9 h-9 flex items-center justify-center transition-all duration-300 group-hover:bg-neon-blue/10">
        <SkillCardLogo name={skill.name} fallbackIcon={skill.icon} color={skill.color} />
      </div>
      
      {/* Text details */}
      <div className="flex-1 min-w-0">
        <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white truncate group-hover:text-neon-blue transition-colors">
          {skill.name}
        </h3>
      </div>

      {/* Cyber line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white/5 overflow-hidden">
        <div className="bg-neon-blue h-full w-full transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100" />
      </div>
    </div>
  );

  const row1Repeated = getRepeatedRow(row1, 8);
  const row2Repeated = getRepeatedRow(row2, 8);
  const row3Repeated = getRepeatedRow(row3, 8);

  return (
    <section id="skills" className="py-[90px] bg-black/50 relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6">
        {/* Title */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-neon-blue" />
              <h2 className="text-3xl md:text-4xl font-bold font-mono uppercase tracking-tighter whitespace-nowrap">
                <span className="text-neon-blue">02.</span> SKILL_MATRIX
              </h2>
            </div>
            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
              [ Category: {activeCategory.toUpperCase()} ] [ Total_Skills: {filteredSkills.length} ]
            </p>
          </div>

          {/* Filtering Buttons */}
          <div className="flex overflow-x-auto no-scrollbar flex-nowrap gap-2 w-full md:w-auto pb-3 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 text-[11px] font-mono font-bold uppercase tracking-widest border transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-neon-blue text-black border-neon-blue shadow-[0_0_15px_rgba(0,243,255,0.4)]'
                    : 'border-white/10 text-gray-500 hover:border-neon-blue/50 hover:text-neon-blue'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Area */}
        {activeCategory === 'all' ? (
          /* Train Tracks / Marquee Rows (Only for ALL) */
          <div className="relative py-4 overflow-hidden rounded-lg border border-white/5 bg-black/20">
            {/* Cyan background grid pattern behind tracks */}
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

            <div className="flex flex-col gap-5 relative z-10 py-4 overflow-hidden">
              {/* Track 1: Row 1 of Skills */}
              {row1Repeated.length > 0 && (
                <div className="relative w-full overflow-hidden py-1">
                  {/* Horizontal Rail lines */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue/10 to-transparent" />
                  
                  <div 
                    className="animate-marquee-ltr flex gap-4 w-max" 
                    style={{ '--marquee-duration': '35s' } as React.CSSProperties}
                  >
                    {/* Render part A */}
                    {row1Repeated.map((skill, idx) => renderSkillCard(skill, idx, 'r1-a'))}
                    {/* Render part B for seamless loop */}
                    {row1Repeated.map((skill, idx) => renderSkillCard(skill, idx, 'r1-b'))}
                  </div>
                </div>
              )}

              {/* Track 2: Row 2 of Skills */}
              {row2Repeated.length > 0 && (
                <div className="relative w-full overflow-hidden py-1">
                  {/* Horizontal Rail lines */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue/10 to-transparent" />
                  
                  <div 
                    className="animate-marquee-ltr flex gap-4 w-max" 
                    style={{ '--marquee-duration': '45s' } as React.CSSProperties}
                  >
                    {/* Render part A */}
                    {row2Repeated.map((skill, idx) => renderSkillCard(skill, idx, 'r2-a'))}
                    {/* Render part B for seamless loop */}
                    {row2Repeated.map((skill, idx) => renderSkillCard(skill, idx, 'r2-b'))}
                  </div>
                </div>
              )}

              {/* Track 3: Row 3 of Skills */}
              {row3Repeated.length > 0 && (
                <div className="relative w-full overflow-hidden py-1">
                  {/* Horizontal Rail lines */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue/10 to-transparent" />
                  
                  <div 
                    className="animate-marquee-ltr flex gap-4 w-max" 
                    style={{ '--marquee-duration': '30s' } as React.CSSProperties}
                  >
                    {/* Render part A */}
                    {row3Repeated.map((skill, idx) => renderSkillCard(skill, idx, 'r3-a'))}
                    {/* Render part B for seamless loop */}
                    {row3Repeated.map((skill, idx) => renderSkillCard(skill, idx, 'r3-b'))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Static Responsive Grid (For Categories) */
          <div className="relative p-1">
            <div className="relative overflow-hidden rounded-lg border border-white/5 bg-black/20 p-6 min-h-[220px]">
              {/* Cyan background grid pattern */}
              <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

              <motion.div 
                layout 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 relative z-10"
              >
                <AnimatePresence mode="popLayout">
                  {filteredSkills.map((skill, idx) => (
                    <motion.div
                      key={`static-${skill.name}`}
                      layout
                      initial={{ opacity: 0, scale: 0.9, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -15 }}
                      transition={{ 
                        duration: 0.25, 
                        ease: "easeOut",
                        layout: { type: "spring", stiffness: 300, damping: 30 } 
                      }}
                    >
                      {renderSkillCard(skill, idx, 'static', true)}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
