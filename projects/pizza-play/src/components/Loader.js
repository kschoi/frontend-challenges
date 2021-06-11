import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
  animateOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  return (
    // initial 프롭은 처음 그려진 대로 사용할 것이기 때문에 필요가 없습니다.
    <motion.div
      className="loader"
      variants={loaderVariants}
      animate="animateOne"
    ></motion.div>
  );
};

export default Loader;
