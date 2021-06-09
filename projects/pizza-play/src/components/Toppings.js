import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <div className="container toppings">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            // 2. hover 효과를 추가합니다.
            <motion.li 
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">        
        <motion.button
          // 1. hover 효과를 복붙합니다.
          whileHover={{ 
            scale: 1.1,
            textShadow: '0 0 8px rgb(255,255,255)',
            boxShadow: '0 0 8px rgb(255,255,255)',
          }}					
        >
          Next
        </motion.button>
      </Link>

    </div>
  )
}

export default Toppings;