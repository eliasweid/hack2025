import { useState } from 'react';
import styles from './OnboardingStep.module.css';

export default function OnboardingStep({ 
  title, 
  description, 
  subSteps = [], 
  progress = 0 
}) {
  const [checked, setChecked] = useState(() =>
    subSteps.map(step => step.done || false)
  );

  function toggleCheckbox(index) {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  }

  return (
    <div className={styles.container}>
      
      <div className={styles.left}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <ul className={styles.subStepList}>
          {subSteps.map((step, i) => (
            <li key={i} className={styles.subStepItem}>
              <label>
                <input 
                  type="checkbox" 
                  checked={checked[i]} 
                  onChange={() => toggleCheckbox(i)} 
                />
                <span className={styles.subStepText}>{step.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      
      <div className={styles.right}>
        <div className={styles.progressCircle}>
          <svg viewBox="0 0 36 36" className={styles.circularChart}>
            <path
              className={styles.circleBg}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className={styles.circle}
              strokeDasharray={`${progress}, 100`}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className={styles.percentage}>
              {progress}%
            </text>
          </svg>
        </div>

        <div className={styles.progressBarContainer}>
          <div 
            className={styles.progressBar} 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
