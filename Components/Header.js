import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      
      <Link href="/">
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logotyp" width={300} height={33} />
      </div>
      </Link>

      
      <nav className={styles.nav}>
        <Link href="/">Min resa</Link>
        <Link href="/about">Mer om oss</Link>
        <Link href="/contact">Vanliga Frågor</Link>
      </nav>

      
      <div className={styles.profile}>
        <Image
          src="/profile.png"
          alt="Profil"
          width={50}
          height={50}
          className={styles.avatar}
        />
      </div>
    </header>
  );
}
