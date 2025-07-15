import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface EnhancedScrollAnimationProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "diagonal" | "scale" | "rotate";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function EnhancedScrollAnimation({ 
  children, 
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = ""
}: EnhancedScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const getVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { y: 100, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case "down":
        return {
          hidden: { y: -100, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case "left":
        return {
          hidden: { x: 100, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case "right":
        return {
          hidden: { x: -100, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case "diagonal":
        return {
          hidden: { x: -100, y: 100, opacity: 0, rotate: -10 },
          visible: { x: 0, y: 0, opacity: 1, rotate: 0 }
        };
      case "scale":
        return {
          hidden: { scale: 0.5, opacity: 0, rotate: 10 },
          visible: { scale: 1, opacity: 1, rotate: 0 }
        };
      case "rotate":
        return {
          hidden: { rotate: 180, scale: 0, opacity: 0 },
          visible: { rotate: 0, scale: 1, opacity: 1 }
        };
      default:
        return {
          hidden: { y: 100, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={controls}
      transition={{
        duration,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 12
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}