import Link from 'next/link';
import Image from 'next/image';
import styles from './HeaderBoss.module.css';
import _public from '../public';

export default function HeaderBoss() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
      <Link href="/">
      <div className={styles.logo}>
        <Image src={_public.logo} alt="Logotyp" width={300} height={33} />
      </div>
      </Link>

      
      <nav className={styles.nav}>
        <Link href="/">Min Pesonal</Link>
        <Link href="/templates">Mallar</Link>
        <Link href="/followup">Uppföljning</Link>
      </nav>
      </div>
      
      <div className={styles.profile}>
        <Image
          src={_public.profile}
          alt="Profil"
          width={50}
          height={50}
          className={styles.avatar}
        />
      </div>
    </header>
  );
}
