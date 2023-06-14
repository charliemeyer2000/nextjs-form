import styles from "../../styles/MultipleChoice.module.css";
// react
import { useState } from "react";

export default function MultipleChoice({
  question,
  label,
  value,
  onChange,
  options,
}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={styles.multipleChoice}
      style={
        isFocused
          ? {
              boxShadow: "rgb(0 0 0 / 20%) 0px 0px 15px",
            }
          : {}
      }
    >
      <h1 className={styles.question}>{question}</h1>
      <div className={styles.options}>
        {options.map((option) => (
          <div className={styles.option}>
            <input
              type="radio"
              className={styles.radio}
              id={option}
              name={label}
              value={option}
              checked={value === option}
              onChange={onChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <label htmlFor={option} className={styles.option_label}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
