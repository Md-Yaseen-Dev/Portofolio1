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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-left order-1 lg:order-1 flex flex-col justify-center max-w-none hero-left-column"
          >
            {/* Animated Greeting */}
            <div className="mb-6 lg:mb-8">
              <AnimatedText 
                text="Hello," 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 lg:mb-4 block text-white leading-tight"
                animationType="bounce"
                delay={500}
              />
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4 text-white leading-tight">
                <div className="flex flex-wrap items-baseline">
                  <span className="mr-2">This is </span>
                  <span className="whitespace-nowrap text-pink-500">
                    <AnimatedText 
                      text="Shaik Mohammad Yaseen" 
                      className="text-pink-500"
                      animationType="slide"
                      delay={1000}
                    />
                    <span className="text-white">,</span>
                  </span>
                </div>
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 lg:mb-8 text-white leading-tight hero-text">
                <div className="block">I'm a Professional</div>
                <div className="block text-cyan-400">
                  <RoleSlider />
                  <span className="text-white">.</span>
                </div>
              </div>
            </div>
            
            {/* Social Icons */}
            <motion.div 
              className="flex gap-4 mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            </motion.div>
            
            {/* Animated Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 max-w-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleContactClick}
                  className="bg-transparent border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap"
                >
                  CONTACT ME 📧
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold text-base lg:text-lg transition-all duration-300 whitespace-nowrap"
                >
                  GET RESUME 📄
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative order-2 lg:order-2 flex items-center justify-center lg:justify-end hero-right-column"
          >
            <div 
              className="bg-slate-900/90 rounded-2xl p-4 lg:p-6 text-left shadow-2xl backdrop-blur-sm overflow-hidden border border-slate-700/50 w-full max-w-lg mx-auto lg:mx-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex items-center mb-6">
                <div className="flex space-x-3">
                  <motion.div 
                    className="w-3 h-3 bg-red-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-3 h-3 bg-yellow-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div 
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
              </div>
              <pre className="text-sm text-slate-300 font-mono leading-relaxed whitespace-pre-wrap break-words">
{`const coder = {
  name: 'Shaik Mohammad Yaseen',
  skills: ['React', 'NextJS', 'Redux', 'Express',
           'MySQL', 'MongoDB', 'NodeJS'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
