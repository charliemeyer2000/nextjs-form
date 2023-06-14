import styles from "../../styles/Intro.module.css";
// components
import SmallTextField from "../../components/SmallTextField/SmallTextField";
import PhoneNumber from "@/components/PhoneNumber/PhoneNumber";
import ColoredButton from "@/components/ColoredButton/ColoredButton";
// mui
import { Alert } from "@mui/material";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectName,
  selectPhone,
  selectEmail,
  setName,
  setPhone,
  setEmail,
} from "@/slices/formSlice";
// react
import { useState } from "react";
// routing
import { useRouter } from "next/router";

export default function Intro() {
  const name = useSelector(selectName);
  const phone = useSelector(selectPhone);
  const email = useSelector(selectEmail);
  const [showErrorPopup, setShowErrorPopup] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleNext = () => {
    // first check if the name is not empty
    if (name === "") {
      setShowErrorPopup("Please enter your name.");
      // wait 3 seconds and then remove the error popup
      setTimeout(() => {
        setShowErrorPopup("");
      }, 3000);
      return;
    }

    // next check if the phone number is not empty
    if (phone === "") {
      setShowErrorPopup("Please enter your phone number.");
      // wait 3 seconds and then remove the error popup
      setTimeout(() => {
        setShowErrorPopup("");
      }, 3000);
      return;
    }

    // next check if the phone number is valid
    if (phone.length !== 10) {
      setShowErrorPopup("Please enter a valid phone number.");
      // wait 3 seconds and then remove the error popup
      setTimeout(() => {
        setShowErrorPopup("");
      }, 3000);
      return;
    }

    // next check if the email is not empty
    if (email === "") {
      setShowErrorPopup("Please enter your email.");
      // wait 3 seconds and then remove the error popup
      setTimeout(() => {
        setShowErrorPopup("");
      }, 3000);
      return;
    }

    // next check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setShowErrorPopup("Please enter a valid email.");
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
        <h1 className={styles.intro_title}>Form Demo</h1>
        <p className={styles.intro_description}>
          This is a demo of a form built with Next.js and CSS modules. Thank you
          for visiting. I hope you enjoy this. Please note that I have never
          built using Next.js before, nor have i used quite literally any of the
          tools mentioned. Also admittedly i used redux instead of xcode, since
          redux (imo) is better.
        </p>
        <p className={styles.intro_description}>
          I am traditionally a React native developer, using regular css, react,
          and have a general jack-of-all-trades knowledge for most deployment
          and application management stuff. You can see the stuff i've built on
          my github, personal website, etc. Nextjs is probably better, but I
          haven't had the time to learn it yet.
        </p>
      </div>
      <div className={styles.forms}>
        <SmallTextField
          question="What is your name?"
          label="First and last name."
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))}
          isRequired={true}
        />
        <PhoneNumber
          value={phone}
          onChange={(e) => {
            dispatch(setPhone(e.target.value));
          }}
        />
        <SmallTextField
          question="What is your email?"
          label="Email address."
          value={email}
          onChange={(e) => {
            dispatch(setEmail(e.target.value));
          }}
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
