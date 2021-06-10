import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      mass: 0.4, // 2. 무게감이에요. 높은 값이면 느리다는 뜻, 낮은 값(0.1 시연)이면 빠르다는 뜻
      damping: 8, // 3. 제동값이에요. 0부터 시연해보세요. 높은 값이면 빠르게 제동되고, 0이면 제동이 없습니다.
      when: "beforeChildren", // 1. 자식요소 애니메이션이 발생하기 전에 애니메이션이 끝난다는 뜻
      staggerChildren: 0.4, // 4. 자식요소들에 시차를 줘요. 시차의 시간값을 입력합니다.
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
