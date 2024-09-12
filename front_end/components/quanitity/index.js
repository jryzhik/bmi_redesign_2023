import React from 'react';
import {useState} from 'react';
import styles from '../../styles/Quantity/Quantity.module.css';
const Quantity = () => {
  const [count, setCount] = useState(1);
  const increment = () => setCount((prevCount) => Math.min(10, prevCount + 1));
  const decrement = () => setCount((prevCount) => Math.max(1, prevCount - 1));
  return (
    <div className={styles.stepper}>
      <button onClick={decrement} className={styles.stepperButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-minus"
        >
          <path d="M5 12h14" />
        </svg>
      </button>
      <span className={styles.stepperValue}>{count}</span>
      <button onClick={increment} className={styles.stepperButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-plus"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </button>
    </div>
  );
};

export default Quantity;
