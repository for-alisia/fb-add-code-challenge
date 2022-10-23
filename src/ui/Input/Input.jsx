import React, { useState, useEffect } from 'react';
import styles from './Input.module.css';

const Input = ({ className, currentValue, placeholder, notEmpty = true, updateValue }) => {
  const [value, setValue] = useState(currentValue);

  const isValid = value.length !== 0;

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      if (isValid) {
        updateValue(value);
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [value]);

  useEffect(() => {
    setValue(currentValue);
  }, [currentValue]);

  return (
    <div className={`${styles.inputWrapper} ${className} ${!isValid && 'errorInput'}`}>
      <input type="text" value={value} placeholder={placeholder} onChange={changeHandler} />
      {!isValid && (
        <div className={styles.errorWarning}>
          <span>This field should not be empty</span>
        </div>
      )}
    </div>
  );
};

export default Input;
