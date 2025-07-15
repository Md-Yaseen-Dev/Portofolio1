import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedText from "./animated-text";
import RoleSlider from "./role-slider";
import EnhancedScrollAnimation from "./enhanced-scroll-animation";

export default function HeroSection() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 parallax-bg"></div>
      
      {/* Floating Orbs */}
      <div className="floating-orb w-64 h-64 top-10 left-10"></div>
      <div className="floating-orb w-96 h-96 bottom-20 right-10"></div>
      <div className="floating-orb w-48 h-48 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Animated Greeting */}
          <div className="mb-8">
            <AnimatedText 
              text="Hello," 
              className="text-4xl md:text-6xl font-bold mb-4 block"
              animationType="bounce"
              delay={500}
            />
            <div className="text-3xl md:text-5xl font-bold mb-4">
              This is{" "}
              <AnimatedText 
                text="Shaik Mohammad Yaseen" 
                className="gradient-text"
                animationType="slide"
                delay={1000}
              />
            </div>
            <div className="text-2xl md:text-4xl font-bold mb-8">
              I'm a Professional{" "}
              <RoleSlider />
            </div>
          </div>
          
          {/* Animated Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleContactClick}
                className="interactive-gradient text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl border-0"
              >
                Contact me
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotateX: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline"
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-sm bg-background/20"
              >
                Get Resume
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Code Block */}
        <EnhancedScrollAnimation direction="scale" delay={0.3}>
          <motion.div 
            className="max-w-2xl mx-auto"
            whileHover={{ 
              scale: 1.02,
              rotateX: 2,
              rotateY: 2
            }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="code-block rounded-2xl p-8 text-left shadow-2xl backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="flex space-x-3">
                  <motion.div 
                    className="w-4 h-4 bg-red-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-4 h-4 bg-yellow-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div 
                    className="w-4 h-4 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
              </div>
              <pre className="text-sm md:text-base text-slate-300 font-mono overflow-x-auto leading-relaxed">
{`const coder = {
  name: 'Shaik Mohammad Yaseen',
  skills: ['React', 'NextJS', 'Framer Motion', 'TypeScript', 'Three.js'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  animationExpert: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.animationExpert &&
      this.skills.length >= 5
    );
  }
};`}
              </pre>
            </div>
          </motion.div>
        </EnhancedScrollAnimation>
      </div>
      
      {/* Enhanced Floating elements with better animations */}
      <motion.div 
        className="absolute top-20 left-10 w-24 h-24 gradient-bg rounded-full opacity-30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-36 h-36 gradient-bg rounded-full opacity-20"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -180, -360],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-20 w-16 h-16 gradient-bg rounded-full opacity-25"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </section>
  );
}
