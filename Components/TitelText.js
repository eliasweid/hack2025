import styles from "./TitleText.module.css";

export default function TitleText({ text }) {
  return (
    <div className={styles.titletext}>
      <h1>{text}</h1>
    </div>
  );
}