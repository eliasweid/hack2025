import Image from 'next/image';
import styles from './ProfileCard.module.css';
import Link from 'next/link';

export default function ProfileCard({ name = "John Doe", progress = 75, avatar = "/elias.png" }, link = "/elias") {
  return (
    <Link href={link}>    
    <div className={styles.card}>
      <div className={styles.left}>
        <Image
          src={avatar}
          alt="Profilbild"
          width={50}
          height={50}
          className={styles.avatar}
        />
        <span className={styles.name}>{name}</span>
      </div>

      <div className={styles.right}>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${progress}%` }}></div>
        </div>
        <span className={styles.percent}>{progress}%</span>
      </div>
    </div>
    </Link>
  );
}
