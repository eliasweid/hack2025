

'use client';
import Image from 'next/image';
import OnboardingProgress from '../../../Components/OnboardingProgress';
import OnboardingStep from '../../../Components/OnboardingStep';
import Overview from '../../../Components/Overview';
import TitleText from '../../../Components/TitelText';
import _public from '../../../public';

export default function elias() {
    const employee = {
        name: 'Elias Weid',
        role: 'SAS-Utvecklare',
        startDate: '2024-09-02',
        department: 'HTIC',
        isConsultant: true,
        progress: 68,
        imageUrl: _public.elias,
        steps: [
            { label: 'Konto skapat', done: true },
            { label: 'Dokument signerat', done: true },
            { label: 'Utrustning mottagen', done: false },
            { label: 'Introduktion klar', done: false },
          ],
      };
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
            <Overview employee={employee} />   
            <TitleText text = "Innan första dagen" />
            <OnboardingStep {...stepData} /> 
            <TitleText text = "Första veckan" />
            <OnboardingStep {...stepDataTwo} />
        </main>

  );
}
