import styles from "@/styles/Confirmation.module.css";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectName,
  selectPhone,
  selectEmail,
  selectQuestion1,
  selectQuestion2,
  selectQuestion3,
  selectQuestion4,
} from "@/slices/formSlice";
// components
import BoringButton from "@/components/BoringButton/BoringButton";
import ColoredButton from "@/components/ColoredButton/ColoredButton";
// navigation
import { useRouter } from "next/router";

export default function Confirmation() {
  const name = useSelector(selectName);
  const phone = useSelector(selectPhone);
  const email = useSelector(selectEmail);
  const question1 = useSelector(selectQuestion1);
  const question2 = useSelector(selectQuestion2);
  const question3 = useSelector(selectQuestion3);
  const question4 = useSelector(selectQuestion4);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className={styles.confirmation}>
      <div className={styles.header}>
        <h1 className={styles.title}>Please review your answers here. </h1>
        <p className={styles.description}>
          If you need to make any changes, please click the back button at the bottom. If you are satisfied with your responses, please click "Confirm" to submit your answers.
        </p>
      </div>
      <div className={styles.answers}>
        <div className={styles.answer}>
          <h2 className={styles.question}>What is your name?</h2>
          <p className={styles.response}>{name}</p>
        </div>
        <div className={styles.answer}>
          <h2 className={styles.question}>What is your phone number?</h2>
          <p className={styles.response}>{phone}</p>
        </div>
        <div className={styles.answer}>
          <h2 className={styles.question}>What is your email address?</h2>
          <p className={styles.response}>{email}</p>
        </div>
        <div className={styles.answer}>
          <h2 className={styles.question}>What is your favorite color?</h2>
          <p className={styles.response}>{question1}</p>
        </div>
        <div className={styles.answer}>
          <h2 className={styles.question}>What is your favorite food?</h2>
          <p className={styles.response}>{question2}</p>
        </div>
        <div className={styles.answer}>
          <h2 className={styles.question}>What is your favorite animal?</h2>
          <p className={styles.response}>{question3}</p>
        </div>
        <div className={styles.answer}>
          <h2 className={styles.question}>What is your favorite movie?</h2>
          <p className={styles.response}>{question4}</p>
        </div>
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
