import { motion } from "framer-motion";
import EnhancedScrollAnimation from "./enhanced-scroll-animation";

export default function ProjectsSection() {
  const projects = [
    {
      name: "E-commerce Project (European Client)",
      tools: ["NextJs", "Typescript", "Tailwind CSS", "Zustand", "useSWR"],
      role: "Sr. Frontend Engineer",
      description: "Me and my team built an E-commerce web application. I have Developed features including authentication, product listing, shopping cart, and payment integration following industry best practices."
    },
    {
      name: "HRMS Platform (Corporate Client)",
      tools: ["ReactJS", "Tailwind CSS", "TypeScript", "Mantine UI", "Zustand", "useSWR"],
      role: "Frontend Developer",
      description: "I have designed and developed a web app, Led the development of a comprehensive HRMS offering services like employee onboarding, attendance tracking, leave management, project submission, and timesheet management."
    },
    {
      name: "AI Powered Real Estate",
      tools: ["React", "Bootstrap", "SCSS", "Stripe", "TypeScript", "OpenAI API"],
      role: "Frontend Developer",
      description: "My team built an AI-based real estate app. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing."
    },
    {
      name: "Customer Support ChatBot",
      tools: ["ReactJS", "Flowise AI", "Open AI", "RAG", "LangChain"],
      role: "ChatBot AI Developer",
      description: "This project involved developing an intelligent chatbot system designed to provide exceptional customer support and information. The chatbot leverages Retrieval Augmented Generation (RAG) techniques to retrieve relevant information from a vast knowledge base."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="floating-orb w-80 h-80 top-20 left-20 opacity-5"></div>
        <div className="floating-orb w-64 h-64 bottom-20 right-20 opacity-5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <EnhancedScrollAnimation direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              PROJECTS
            </motion.h2>
            <motion.p
              className="text-xl text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Showcasing my creative solutions
            </motion.p>
          </div>
        </EnhancedScrollAnimation>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-full">
          {projects.map((project, index) => (
            <EnhancedScrollAnimation 
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.2}
            >
              <motion.div 
                className="project-card rounded-2xl p-8 group relative"
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: index % 2 === 0 ? 2 : -2
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300,
                  damping: 20
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated Background Glow */}
                <motion.div
                  className="absolute inset-0 gradient-bg rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold mb-6 gradient-text relative z-10"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.name}
                </motion.h3>
                
                <motion.div 
                  className="bg-slate-900/80 rounded-xl p-4 md:p-6 mb-6 font-mono text-xs md:text-sm overflow-hidden relative backdrop-blur-sm border border-slate-700/50"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  whileHover={{ 
                    backgroundColor: "rgba(15, 23, 42, 0.9)",
                    borderColor: "rgba(168, 85, 247, 0.3)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {/* Code Block Header */}
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <motion.div 
                        className="w-3 h-3 bg-red-500 rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div 
                        className="w-3 h-3 bg-yellow-500 rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      />
                      <motion.div 
                        className="w-3 h-3 bg-green-500 rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                      />
                    </div>
                    <span className="ml-4 text-slate-400 text-xs">project.js</span>
                  </div>
                  
                  <pre className="text-slate-300 leading-relaxed whitespace-pre-wrap break-words">
{`const project = {
  name: '${project.name}',
  tools: [${project.tools.map(tool => `'${tool}'`).join(', ')}],
  myRole: '${project.role}',
  description: '${project.description.slice(0, 60)}...'
};`}
                  </pre>
                  
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1 }}
                  />
                </motion.div>
                
                {/* Interactive Buttons */}
                <motion.div 
                  className="flex gap-4 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <motion.button
                    className="px-6 py-3 gradient-bg text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05, rotateX: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.button>
                  <motion.button
                    className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold text-sm hover:bg-primary hover:text-white transition-all"
                    whileHover={{ scale: 1.05, rotateX: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Source Code
                  </motion.button>
                </motion.div>
                
                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-6 h-6 gradient-bg rounded-full opacity-20"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </EnhancedScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
