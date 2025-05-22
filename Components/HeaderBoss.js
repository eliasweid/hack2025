import Link from 'next/link';
import Image from 'next/image';
import styles from './HeaderBoss.module.css';

export default function HeaderBoss() {
  return (
    <header className={styles.header}>
      
      <Link href="/">
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logotyp" width={300} height={33} />
      </div>
      </Link>

      
      <nav className={styles.nav}>
        <Link href="/">Min Pesonal</Link>
        <Link href="/newemp">Ny Onboarding</Link>
        <Link href="/templates">Mallar</Link>
        <Link href="/followup">Uppföljning</Link>
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
