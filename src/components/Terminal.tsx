import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal as TerminalIcon, ShieldAlert, Cpu } from 'lucide-react';

interface TerminalProps {
  onClose: () => void;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: 'system_init',
      output: (
        <div className="font-mono text-xs text-ai-green space-y-1">
          <p>[+] INITIALIZING VP_CORE COMPILER V4.2.1-SECURE...</p>
          <p>[+] SCANNING NETWORK INTERFACES... OK</p>
          <p>[+] SYNAPSE LINK SYNCHRONIZED [LATENCY 12ms]</p>
          <p>[+] Welcome, authorized user. Type <span className="text-neon-blue font-bold">help</span> to list available commands, or <span className="text-neon-pink font-bold">gui</span> to exit CLI mode.</p>
        </div>
      ),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on mount or click anywhere in terminal
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const processCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    let response: React.ReactNode = '';

    if (trimmed === '') {
      response = '';
    } else if (trimmed === 'help') {
      response = (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-400 font-mono text-xs max-w-xl">
          <div><span className="text-neon-blue font-bold">about</span> - User Profile and background info</div>
          <div><span className="text-neon-blue font-bold">skills</span> - Retrieve tech stack matrix</div>
          <div><span className="text-neon-blue font-bold">projects</span> - View developed software archives</div>
          <div><span className="text-neon-blue font-bold">experience</span> - View timeline log of internships</div>
          <div><span className="text-neon-blue font-bold">contact</span> - Retrieve secure contact parameters</div>
          <div><span className="text-neon-blue font-bold">secrets</span> - Access decrypted network data</div>
          <div><span className="text-neon-blue font-bold">clear</span> - Clear terminal session buffer</div>
          <div><span className="text-neon-pink font-bold">gui</span> - Switch back to graphical interface</div>
        </div>
      );
    } else if (trimmed === 'about') {
      response = (
        <div className="space-y-2 text-xs font-mono text-gray-300">
          <p className="text-neon-blue font-bold">&gt;&gt; USER_PROFILE_RETRIEVAL: SUCCESS</p>
          <p><span className="text-neon-purple font-bold">NAME:</span> Vijayapandian T</p>
          <p><span className="text-neon-purple font-bold">LOCATION:</span> Chennai, India</p>
          <p><span className="text-neon-purple font-bold">EDUCATION:</span> B.E. in Computer Science & Engineering, Easwari Engineering College (2024 - 2028)</p>
          <p><span className="text-neon-purple font-bold">CGPA:</span> 8.33 / 10</p>
          <p className="leading-relaxed">
            <span className="text-neon-purple font-bold">BIO:</span> Highly motivated Software Development Engineer focused on full-stack systems and Artificial Intelligence. Specialized in building robust APIs, scalable databases, and smooth interactive interfaces.
          </p>
        </div>
      );
    } else if (trimmed === 'skills') {
      response = (
        <div className="space-y-3 text-xs font-mono">
          <p className="text-neon-blue font-bold">&gt;&gt; STACK_MATRIX_DUMP:</p>
          <div className="grid grid-cols-2 gap-4 max-w-md text-gray-300">
            <div>
              <p className="text-neon-purple font-bold">[ Languages ]</p>
              <p>- Java (Proficient, OOP, Collections)</p>
              <p>- JavaScript / TypeScript (ES6+, Node)</p>
              <p>- Python (Data Preprocessing, ML Basics)</p>
              <p>- SQL (Complex Queries, Joins, Tuning)</p>
            </div>
            <div>
              <p className="text-neon-purple font-bold">[ Web & DB ]</p>
              <p>- React 19 (Hooks, Context, Fiber)</p>
              <p>- Node.js / Express (RESTful APIs)</p>
              <p>- Spring Boot (Backend Services)</p>
              <p>- PostgreSQL / MongoDB / Redis</p>
            </div>
          </div>
        </div>
      );
    } else if (trimmed === 'projects') {
      response = (
        <div className="space-y-4 text-xs font-mono text-gray-300">
          <p className="text-neon-blue font-bold">&gt;&gt; PROJECT_ARCHIVE_RETRIEVED [3 ACTIVE ENTRIES]:</p>
          
          <div className="border-l border-neon-blue/30 pl-3 py-1 space-y-1">
            <p className="text-white font-bold">[01] Smart Resume Builder</p>
            <p className="text-gray-400">Description: Full-stack application with JWT authentication, dashboard, and AI ATS Checker (OpenAI Vision).</p>
            <p className="text-neon-purple">Tech: React, Node.js, Supabase, Tailwind, OpenAI API</p>
          </div>
          
          <div className="border-l border-neon-blue/30 pl-3 py-1 space-y-1">
            <p className="text-white font-bold">[02] AI Smart Waste Mapping</p>
            <p className="text-gray-400">Description: Platform using Node.js & Google Gemini API to classify waste. Geospatial tracking and rewards.</p>
            <p className="text-neon-purple">Tech: Node.js, Supabase, Chart.js, Gemini API</p>
          </div>

          <div className="border-l border-neon-blue/30 pl-3 py-1 space-y-1">
            <p className="text-white font-bold">[03] Online Examination System</p>
            <p className="text-gray-400">Description: Scalable exam engine with RabbitMQ & Redis, multi-language compiler, AI proctoring.</p>
            <p className="text-neon-purple">Tech: React, Spring Boot, Redis, RabbitMQ, WebSockets</p>
          </div>
        </div>
      );
    } else if (trimmed === 'experience') {
      response = (
        <div className="space-y-3 text-xs font-mono text-gray-300">
          <p className="text-neon-blue font-bold">&gt;&gt; TIMELINE_LOG_RETRIEVAL:</p>
          <div className="space-y-2">
            <p><span className="text-neon-purple font-bold">Jan 2026 - Present:</span> SQL Developer Intern @ Elevate Labs</p>
            <p><span className="text-neon-purple font-bold">Feb 2026 - Mar 2026:</span> Green Intern @ 1M1B (AI Smart Waste Mapping)</p>
            <p><span className="text-neon-purple font-bold">Jan 2026:</span> Java Developer & UI/UX Intern @ Codec Technologies</p>
            <p><span className="text-neon-purple font-bold">Dec 2025 - Jan 2026:</span> AI for Sustainability Virtual Intern @ 1M1B</p>
            <p><span className="text-neon-purple font-bold">Aug 2025 - Dec 2025:</span> AI/ML & Data Analytics Intern @ NoviTech R&D</p>
            <p><span className="text-neon-purple font-bold">Aug 2025 - Sep 2025:</span> Java Developer Intern @ Cognifyz Technologies</p>
            <p><span className="text-neon-purple font-bold">May 2025 - Jun 2025:</span> Cloud Development Intern @ Zero2site</p>
          </div>
        </div>
      );
    } else if (trimmed === 'contact') {
      response = (
        <div className="space-y-2 text-xs font-mono text-gray-300">
          <p className="text-neon-blue font-bold">&gt;&gt; ESTABLISHING COMMS ROUTE...</p>
          <p><span className="text-neon-purple font-bold">SMTP PROTOCOL:</span> vijayapandian112007@gmail.com</p>
          <p><span className="text-neon-purple font-bold">VOIP CHANNEL:</span> +91 8610554060</p>
          <p><span className="text-neon-purple font-bold">NETWORKS:</span> linkedin.com/in/vijayapandian-t | github.com/VIJAYAPANDIANT</p>
        </div>
      );
    } else if (trimmed === 'secrets') {
      response = (
        <div className="space-y-2 text-xs font-mono text-neon-pink">
          <div className="flex items-center gap-2">
            <ShieldAlert size={14} className="animate-pulse" />
            <p className="font-bold">WARNING: ACCESSING DECRYPTED DATA DUMP</p>
          </div>
          <p>[x] VP_CORE TEMPERATURE: 32.4°C [Status: STABLE]</p>
          <p>[x] CLOUD RUNTIME INSTANCE: ACTIVE</p>
          <p>[x] ENCRYPTION SHIELD: ACTIVE [AES-256]</p>
          <p>[x] EASTER_EGG: "Vijayapandian is ready to innovate and build next-gen AI platforms."</p>
        </div>
      );
    } else if (trimmed === 'gui') {
      onClose();
      return;
    } else if (trimmed === 'clear') {
      setHistory([]);
      return;
    } else if (trimmed === 'ai') {
      response = (
        <div className="space-y-2 text-xs font-mono text-gray-300">
          <p className="text-neon-blue font-bold">&gt;&gt; NEURAL_CORE_AI LINKING...</p>
          <p>VP_CORE AI Assistant is accessible in the bottom right corner of the GUI. Activate GUI mode with the <span className="text-neon-pink font-bold">gui</span> command to interact directly, or use standard terminal commands here.</p>
        </div>
      );
    } else {
      response = (
        <p className="text-red-500 font-mono text-xs">
          Command not found: '{cmdText}'. Type <span className="text-neon-blue font-bold">help</span> to view all commands.
        </p>
      );
    }

    setHistory((prev) => [...prev, { command: cmdText, output: response }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(input);
      if (input.trim() !== '') {
        setCommandHistory((prev) => [...prev, input]);
      }
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md border border-neon-blue/30 m-4 rounded-sm flex flex-col font-mono text-white select-text cursor-text"
      onClick={handleTerminalClick}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between bg-white/5 border-b border-neon-blue/20 px-4 py-2 text-xs select-none">
        <div className="flex items-center gap-2 text-neon-blue">
          <TerminalIcon size={14} />
          <span>VP_CORE_CLI v4.2.1</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-ai-green text-[10px]">
            <Cpu size={12} className="animate-spin" style={{ animationDuration: '4s' }} />
            <span>ONLINE</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-gray-500 hover:text-neon-pink transition-colors font-bold uppercase cursor-pointer"
          >
            [ EXIT_CLI ]
          </button>
        </div>
      </div>

      {/* Terminal Logs Area */}
      <div 
        ref={containerRef}
        className="flex-1 p-6 overflow-y-auto space-y-4 custom-scrollbar"
      >
        {history.map((log, idx) => (
          <div key={idx} className="space-y-1">
            {log.command !== 'system_init' && (
              <div className="flex items-center gap-2 text-neon-blue font-bold text-xs">
                <span>guest@vp_core:~#</span>
                <span className="text-white">{log.command}</span>
              </div>
            )}
            <div className="pl-4">{log.output}</div>
          </div>
        ))}
      </div>

      {/* Terminal Input Line */}
      <div className="bg-black/50 border-t border-neon-blue/10 px-6 py-4 flex items-center gap-2">
        <span className="text-neon-blue font-bold text-xs select-none">guest@vp_core:~#</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none border-none text-white text-xs font-mono focus:ring-0 focus:outline-none placeholder-white/20"
          placeholder="Enter command (e.g. help, about, gui)..."
          autoComplete="off"
          spellCheck="false"
        />
      </div>
    </motion.div>
  );
};
