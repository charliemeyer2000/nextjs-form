import styles from "../../styles/Questions.module.css";
// components
import SmallTextField from "../../components/SmallTextField/SmallTextField";
import ColoredButton from "@/components/ColoredButton/ColoredButton";
import BoringButton from "@/components/BoringButton/BoringButton";
import DropDown from "@/components/DropDown/DropDown";
// redux
import {
  removeKVPairInFormQuestions,
  selectFormQuestions,
  setKVPairInFormQuestions,
  setDiscordId,
} from "@/slices/formSlice";
import { useDispatch, useSelector } from "react-redux";
// routing
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
// react
import { useState } from "react";
// mui
import { Alert } from "@mui/material";

export default function Questions() {
  const formQuestions = useSelector(selectFormQuestions);
  const dispatch = useDispatch();
  const router = useRouter();
  const [showErrorPopup, setShowErrorPopup] = useState("");

  // handling passing in the discordId
  const params = useSearchParams();
  const discordId = params.get("discordId");
  if (typeof window !== "undefined") {
    const storedDiscordId = localStorage.getItem("discordId");
    if (storedDiscordId !== discordId && discordId !== null) {
      localStorage.setItem("discordId", discordId);
      dispatch(setDiscordId(discordId));
    } else if (storedDiscordId !== null) {
      // If discordId from params is null, use the storedDiscordId
      dispatch(setDiscordId(storedDiscordId));
    }
  }

  const handleNext = () => {
    // ensure that all questions (if any have been selected) aren't empty.
    for (const key in formQuestions) {
      if (formQuestions[key] === "" || formQuestions[key] === null) {
        setShowErrorPopup(`Please enter a number for your spending on ${key}.`);
        // wait 3 seconds and then remove the error popup
        setTimeout(() => {
          setShowErrorPopup("");
        }, 3000);
        return;
      }
    }

    router.push("/form/Confirmation");
  };

  const handleChange = (option) => {
    if (Object.keys(formQuestions).includes(option)) {
      dispatch(removeKVPairInFormQuestions({ key: option }));
    } else {
      dispatch(setKVPairInFormQuestions({ key: option, value: "" }));
    }
  };

  return (
    <div className={styles.questions}>
      <div className={styles.header}>
        <h1 className={styles.title}>MoniFlow Daily Form</h1>
        <p className={styles.description}>
          Fill out this form to track your daily spending! This will
          auto-populate in your own sheet, which you can use to track your
          spending!
        </p>
        <p className={styles.description}>
          Please select from the dropdown all of the categories that you have
          spent money on in the past month.
        </p>
      </div>
      <div className={styles.forms}>
        <DropDown
          question="Select all options"
          handleChange={handleChange}
          // selectedOptions are all the keys in formQuestions
          selectedOptions={Object.keys(formQuestions)}
        />
        {Object.keys(formQuestions) &&
          Object.keys(formQuestions).map((option, index) => {
            return (
              <SmallTextField
                key={index}
                question={`How much did you spend on ${option}?`}
                label={"This should be a number, ex: 12.34"}
                value={formQuestions[option]}
                onChange={(value) =>
                  dispatch(setKVPairInFormQuestions({ key: option, value }))
                }
              />
            );
          })}
        <div className={styles.submitWrapper}>
          {/* <BoringButton text="Back" onClick={goBack} /> */}
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
