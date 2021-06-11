import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const conatainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0 0 8px rgb(255,255,255)",
    boxShadow: "0 0 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className="container home"
      variants={conatainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Play</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
