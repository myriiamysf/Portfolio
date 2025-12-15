import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const TextAnimation: React.FC = () => {
  const welcome : string[] = ["Welcome", "Bienvenue", "مَرْحَبَ ", "환영"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1)% welcome.length);
    }, 2000);
    return () => clearInterval(interval) 
  }, []);

  return (
    <div style={{position: "relative",
            height: "80px",
            width: "100%",
            display: "flex",
            justifyContent: "center"
          }}>
      <AnimatePresence mode="wait">
      <motion.h1
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          textAlign: "center",
        }}
      >
        {welcome[index]}
      </motion.h1>
    </AnimatePresence>
    </div>
  );
};

export default TextAnimation
