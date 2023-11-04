import { useState } from 'react';
import styles from '../../styles/SmallTextField.module.css';

export default function SmallTextField({
  question,
  label,
  onChange,
  value,
  isRequired
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    let numberValue;

    if (inputValue.endsWith(".")) {
      // If the input value ends with a decimal point, keep the decimal point
      numberValue = inputValue;
    } else if (inputValue === "") {
      // If the input value is an empty string, set numberValue to an empty string
      numberValue = 0;
    } else {
      // Otherwise, parse the input value as a float
      numberValue = parseFloat(inputValue);
    }

    // Pass the parsed value to the onChange handler
    onChange(numberValue);
  };

  return (
    <div
      className={`${styles.smallTextField} ${isFocused ? styles.focused : ""}`}
    >
      <p className={styles.question}>{question}</p>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        onChange={(e) => handleChange(e)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value !== null && value !== undefined ? value : ""} // Display an empty string when value is null or undefined
        required={isRequired}
      />
    </div>
  );
}
