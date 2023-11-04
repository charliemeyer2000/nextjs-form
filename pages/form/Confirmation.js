import styles from "@/styles/Confirmation.module.css";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectDailySpendingSum,
  selectFormQuestions,
} from "@/slices/formSlice";
// components
import BoringButton from "@/components/BoringButton/BoringButton";
import ColoredButton from "@/components/ColoredButton/ColoredButton";
// navigation
import { useRouter } from "next/router";

export default function Confirmation() {
  const dailySpending = useSelector(selectDailySpendingSum);
  const formQuestions = useSelector(selectFormQuestions);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className={styles.confirmation}>
      <div className={styles.header}>
        <h1 className={styles.title}>Please review your answers here. </h1>
        <p className={styles.description}>
          If you need to make any changes, please click the back button at the
          bottom. If you are satisfied with your responses, please click
          "Confirm" to submit your answers.
        </p>
      </div>
      <div className={styles.answers}>
        <div className={styles.answer}>
          <h2 className={styles.question}>How much did you spend today?</h2>
          <p className={styles.response}>{dailySpending}</p>
        </div>
        {/* map through the key-value pairs in formQuestions */}
        {Object.entries(formQuestions).map(([key, value]) => (
          <div className={styles.answer} key={key}>
            <h2
              className={styles.question}
            >{`How much did you spend on ${key}?`}</h2>
            <p className={styles.response}>{value}</p>
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <BoringButton
          text="Back"
          onClick={() => {
            router.push("/form/Questions");
          }}
        />
        <ColoredButton
          text="Confirm Submission"
          onClick={() => {
            router.push("/form/Success");
          }}
        />
      </div>
    </div>
  );
}
