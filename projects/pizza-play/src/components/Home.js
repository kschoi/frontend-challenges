import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: [1, 1.1, 1, 1.1, 1, 1.1, 1], // 1. visible을 없애고 hover시 scale에 키프레임을 주었습니다.
    textShadow: "0 0 8px rgb(255,255,255)",
    boxShadow: "0 0 8px rgb(255,255,255)",
  },
};

const Home = () => {
  return (
    <motion.div
      className="container home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.5 }}
    >
      <h2>Welcome to Pizza Play</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
