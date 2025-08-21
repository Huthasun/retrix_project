import React from 'react';
import { motion } from "framer-motion";

const letterAnimation = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};
//////////////////hhhhhh//////////
const AnimatedTitle = ({ text, className = "" }) => {
  return (
    <div className={`overflow-hidden flex justify-center ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block text-white font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-wide"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedTitle;
