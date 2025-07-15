import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "Creative Coder", 
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
    <span className="inline-flex items-center overflow-hidden min-h-[1.2em] align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentRole}
          initial={{ 
            opacity: 0,
            y: 20
          }}
          animate={{ 
            opacity: 1,
            y: 0
          }}
          exit={{ 
            opacity: 0,
            y: -20
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="font-bold gradient-text inline-block whitespace-nowrap leading-none"
        >
          {roles[currentRole]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}