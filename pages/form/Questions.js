import styles from "../../styles/Questions.module.css";
// components
import SmallTextField from "../../components/SmallTextField/SmallTextField";
import MultipleChoice from "@/components/MultipleChoice/MultipleChoice";
import ColoredButton from "@/components/ColoredButton/ColoredButton";
import BoringButton from "@/components/BoringButton/BoringButton";
// redux
import {
  selectQuestion1,
  selectQuestion2,
  selectQuestion3,
  selectQuestion4,
  setQuestion1,
  setQuestion2,
  setQuestion3,
  setQuestion4,
} from "@/slices/formSlice";
import { useDispatch, useSelector } from "react-redux";
// routing
import { useRouter } from "next/router";
// react
import { useState } from "react";
// mui
import { Alert } from "@mui/material";

export default function Questions() {
  const question1 = useSelector(selectQuestion1);
  const question2 = useSelector(selectQuestion2);
  const question3 = useSelector(selectQuestion3);
  const question4 = useSelector(selectQuestion4);
  const dispatch = useDispatch();
  const router = useRouter();
  const [showErrorPopup, setShowErrorPopup] = useState("");

  const goBack = () => {
    router.push("/form/Intro");
  };

  const handleNext = () => {
    // first check if the name is not empty
    if (question1 === "") {
      setShowErrorPopup("Please answer question 1.");
      // wait 3 seconds and then remove the error popup
      setTimeout(() => {
        setShowErrorPopup("");
      }, 3000);
      return;
    }

    // next check if question 2 is not empty
    if (question2 === "") {
      setShowErrorPopup("Please answer question 2.");
      // wait 3 seconds and then remove the error popup
      setTimeout(() => {
        setShowErrorPopup("");
      }, 3000);
      return;
    }

    // next check if question 3 is not empty
    if (question3 === "") {
      setShowErrorPopup("Please answer question 3.");
      // wait 3 seconds and then remove the error popup
      setTimeout(() => {
        setShowErrorPopup("");
      }, 3000);
      return;
    }

    // next check if question 4 is not empty
    if (question4 === "") {
      setShowErrorPopup("Please answer question 4.");
      // wait 3 seconds and then remove the error popup
      setTimeout(() => {
        setShowErrorPopup("");
      }, 3000);
      return;
    }

    // if we get here, then all the questions are answered
    // so we can go to the next page
    router.push("/form/Confirmation");
  };

  return (
    <div className={styles.questions}>
      <div className={styles.header}>
        <h1 className={styles.title}>Questions</h1>
        <p className={styles.description}>
          Please answer the following questions. The questions may be multiple
          choice questions, or they may be short-answer questions. Please fill
          out all of them with the best answer.
        </p>
      </div>
      <div className={styles.forms}>
        <SmallTextField
          question="What is your favorite color?"
          label="Favorite Color"
          value={question1}
          onChange={(e) => dispatch(setQuestion1(e.target.value))}
        />
        <MultipleChoice
          question="What is your favorite food?"
          value={question2}
          onChange={(e) => dispatch(setQuestion2(e.target.value))}
          options={["Pizza", "Pasta", "Burgers", "Hot Dogs"]}
        />
        <SmallTextField
          question="What is your favorite animal?"
          label="Favorite Animal"
          value={question3}
          onChange={(e) => dispatch(setQuestion3(e.target.value))}
        />
        <MultipleChoice
          question="What is your favorite sport?"
          value={question4}
          onChange={(e) => dispatch(setQuestion4(e.target.value))}
          options={["Football", "Basketball", "Baseball", "Soccer"]}
        />
        <div className={styles.submitWrapper}>
          <BoringButton text="Back" onClick={goBack} />
          <ColoredButton text="Next" onClick={handleNext} />
        </div>
      </div>
      {showErrorPopup === "" ? null : (
        <Alert severity="error" className={styles.alert}>
          {showErrorPopup}
        </Alert>
      )}

    </div>
  );
}
