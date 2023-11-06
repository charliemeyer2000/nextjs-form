import { CircularProgress } from "@mui/material";
import styles from "../../styles/ColoredButton.module.css";
import classNames from "classnames";

export default function ColoredButton({ text, onClick, isLoading }) {
  return (
    <div className={styles.button_wrapper} onClick={onClick}>
      {isLoading && <CircularProgress className={styles.loadingSpinner} />}
      <button className={classNames(styles.button, isLoading && styles.greyedOutButton)}>
        <span className={styles.button_text}>{text}</span>
      </button>
    </div>
  );
}
