'use client';

import { useState } from 'react';
import styles from './newtemp.module.css';

export default function NewEmployeeForm() {
  const [name, setName] = useState('');

  const [permissionInput, setPermissionInput] = useState('');
  const [permissions, setPermissions] = useState([]);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskSubtitle, setTaskSubtitle] = useState('');
  const [subTaskInput, setSubTaskInput] = useState('');
  const [subTasks, setSubTasks] = useState([]);

  const [tasks, setTasks] = useState([]);

  const handleAddPermission = () => {
    if (permissionInput.trim()) {
      setPermissions([...permissions, permissionInput.trim()]);
      setPermissionInput('');
    }
  };

  const handleAddSubTask = () => {
    if (subTaskInput.trim()) {
      setSubTasks([...subTasks, subTaskInput.trim()]);
      setSubTaskInput('');
    }
  };

  const handleAddTask = () => {
    if (taskTitle.trim() && subTasks.length > 0) {
      const newTask = {
        title: taskTitle.trim(),
        subtitle: taskSubtitle.trim(),
        subTasks,
      };
      setTasks([...tasks, newTask]);

      // Reset fields
      setTaskTitle('');
      setTaskSubtitle('');
      setSubTaskInput('');
      setSubTasks([]);
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
          <ul className={styles.templateList}>
            {permissions.map((perm, index) => (
              <li key={index}>{perm}</li>
            ))}
          </ul>
        </label>

        <label className={styles.formLabel}>
          Taskrubrik:
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className={styles.inputField}
            placeholder="Rubrik..."
          />
        </label>

        <label className={styles.formLabel}>
          Underrubrik:
          <input
            type="text"
            value={taskSubtitle}
            onChange={(e) => setTaskSubtitle(e.target.value)}
            className={styles.inputField}
            placeholder="Underrubrik..."
          />
        </label>

        <label className={styles.formLabel}>
          Sub-task:
          <div className={styles.subTaskWrapper}>
            <input
              type="text"
              value={subTaskInput}
              onChange={(e) => setSubTaskInput(e.target.value)}
              className={styles.inputField}
              placeholder="Lägg till en sub-task..."
            />
            <button type="button" onClick={handleAddSubTask} className={styles.smallButton}>
              Lägg till
            </button>
          </div>
          <ul className={styles.templateList}>
            {subTasks.map((sub, index) => (
              <li key={index}>{sub}</li>
            ))}
          </ul>
        </label>

        <div className={styles.taskButtonWrapper}>
          <button
            type="button"
            onClick={handleAddTask}
            className={styles.smallButton}
          >
            Lägg till Task
          </button>
        </div>

        {tasks.length > 0 && (
          <div className={styles.taskPreview}>
            <h3>Tasks</h3>
            {tasks.map((task, index) => (
              <div key={index} className={styles.taskCard}>
                <h4>{task.title}</h4>
                <p>{task.subtitle}</p>
                <ul>
                  {task.subTasks.map((sub, idx) => (
                    <li key={idx}>{sub}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <button type="submit" className={styles.submitButton}>
          Skapa mall
        </button>
      </form>
    </div>
  );
}
