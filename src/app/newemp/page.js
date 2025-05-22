'use client';

import { useState } from 'react';
import styles from './NewEmployeeForm.module.css';

export default function NewEmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    phone:'',
    department: '',
    isConsultant: false,
    startDate: '',
  });

  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [templates, setTemplates] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleAddTemplate = () => {
    if (selectedTemplate && !templates.includes(selectedTemplate)) {
      setTemplates([...templates, selectedTemplate]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ny anställd:', formData, 'Mallar:', templates);
    alert('Ny anställd sparad!');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Registrera ny anställd</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.formLabel}>
          Namn:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className={styles.inputField} />
        </label>

        <label className={styles.formLabel}>
          E-post:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className={styles.inputField} />
        </label>

        <label className={styles.formLabel}>
          Telefon:
          <input type="email" name="phone" value={formData.phone} onChange={handleChange} required className={styles.inputField} />
        </label>

        <label className={styles.formLabel}>
          Roll:
          <select name="role" value={formData.role} onChange={handleChange} required className={styles.inputField}>
            <option value="">Välj roll</option>
            <option value="Utvecklare">Utvecklare</option>
            <option value="Testare">Testare</option>
            <option value="Teamledare">Teamledare</option>
            <option value="Projektledare">Projektledare</option>
          </select>
        </label>

        <label className={styles.formLabel}>
          Avdelning:
          <select name="department" value={formData.department} onChange={handleChange} required className={styles.inputField}>
            <option value="">Välj avdelning</option>
            <option value="HTI">HTI</option>
            <option value="HTA">HTA</option>
            <option value="HTB">HTB</option>
            <option value="HTY">HTY</option>
          </select>
        </label>

        <label className={styles.formLabel}>
          Mallar:
          <select
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            className={styles.inputField}
          >
            <option value="">Välj mall</option>
            <option value="Introduktion">Introduktion</option>
            <option value="Systemgenomgång">Systemgenomgång</option>
            <option value="Säkerhetsutbildning">Säkerhetsutbildning</option>
            <option value="Teamintro">Teamintro</option>
          </select>
        </label>

        <div className={styles.taskButtonWrapper}>
          <button
            type="button"
            onClick={handleAddTemplate}
            className={styles.smallButton}
          >
            Lägg till
          </button>
        </div>

        {templates.length > 0 && (
          <ul className={styles.templateList}>
            {templates.map((template, index) => (
              <li key={index}>{template}</li>
            ))}
          </ul>
        )}

        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="isConsultant"
            checked={formData.isConsultant}
            onChange={handleChange}
          />
          Konsult
        </label>

        <label className={styles.formLabel}>
          Startdatum:
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className={styles.inputField}
          />
        </label>

        <button type="submit" className={styles.submitButton}>
          Starta Onboarding
        </button>
      </form>
    </div>
  );
}
