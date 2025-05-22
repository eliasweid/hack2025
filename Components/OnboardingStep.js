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
              <label className={styles.checkbox}>
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

      
      
    </div>
  );
}
