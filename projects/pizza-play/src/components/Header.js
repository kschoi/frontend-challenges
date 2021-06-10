import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
        </svg>
      </div>
      {/* transition 프롭의 type 기본값은 spring 입니다. 
					1. 바운스가 싫다면 type을 tween으로 바꿔보세요.
          2. type을 spring으로 바꾸고 stiffness(뻣뻣함)을 120을 줘보세요. 그리고 5로도 변경해보세요. 
             기본값은 100입니다.  */}
      <motion.div
        className="title"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <h1>Pizza Play</h1>
      </motion.div>
    </header>
  );
};

export default Header;
