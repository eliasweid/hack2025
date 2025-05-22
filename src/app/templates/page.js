import Link from "next/link";
import Teamplate from "../../../Components/Tempalte";
import TitleText from "../../../Components/TitelText";
import styles from "./Templates.module.css";

export default function Teamplates() {
    return (
      <div className={styles.page}>
      <main className={styles.main}>
        

      <div className={styles.titlebox}>
      <h1 className={styles.title}>Mina mallar</h1>
      <Link href="/newtmp" className={styles.nbutton}>Ny Mall</Link>
      </div>



          <Teamplate title="Vi är Handelsbanken" text="Handelsbanken standard intro" link="/javatemp" />
          <Teamplate title="HTA Avdelningsinfo" text="Introduktion till HTA" />
          <Teamplate title="Säkerhetsutbildning" text="Generell säkerhetsutbildning" />
          <Teamplate title="Java Standard" text="Standard för nya java utvecklare" link="/javatemp"/>
          <Teamplate title="SHB Intern" text="Intro vid internt rekrytering" />
          <Teamplate title="Java Senior" text="Onboarding för seniora utvecklare" />
          <Teamplate title="Team Intro - K2" text="Välkommen till K2" />

        
      </main>
       </div>
    );
  }
