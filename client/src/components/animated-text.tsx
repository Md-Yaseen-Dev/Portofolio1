import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  animationType?: "bounce" | "slide" | "rotate" | "scale";
  delay?: number;
}

export default function AnimatedText({ 
  text, 
  className = "", 
  animationType = "slide",
  delay = 0
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getVariants = () => {
    switch (animationType) {
      case "bounce":
        return {
          hidden: { y: -100, opacity: 0, scale: 0.5 },
          visible: (i: number) => ({
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              delay: i * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 15
            }
          })
        };
      case "slide":
        return {
          hidden: { x: -100, opacity: 0, rotateX: -90 },
          visible: (i: number) => ({
            x: 0,
            opacity: 1,
            rotateX: 0,
            transition: {
              delay: i * 0.05,
              type: "spring",
              stiffness: 100,
              damping: 12
            }
          })
        };
      case "rotate":
        return {
          hidden: { rotateY: 180, opacity: 0, scale: 0 },
          visible: (i: number) => ({
            rotateY: 0,
            opacity: 1,
            scale: 1,
            transition: {
              delay: i * 0.08,
              type: "spring",
              stiffness: 150,
              damping: 20
            }
          })
        };
      case "scale":
        return {
          hidden: { scale: 0, opacity: 0, rotate: 90 },
          visible: (i: number) => ({
            scale: 1,
            opacity: 1,
            rotate: 0,
            transition: {
              delay: i * 0.06,
              type: "spring",
              stiffness: 120,
              damping: 15
            }
          })
        };
      default:
        return {
          hidden: { x: -50, opacity: 0 },
          visible: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: {
              delay: i * 0.05,
              duration: 0.5
            }
          })
        };
    }
  };

  const variants = getVariants();

  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          custom={index}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
          style={{ transformOrigin: "center" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}