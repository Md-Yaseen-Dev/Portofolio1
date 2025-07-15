import { motion } from "framer-motion";
import EnhancedScrollAnimation from "./enhanced-scroll-animation";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="floating-orb w-72 h-72 top-10 right-10 opacity-5"></div>
        <div className="floating-orb w-48 h-48 bottom-20 left-10 opacity-5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <EnhancedScrollAnimation direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-4 gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              ABOUT ME
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Who I am?
            </motion.p>
          </div>
        </EnhancedScrollAnimation>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <EnhancedScrollAnimation direction="left" delay={0.3}>
            <motion.div 
              className="space-y-6"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.p 
                className="text-lg text-slate-300 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                My name is <span className="gradient-text font-semibold">Shaik Mohammad Yaseen</span>. I am a professional and enthusiastic Frontend Engineer in my daily life. 
                I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am 
                passionate about problem-solving.
              </motion.p>
              <motion.p 
                className="text-lg text-slate-300 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                I love almost all the stacks of web application development and love to 
                make the web more open to the world. My core skill is based on <span className="gradient-text font-semibold">JavaScript</span> and I love to do most of the things using JavaScript.
              </motion.p>
              <motion.p 
                className="text-lg text-slate-300 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                I am available for any kind of job opportunity that suits my skills and interests.
              </motion.p>
            </motion.div>
          </EnhancedScrollAnimation>
          
          <EnhancedScrollAnimation direction="right" delay={0.4}>
            <motion.div 
              className="text-center relative"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="relative inline-block"
                whileHover={{ rotateY: 10 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&h=640" 
                  alt="Shaik Mohammad Yaseen" 
                  className="rounded-2xl shadow-2xl mx-auto w-80 h-80 object-cover border-4 border-primary/30 relative z-10"
                />
                <motion.div
                  className="absolute inset-0 gradient-bg rounded-2xl opacity-20 blur-xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 gradient-bg rounded-full"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 gradient-bg rounded-full"
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </motion.div>
          </EnhancedScrollAnimation>
        </div>
      </div>
    </section>
  );
}
