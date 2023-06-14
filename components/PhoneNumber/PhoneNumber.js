import styles from "../../styles/PhoneNumber.module.css";
import { useState, useRef, useEffect } from "react";

export default function PhoneNumber({
  value, 
  onChange,
}) {
  const [country, setCountry] = useState({
    name: "United States",
    prefix: 1,
    flag: "us",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCountry = (selectedCountry) => {
    console.log("selectedCountry: ", selectedCountry);
    setCountry(selectedCountry);
    setIsOpen(false);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
  };


  const countries = [
    { name: "United States", prefix: 1, flag: "us" },
    { name: "Austria", prefix: 43, flag: "at" },
    { name: "Belgium", prefix: 32, flag: "be" },
    { name: "Bulgaria", prefix: 359, flag: "bg" },
    { name: "Croatia", prefix: 385, flag: "hr" },
    { name: "Cyprus", prefix: 357, flag: "cy" },
    { name: "Czech Republic", prefix: 420, flag: "cz" },
    { name: "Denmark", prefix: 45, flag: "dk" },
    { name: "Estonia", prefix: 372, flag: "ee" },
    { name: "Finland", prefix: 358, flag: "fi" },
    { name: "France", prefix: 33, flag: "fr" },
    { name: "Germany", prefix: 49, flag: "de" },
    { name: "Greece", prefix: 30, flag: "gr" },
    { name: "Hungary", prefix: 36, flag: "hu" },
    { name: "Iceland", prefix: 354, flag: "is" },
    { name: "Republic of Ireland", prefix: 353, flag: "ie" },
    { name: "Italy", prefix: 39, flag: "it" },
    { name: "Latvia", prefix: 371, flag: "lv" },
    { name: "Liechtenstein", prefix: 423, flag: "li" },
    { name: "Lithuania", prefix: 370, flag: "lt" },
    { name: "Luxembourg", prefix: 352, flag: "lu" },
    { name: "Malta", prefix: 356, flag: "mt" },
    { name: "Netherlands", prefix: 31, flag: "nl" },
    { name: "Norway", prefix: 47, flag: "no" },
    { name: "Poland", prefix: 48, flag: "pl" },
    { name: "Portugal", prefix: 351, flag: "pt" },
    { name: "Romania", prefix: 40, flag: "ro" },
    { name: "Slovakia", prefix: 421, flag: "sk" },
    { name: "Slovenia", prefix: 386, flag: "si" },
    { name: "Spain", prefix: 34, flag: "es" },
    { name: "Sweden", prefix: 46, flag: "se" },
  ];

  return (
    <div
      className={styles.phoneNumber}
      style={isFocused ? { boxShadow: "rgb(0 0 0 / 20%) 0px 0px 15px" } : {}}
    >
      <p className={styles.question}>What is your phone number?</p>
      <div
        className={styles.phoneContainer}
        style={{
          border: isFocused
            ? "1px solid var(--light-blue)"
            : "1px solid var(--gray)",
        }}
      >
        <div className={styles.phoneContainer_left}>
          <div className={styles.dropdown}>
            <div
              className={styles.dropdownToggle}
              onClick={toggleDropdown}
              ref={dropdownRef}
            >
              {String.fromCodePoint(
                parseInt(`1F1E6`, 16) +
                  country.flag.toUpperCase().charCodeAt(0) -
                  65
              )}
              {String.fromCodePoint(
                parseInt(`1F1E6`, 16) +
                  country.flag.toUpperCase().charCodeAt(1) -
                  65
              )}
              <span className={isOpen ? styles.arrowUp : styles.arrowDown}>
                &#9662;
              </span>
            </div>
            {isOpen && (
              <div className={styles.dropdownMenu}>
                {countries.map((idxCountry) => (
                  <div
                    key={idxCountry.name}
                    className={styles.dropdownItem}
                    onClick={() => selectCountry(idxCountry)}
                    style={
                      idxCountry.name === country.name
                        ? { backgroundColor: "var(--grey60)" }
                        : {}
                    }
                  >
                    <span>
                      {String.fromCodePoint(
                        parseInt(`1F1E6`, 16) +
                          idxCountry.flag.toUpperCase().charCodeAt(0) -
                          65
                      )}
                      {String.fromCodePoint(
                        parseInt(`1F1E6`, 16) +
                          idxCountry.flag.toUpperCase().charCodeAt(1) -
                          65
                      )}
                    </span>
                    <span>{idxCountry.name}</span>
                    <span>(+{idxCountry.prefix})</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className={styles.phoneContainer_right}>
          <p className={styles.phoneContainer_right_prefix}>
            +{country.prefix}
          </p>
          <input
            type="tel"
            className={styles.phoneContainer_right_input}
            onChange={(e) => onChange(e)}
            value={value}
            onFocus={() => {
              setIsFocused(true);
              setIsOpen(false);
            }}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      </div>
    </div>
  );
}
