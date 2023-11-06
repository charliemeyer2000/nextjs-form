import styles from "./DropDown.module.css";
import { useState } from "react";

export default function DropDown(props) {
  const { question, label, handleChange, selectedOptions } = props;
  const options = [
    "Food (Groceries)",
    "Food (Eating out)",
    "Food (Other)",
    "Rent",
    "Gas",
    "Utilities",
    "Clothing",
    "Monthly Subscription",
    "Random Purchases",
    "Other",
  ];

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
        {options.map((option, index) => (
          <div className={styles.option} key={index}>
            <input
              type="checkbox"
              className={styles.radio}
              id={option}
              name={label}
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleChange(option)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <label htmlFor={option} className={styles.option_label}>
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
