import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ProfileCard from "../../Components/ProfileCard";
import HeaderBoss from "../../Components/HeaderBoss";
import _public from "../../public";
import TitleText from "../../Components/TitelText";


export default function Home() {
  return (
    <div className={styles.page}>
      
      <main className={styles.main}>
      <div className={styles.titlebox}>
      <h1 className={styles.title}>Min personal</h1>
      <Link href="newemp" className={styles.nbutton}>Ny Onboarding</Link>
      </div>
       <ProfileCard name="Elias Weid" progress={68} avatar = {_public.elias} />
       <ProfileCard name="Erik Stolpe" progress={43} avatar = {_public.erik}/>
       <ProfileCard name="Ella Bernsfelt" progress={90} avatar= {_public.ella}/>
       <ProfileCard name="Elliot Storm" progress={10} avatar = {_public.profile}/>
       <ProfileCard name="Love Broberg" progress={75} />
       <ProfileCard name="Johan Röden" progress={100} />

       

      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
