import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, children, color }) => (
  <button className={`${styles.button} ${color ?? ''}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
