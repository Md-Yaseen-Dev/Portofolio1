import { motion } from "framer-motion";
import EnhancedScrollAnimation from "./enhanced-scroll-animation";

export default function SkillsSection() {
  const skills = [
    { name: "HTML", icon: "HTML", color: "bg-orange-500" },
    { name: "CSS", icon: "CSS", color: "bg-blue-500" },
    { name: "Javascript", icon: "JS", color: "bg-yellow-500" },
    { name: "Typescript", icon: "TS", color: "bg-blue-600" },
    { name: "React", icon: "⚛", color: "bg-cyan-500" },
    { name: "Next JS", icon: "▲", color: "bg-black border border-slate-600" },
    { name: "Tailwind", icon: "TW", color: "bg-cyan-400" },
    { name: "MongoDB", icon: "M", color: "bg-green-500" },
    { name: "MySQL", icon: "SQL", color: "bg-blue-800" },
    { name: "Git", icon: "Git", color: "bg-orange-600" },
    { name: "Bootstrap", icon: "B", color: "bg-purple-600" },
    { name: "Figma", icon: "F", color: "bg-red-500" },
    { name: "MaterialUI", icon: "MUI", color: "bg-blue-700" },
    { name: "Framer Motion", icon: "FM", color: "bg-pink-500" },
    { name: "OpenAI", icon: "AI", color: "bg-green-600" },
    { name: "Node.js", icon: "N", color: "bg-green-700" }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 parallax-bg opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <EnhancedScrollAnimation direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold gradient-text"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(168, 85, 247, 0.5)"
              }}
            >
              Skills
            </motion.h2>
            <motion.div
              className="w-24 h-1 gradient-bg mx-auto mt-4 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </EnhancedScrollAnimation>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <EnhancedScrollAnimation 
              key={index}
              direction="scale" 
              delay={index * 0.1}
            >
              <motion.div 
                className="skill-card rounded-xl p-6 text-center relative group"
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 10,
                  rotateX: 5,
                  z: 50
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300,
                  damping: 20
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 gradient-bg rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
                
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-4 ${skill.color} rounded-lg flex items-center justify-center relative z-10 shadow-lg`}
                  whileHover={{ 
                    rotateY: 180,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <span className={`text-2xl font-bold ${skill.color.includes('yellow') ? 'text-black' : 'text-white'}`}>
                    {skill.icon}
                  </span>
                </motion.div>
                
                <motion.p 
                  className="font-semibold relative z-10 text-sm"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                >
                  {skill.name}
                </motion.p>
                
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-transparent"
                  whileHover={{
                    borderColor: "rgba(168, 85, 247, 0.5)",
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Particle Effects */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 gradient-bg rounded-full opacity-0"
                  whileHover={{ 
                    opacity: 1,
                    scale: [1, 1.5, 1],
                    rotate: 360
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-2 left-2 w-1.5 h-1.5 gradient-bg rounded-full opacity-0"
                  whileHover={{ 
                    opacity: 1,
                    scale: [1, 1.3, 1],
                    rotate: -360
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </EnhancedScrollAnimation>
          ))}
        </div>
        
        {/* Infinite Scrolling Skills Bar */}
        <motion.div 
          className="mt-16 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="flex space-x-8 text-4xl font-bold gradient-text whitespace-nowrap"
            animate={{ x: [-1000, 0] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <span key={index} className="inline-block">
                {skill.name} • 
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
