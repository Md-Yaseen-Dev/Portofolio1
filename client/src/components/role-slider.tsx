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
    <span className="inline-flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentRole}
          initial={{ 
            opacity: 0, 
            rotateX: -90,
            scale: 0.8,
            y: 10
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
            y: -10
          }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="font-bold gradient-text inline-block"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        >
          {roles[currentRole]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}