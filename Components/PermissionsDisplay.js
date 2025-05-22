import styles from './PermissionsDisplay.module.css';

export default function PermissionsDisplay({ title, description, permissions = [] }) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <ul className={styles.permissionList}>
          {permissions.map((permission, index) => (
            <li key={index} className={styles.permissionItem}>
              {permission}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
