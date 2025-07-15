import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "Creative Coder", 
  "UI/UX Explorer",
  "React Specialist",
  "Animation Expert"
];

export default function RoleSlider() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-16 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRole}
          initial={{ 
            opacity: 0, 
            rotateX: -90,
            scale: 0.8,
            y: 50
          }}
          animate={{ 
            opacity: 1, 
            rotateX: 0,
            scale: 1,
            y: 0
          }}
          exit={{ 
            opacity: 0, 
            rotateX: 90,
            scale: 0.8,
            y: -50
          }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="text-2xl md:text-4xl font-bold gradient-text"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        >
          {roles[currentRole]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}