import Link from "next/link";
import Teamplate from "../../../Components/Tempalte";
import TitleText from "../../../Components/TitelText";
import styles from "./Templates.module.css";

export default function Teamplates() {
    return (
      <main>
        <Link href="/newtmp"> <button className={styles.nbutton}>Skapa ny mall</button></Link>

        <div >
            <TitleText text="Templates" />
          <Teamplate title="Java standard" text="testar" link="/javatemp" />
          <Teamplate title="Java senior" text="testar" />
          <Teamplate title="Java confidenciell" text="testar" />
          <Teamplate title="COBOL" text="testar" />
          <Teamplate title="Jira-Basic" text="testar" />
          <Teamplate title="Test-Dev" text="testar" />
          <Teamplate title="Release-Dev" text="testar" />
          <Teamplate title="APO-Standard" text="testar" />

        </div>
      </main>
    );
  }
