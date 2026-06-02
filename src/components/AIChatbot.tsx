import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, CornerDownLeft } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

const SYSTEM_INSTRUCTION = `
You are VP_CORE_AI, the personal AI assistant for Vijayapandian T's portfolio website. 
Your tone is futuristic, professional, technical, yet friendly and helpful.
You represent Vijayapandian T (often referred to as VP).
Here is the data corpus about Vijayapandian:
- Name: Vijayapandian T (VP)
- Role: Aspiring Software Development Engineer (SDE), AI & Backend Enthusiast.
- Education: B.E. in Computer Science and Engineering at Easwari Engineering College (Batch: 2024 - 2028). Current CGPA: 8.33/10.
- Internships:
  1. SQL Developer Intern at Elevate Labs (Jan 2026 - Present): Optimized complex queries, database schema designs, and joins.
  2. Green Intern at 1M1B (Feb 2026 - Mar 2026): Designed and developed an AI-Powered Smart Waste Mapping Platform with geospatial tracking.
  3. Java Developer & UI/UX Intern at Codec Technologies (Jan 2026): Built Food Delivery System and Expense Tracker in Java.
  4. AI for Sustainability Virtual Intern at 1M1B (Dec 2025 - Jan 2026): Created EcoWise Pro, exploring AI applications for environmental issues.
  5. AI / ML & Data Analytics Intern at NoviTech R&D Pvt Ltd (Aug 2025 - Dec 2025): Hands-on data preprocessing and basic model building.
  6. Java Development Intern at Cognifyz Technologies (Aug 2025 - Sep 2025): Solved complex Java programming challenges.
  7. Cloud Development Intern at Zero2site (May 2025 - Jun 2025): Developed cloud-based event poll and task modules using HTML/JS/Firebase.
- Skills:
  - Languages: Java, JavaScript, Python, SQL, TypeScript
  - Frameworks/Libraries: React, Node.js, Express, Spring Boot
  - Databases: PostgreSQL, MongoDB, SQL, Redis, Supabase
  - Concepts: REST APIs, AI API integrations (Gemini, OpenAI), Message Brokers (RabbitMQ), WebSockets
- Core Projects:
  1. Smart Resume Builder: AI ATS Checker using OpenAI Vision API, responsive dashboard, JWT auth. (Tech: React, Node.js, Supabase, Tailwind, OpenAI API)
  2. AI Smart Waste Mapping: Node.js & Gemini API image classification platform with geo tracking and rewards dashboard. (Tech: Node.js, Supabase, Chart.js, Gemini API)
  3. Online Examination System: Scalable system with RabbitMQ & Redis, multi-language code compiler, and real-time AI proctoring. (Tech: React, Spring Boot, Redis, RabbitMQ, WebSockets)

When answering questions:
- Keep answers relatively concise and highly structured (use bullet points where appropriate).
- If asked how to contact Vijayapandian, provide: Email (vijayapandian112007@gmail.com), Phone (+91 8610554060), and links to his LinkedIn (linkedin.com/in/vijayapandian-t) and GitHub (github.com/VIJAYAPANDIANT).
- Emphasize his strengths in problem-solving, Java, database optimization, backend scaling, and AI.
`;

const SUGGESTIONS = [
  "What projects has he built?",
  "Tell me about his internships.",
  "What are his core technical skills?",
  "How can I contact Vijayapandian?",
];

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Neural interface initialized. Welcome to VP_CORE. I am VP_CORE_AI, ready to assist. Ask me anything about Vijayapandian\'s skills, projects, or background.',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      sender: 'user',
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      const isMockKey = !apiKey || apiKey === 'MY_GEMINI_API_KEY';

      if (isMockKey) {
        // Use local fallback engine
        setTimeout(() => {
          const responseText = generateLocalFallback(textToSend);
          setMessages((prev) => [
            ...prev,
            {
              sender: 'bot',
              text: responseText,
              timestamp: new Date(),
            },
          ]);
          setIsLoading(false);
        }, 1000);
      } else {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: textToSend,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
          },
        });

        const reply = response.text || 'Error in retrieval stream. Connection reset.';
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: reply,
            timestamp: new Date(),
          },
        ]);
        setIsLoading(false);
      }
    } catch (err) {
      console.error('Chatbot API error:', err);
      // Fallback in case of call error
      setTimeout(() => {
        const responseText = generateLocalFallback(textToSend) + '\n\n*(Note: Comms link down; serving cached data)*';
        setMessages((prev) => [
          ...prev,
          {
            sender: 'bot',
            text: responseText,
            timestamp: new Date(),
          },
        ]);
        setIsLoading(false);
      }, 1000);
    }
  };

  const generateLocalFallback = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes('project') || q.includes('build') || q.includes('create') || q.includes('make')) {
      return `Here are Vijayapandian's core projects:
\n• **Smart Resume Builder**: AI ATS Checker using OpenAI Vision API, responsive user dashboard, JWT auth. (React, Node.js, Supabase, Tailwind, OpenAI)
\n• **AI Smart Waste Mapping**: Image classification via Google Gemini API to identify recyclable material, rewards systems. (Node.js, Supabase, Chart.js, Gemini API)
\n• **Online Examination System**: Scalable test platform featuring multi-language compilers, RabbitMQ queuing, Redis, and AI-based real-time proctoring. (React, Spring Boot, Redis, RabbitMQ, WebSockets)`;
    }
    
    if (q.includes('intern') || q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('elevate')) {
      return `Vijayapandian has acquired professional experience through several internships:
\n1. **SQL Developer Intern** at Elevate Labs (Jan 2026 - Present): Relational database structures, query tuning, analytical reports.
\n2. **Green Intern** at 1M1B (Feb 2026 - Mar 2026): Developed an AI-Powered geospatial waste mapping web application.
\n3. **Java & UI/UX Intern** at Codec Technologies (Jan 2026): Designed food delivery and expense tracking apps in Java.
\n4. **AI for Sustainability Intern** at 1M1B (Dec 2025 - Jan 2026): Created EcoWise Pro sustainability project.
\n5. **AI/ML & Data Analytics Intern** at NoviTech R&D (Aug 2025 - Dec 2025): Learned data cleaning, analysis, and ML models.
\n6. **Java Developer Intern** at Cognifyz & **Cloud Developer Intern** at Zero2site (2025).`;
    }

    if (q.includes('skill') || q.includes('stack') || q.includes('language') || q.includes('java') || q.includes('python') || q.includes('react')) {
      return `Vijayapandian's core technical stack includes:
\n• **Programming Languages**: Java, JavaScript, TypeScript, Python, SQL
\n• **Frontend Development**: React, HTML5/CSS3, Tailwind CSS, Framer Motion
\n• **Backend Development**: Node.js (Express), Spring Boot, REST APIs, WebSockets
\n• **Databases & Middleware**: PostgreSQL, MongoDB, Redis, Supabase, RabbitMQ`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('linkedin') || q.includes('github')) {
      return `You can connect with Vijayapandian via:
\n• **Email**: vijayapandian112007@gmail.com
\n• **Phone**: +91 8610554060
\n• **LinkedIn**: [Vijayapandian T](https://linkedin.com/in/vijayapandian-t)
\n• **GitHub**: [@VIJAYAPANDIANT](https://github.com/VIJAYAPANDIANT)
\n• **Location**: Chennai, India`;
    }

    if (q.includes('education') || q.includes('college') || q.includes('study') || q.includes('degree')) {
      return `Vijayapandian is pursuing a **Bachelor of Engineering (B.E.) in Computer Science and Engineering** at **Easwari Engineering College**, Chennai (2024 - 2028 batch). He holds a current CGPA of **8.33 / 10** and actively focuses on advanced algorithms, databases, and AI systems.`;
    }

    if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('greet')) {
      return `Greetings! I am VP_CORE_AI. How can I assist you today? I can provide details regarding Vijayapandian's internships, skills, projects, and contact protocols.`;
    }

    return `System query processed. I have cached data on the following subjects:
\n• **skills**: Languages (Java, SQL, JS), Frameworks (React, Node, Spring Boot)
\n• **projects**: Smart Resume Builder, Waste Mapping, Exam System
\n• **internships**: Elevate Labs (SQL), 1M1B (Eco AI), Codec Tech (Java)
\n• **contact**: Email, phone, LinkedIn, and GitHub links
\nWhich of these would you like to explore?`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-mono">
      {/* Floating Chat Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-4 rounded-full bg-black border border-neon-blue/40 text-neon-blue cursor-pointer shadow-lg hover:neon-glow transition-all flex items-center justify-center group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <Bot size={24} className="group-hover:animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Glow pulsing ring around button */}
        <span className="absolute inset-0 rounded-full border border-neon-blue/20 animate-ping pointer-events-none" />
      </motion.button>

      {/* Chat Window Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 w-[90vw] sm:w-[380px] h-[500px] glass border border-neon-blue/30 rounded-sm flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-white/5 border-b border-neon-blue/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-ai-green animate-pulse" />
                <span className="text-xs font-bold tracking-wider text-neon-blue">VP_CORE_AI v1.0</span>
              </div>
              <span className="text-[9px] text-gray-500 uppercase">SYS: ONLINE</span>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs scrollbar-thin">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-7 h-7 rounded-sm flex items-center justify-center border text-xs select-none ${
                      msg.sender === 'user'
                        ? 'bg-neon-blue/10 border-neon-blue/30 text-neon-blue'
                        : 'bg-neon-purple/10 border-neon-purple/30 text-neon-purple'
                    }`}
                  >
                    {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div
                    className={`max-w-[75%] p-3 rounded-sm leading-relaxed border whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'bg-black/40 border-neon-blue/20 text-white'
                        : 'bg-black/40 border-neon-purple/20 text-gray-300'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-sm flex items-center justify-center border bg-neon-purple/10 border-neon-purple/30 text-neon-purple select-none">
                    <Bot size={14} />
                  </div>
                  <div className="p-3 rounded-sm border bg-black/40 border-neon-purple/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-neon-purple rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-neon-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-neon-purple rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Prompt Suggestions */}
            {messages.length === 1 && (
              <div className="px-4 py-2 flex flex-wrap gap-1.5 border-t border-white/5 bg-black/30">
                {SUGGESTIONS.map((sug, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(sug)}
                    className="text-[10px] text-left px-2.5 py-1 rounded-sm border border-white/10 hover:border-neon-blue/40 text-gray-400 hover:text-neon-blue transition-colors cursor-pointer bg-white/5"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 border-t border-neon-blue/20 bg-black/60 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Vijayapandian..."
                className="flex-1 bg-black/40 border border-white/10 rounded-sm px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-neon-blue/60 focus:ring-0"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2 bg-neon-blue text-black font-bold rounded-sm disabled:opacity-30 disabled:hover:neon-glow-none hover:neon-glow transition-all flex items-center justify-center cursor-pointer"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
