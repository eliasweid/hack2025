'use client';

import TitleText from "../../../Components/TitelText";
import OnboardingStep from "../../../Components/OnboardingStep";
import PermissionsDisplay from "../../../Components/PermissionsDisplay";
import styles from "./javatemp.module.css";
import Link from "next/link";


export default function JavaTemp() {

    const stepDataFive = {
        title: 'Systemförståelse',
        description: 'Systemförståelse och arbetsmetoder.',
        progress: 10,
        subSteps: [
          { label: 'Läs på intranätet om interna system', done: false },
          { label: 'Gör utbildningar i MyDevelopment', done: false },
          { label: 'Delta i genomgång av systemflöden', done: false },
          { label: 'Testa att logga in i de viktigaste systemen', done: false },
          { label: 'Sammanfatta vad du lärt dig för teamledaren', done: false },
          { label: 'Delta i workshop om arbetsmetodik', done: false },
        ],
      };
      
      const stepDataSix = {
        title: 'Verktyg i arbetet',
        description: 'Verktyg och arbetsmetoder.',
        progress: 10,
        subSteps: [
          { label: 'Installera och konfigurera arbetsverktyg', done: false },
          { label: 'Gå igenom standardprogramvaror', done: false },
          { label: 'Sätt upp arbetsmiljö (t.ex. IDE, Slack, Teams)', done: false },
          { label: 'Delta i genomgång av versionshantering (Git)', done: false },
          { label: 'Testa dokumentationsverktyg (Confluence etc)', done: false },
          { label: 'Genomför en testuppgift med verktygen', done: false },
        ],
      };
      
      
      const stepDataSeven = {
        title: 'Säkerhet och regelefterlevnad',
        description: 'Lär dig om informationssäkerhet, sekretess och interna riktlinjer för regelefterlevnad.',
        progress: 10,
        subSteps: [
          { label: 'Gör e-utbildning om informationssäkerhet', done: false },
          { label: 'Läs företagets IT-policy', done: false },
          { label: 'Bekanta dig med GDPR-riktlinjer', done: false },
          { label: 'Genomgång av säker hantering av data', done: false },
          { label: 'Skriv under sekretessavtal (NDA)', done: false },
          { label: 'Testa säkerhetsinloggning och VPN', done: false },
        ],
      };

    return (
        <main>
            <div className={styles.container}>
            <h1 className={styles.title}>Java Standard</h1>
            <Link href="" className={styles.nbutton}>Redigera</Link>
            </div>
            <PermissionsDisplay 
  title="Behörigheter"
  description="Följande systemrättigheter är tilldelade användaren:"
  permissions={[
    'Läsrättigheter i Ekonomisystemet',
    'Redigera kundinformation',
    'Exportera rapporter',
    'Adminbehörighet i HR-systemet'
  ]}
/>
            <TitleText text="Tasks" />
            <OnboardingStep {...stepDataFive} />
            <OnboardingStep {...stepDataSix} />
            <OnboardingStep {...stepDataSeven} />
        </main>
    );






}