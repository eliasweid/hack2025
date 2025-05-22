'use client';

import TitleText from "../../../Components/TitelText";
import OnboardingStep from "../../../Components/OnboardingStep";


export default function JavaTemp() {

    const stepData = {
        title: 'Skapa konto',
        description: 'I detta steg skapar du ditt användarkonto och ställer in dina preferenser.',
        progress: 75,
        subSteps: [
          { label: 'Fyll i personuppgifter', done: true },
          { label: 'Verifiera e-post', done: true },
          { label: 'Skapa lösenord', done: false },
          { label: 'Acceptera villkor', done: false },
        ],
    };

        const stepDataTwo = {
            title: 'Starta datorn',
            description: 'I detta steg skapar du ditt användarkonto och ställer in dina preferenser.',
            progress: 10,
            subSteps: [
              { label: 'Logga in på Outlook', done: true },
              { label: 'Verifiera Teams', done: true },
              { label: 'Ladda ner program', done: false },
              { label: 'Logga in i Jira', done: false },
            ],



      };

    return (
        <main>
            <TitleText text="Java standard" />
            <TitleText text="Behörigheter" />
            <TitleText text="Tasks" />
            <OnboardingStep {...stepData} /> 
            <TitleText text = "Första veckan" />
            <OnboardingStep {...stepDataTwo} />
        </main>
    );






}