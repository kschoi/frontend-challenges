import React from "react";
import { motion } from 'framer-motion';

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
      {/* motion 컴포넌트로 변경하고 animate 속성을 먼저 준 후,
       initial을 넣어봤을 때 차이를 확인하세요. */}
      <motion.div className="title" initial={{ y: -250 }} animate={{ y: -10 }}>
        <h1>Pizza Play</h1>
      </motion.div>
    </header>
  );
};

export default Header;
