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

  return (
    <div className={`${styles.smallTextField} ${isFocused ? styles.focused : ''}`}>
      <p className={styles.question}>{question}</p>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        required={isRequired}
      />
    </div>
  );
}
