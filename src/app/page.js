import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ProfileCard from "../../Components/ProfileCard";
import HeaderBoss from "../../Components/HeaderBoss";


export default function Home() {
  return (
    <div className={styles.page}>
      
      <main className={styles.main}>
       <ProfileCard name="Elias Weid" progress={75} avatar = "/public/elias.png" />
       <ProfileCard name="Erik Stolpe" progress={43} avatar = "/erik.png"/>
       <ProfileCard name="Ella Bernsfelt" progress={90} avatar="/ella.png"/>
       <ProfileCard name="Elliot Storm" progress={10} avatar = "/profile.png"/>
       <ProfileCard name="Love Broberg" progress={75} />
       <ProfileCard name="Johan Röden" progress={100} />

       

      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
