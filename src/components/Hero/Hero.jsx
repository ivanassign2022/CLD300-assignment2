import './Hero.css';
import * as React from 'react';
import { motion } from "framer-motion";

export default function Hero({imgs, index}) {
  return (
    <div className="hero-wrapper">
      <motion.img
          src={imgs[index].src}
          whileHover={{ scale: 1.8 }}
          initial={{ rotate: "-5deg", scale:1.2 }}
          animate={{ rotate: "5deg" }}
          alt={imgs[index].title}    
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 5
          }}
        />
    </div>
  );
}

