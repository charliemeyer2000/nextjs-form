import styles from "@/styles/Success.module.css";
import Link from "next/link";
export default function Success() {
  return (
    <div className={styles.success}>
      <h1 className={styles.title}>
        {" "}
        <span className={styles.title_fancy}>Thank you </span> for submitting
        your answers!
      </h1>
      <p className={styles.description}>
        Check back in the{" "}
        <Link href="https://discord.gg/dd7RZYJnnt" target="_blank">
          Discord
        </Link>{" "}
        to see your stats on your spending habits & talk about your goals with
        others!
      </p>
    </div>
  );
}
