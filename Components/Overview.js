import Image from "next/image";
import styles from "./Overview.module.css";
import _public from "../public";


export default function Overview({ employee }) {
  const {
    name,
    role,
    startDate,
    department,
    isConsultant,
    progress,
    imageUrl,
  } = employee;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          src={imageUrl || _public.profile}
          alt="Profilbild"
          width={120}
          height={120}
          className={styles.profileImage}
        />
        <h2 className={styles.name}>{name}</h2>
        <p>
          <strong>Roll:</strong> {role}
        </p>
        <p>
          <strong>Anställningsdatum:</strong> {startDate}
        </p>
        <p>
          <strong>Avdelning:</strong> {department}
        </p>
        <p>
          <strong>Konsult:</strong> {isConsultant ? "Ja" : "Nej"}
        </p>
      </div>

      <div className={styles.right}>
        <h3>Onboarding-status</h3>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${progress}%` }} />
        </div>
        <p className={styles.progressText}>{progress}% klart</p>

        <ul className={styles.stepList}>
          {employee.steps.map((step, index) => (
            <li
              key={index}
              className={step.done ? styles.stepDone : styles.stepPending}
            >
              <span className={styles.stepDot}>{step.done ? "✔" : "○"}</span>
              {step.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
