import styles from "../../styles/Intro.module.css";
// components
import SmallTextField from "../../components/SmallTextField/SmallTextField";
import PhoneNumber from "@/components/PhoneNumber/PhoneNumber";
import ColoredButton from "@/components/ColoredButton/ColoredButton";
// mui
import { Alert } from "@mui/material";
import { useSearchParams } from "next/navigation";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectDailySpendingSum,
  setDailySpendingSum,
  setDiscordId,
} from "@/slices/formSlice";
// react
import { useState } from "react";
// routing
import { useRouter } from "next/router";

export default function Intro() {
  const dailySpendingSum = useSelector(selectDailySpendingSum);
  const [showErrorPopup, setShowErrorPopup] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

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
    // first check if the name is not empty
    if (dailySpendingSum === "") {
      setShowErrorPopup("Please enter a number for your daily spending.");
      // wait 3 seconds and then remove the error popup
      setTimeout(() => {
        setShowErrorPopup("");
      }, 3000);
      return;
    }
    // if all of the above checks pass, then we can move on to the next page
    router.push("/form/Questions");
  };
  return (
    <div className={styles.intro}>
      <div className={styles.header}>
        <h1 className={styles.intro_title}>MoniFlow Daily Form</h1>
        <p className={styles.intro_description}>
          Fill out this form to track your daily spending! This will
          auto-populate in your own sheet, which you can use to track your
          spending!
        </p>
      </div>
      <div className={styles.forms}>
        <SmallTextField
          question="How much did you spend today?"
          label="This should be a number, ex: 12.34"
          value={dailySpendingSum}
          onChange={(value) => dispatch(setDailySpendingSum(value))}
          isRequired={true}
        />
        <ColoredButton text="Next" onClick={handleNext} />
      </div>
      {showErrorPopup === "" ? null : (
        <Alert severity="error" className={styles.alert}>
          {showErrorPopup}
        </Alert>
      )}
    </div>
  );
}
