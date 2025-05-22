'use client';

import { useState } from 'react';
import styles from './newtemp.module.css';

export default function NewEmployeeForm() {
  const [name, setName] = useState('');
  const [permissionInput, setPermissionInput] = useState('');
  const [permissions, setPermissions] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddPermission = () => {
    if (permissionInput.trim() !== '') {
      setPermissions([...permissions, permissionInput.trim()]);
      setPermissionInput('');
    }
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      permissions,
      tasks,
    };
    console.log('Ny mall:', data);
    alert('Ny mall sparad!');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Registrera ny mall</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.formLabel}>
          Namn:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.inputField}
          />
        </label>

        <label className={styles.formLabel}>
          Behörigheter:
          <input
            type="text"
            value={permissionInput}
            onChange={(e) => setPermissionInput(e.target.value)}
            className={styles.inputField}
            placeholder="Skriv behörighet..."
          />
          <div className={styles.buttonGroup}>
            <button type="button" onClick={() => alert('Sökfunktion inte implementerad')} className={styles.smallButton}>
              Sök
            </button>
            <button type="button" onClick={handleAddPermission} className={styles.smallButton}>
              Lägg till
            </button>
          </div>
          <ul className={styles.list}>
            {permissions.map((perm, index) => (
              <li key={index}>{perm}</li>
            ))}
          </ul>
        </label>

        <label className={styles.formLabel}>
  Tasks:
  <input
    type="text"
    value={taskInput}
    onChange={(e) => setTaskInput(e.target.value)}
    className={styles.inputField}
    placeholder="Skriv task..."
  />
  <div className={styles.taskButtonWrapper}>
    <button
      type="button"
      onClick={handleAddTask}
      className={styles.smallButton}
    >
      Lägg till
    </button>
  </div>
  <ul className={styles.list}>
    {tasks.map((task, index) => (
      <li key={index}>{task}</li>
    ))}
  </ul>
</label>


        <button type="submit" className={styles.submitButton}>Skapa mall</button>
      </form>
    </div>
  );
}
