import styles from "@/styles/Success.module.css";

export default function Success() {
  return (
    <div className={styles.success}>
      <h1 className={styles.title}>
        {" "}
        <span className={styles.title_fancy}>Thank you </span> for submitting
        your answers!
      </h1>
      <p className={styles.description}>
        We will be in touch with you shortly.
      </p>
    </div>
  );
}
