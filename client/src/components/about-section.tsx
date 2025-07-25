import { motion } from "framer-motion";
import EnhancedScrollAnimation from "./enhanced-scroll-animation";
import photo from '../../public/photo4.png';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="floating-orb w-72 h-72 top-10 right-10 opacity-5"></div>
        <div className="floating-orb w-48 h-48 bottom-20 left-10 opacity-5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-4 gradient-text "
              whileHover={{ scale: 1.05 }}
            >
              ABOUT ME
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Who I am?
            </motion.p>
          </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <EnhancedScrollAnimation direction="left" delay={0.3}>
            <motion.div 
              className="space-y-6"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.p 
                className="text-lg text-foreground leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                My name is <span className="gradient-text font-semibold">Shaik Mohammad Yaseen</span>. I am a professional and enthusiastic Frontend Engineer in my daily life. 
                I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am 
                passionate about problem-solving.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                I love almost all the stacks of web application development and love to 
                make the web more open to the world. My core skill is based on <span className="gradient-text font-semibold">JavaScript</span> and I love to do most of the things using JavaScript.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
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
                className="w-full flex justify-center items-center"
                whileHover={{ rotateY: 10 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img 
                  src={photo}
                  alt="Shaik Mohammad Yaseen" 
                  className="rounded-full shadow-2xl h-full object-cover relative z-10 overflow-hidden"
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
