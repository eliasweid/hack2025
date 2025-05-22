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



          <Teamplate title="Java standard" text="testar" link="/javatemp" />
          <Teamplate title="Java senior" text="testar" />
          <Teamplate title="Java confidenciell" text="testar" />
          <Teamplate title="COBOL" text="testar" />
          <Teamplate title="Jira-Basic" text="testar" />
          <Teamplate title="Test-Dev" text="testar" />
          <Teamplate title="Release-Dev" text="testar" />
          <Teamplate title="APO-Standard" text="testar" />

        
      </main>
       </div>
    );
  }
