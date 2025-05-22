

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

      const stepDataT = {
        title: 'Hitta på kontoret',
        description: 'Navigation och kontorslayout.',
        progress: 10,
        subSteps: [
          { label: 'Hitta till fika rummet', done: false },
          { label: 'Säkerhetsgenomgång', done: false },
          { label: 'Passerkort funkar', done: false },
        ],
  };

  const stepDataF = {
    title: 'Kultur och värderingar',
    description: 'Företagskultur och värderingar.',
    progress: 10,
    subSteps: [
      { label: 'Läs på intranätet', done: false },
      { label: 'Gör utbildningar i MyDevelopment', done: false },
      { label: 'Fika med kollegorna', done: false },
    ],
};

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
  title: 'Team och kultur',
  description: 'Introduktion till teamet, samarbetssätt och företagskultur.',
  progress: 10,
  subSteps: [
    { label: 'Delta i introduktionsmöte med teamet', done: false },
    { label: 'Gå på gemensam lunch eller fika', done: false },
    { label: 'Läs om företagets värderingar', done: false },
    { label: 'Följ med på ett standup-möte', done: false },
    { label: 'Prata med din mentor eller buddy', done: false },
    { label: 'Delta i en social aktivitet eller afterwork', done: false },
  ],
};







    return (
        <main>
            <Overview employee={employee} />   
            <TitleText text = "Första dagen" />
            <OnboardingStep {...stepDataTwo} />
            <OnboardingStep {...stepData} /> 
            <TitleText text = "Första veckan" />
            <OnboardingStep {...stepDataT} />
            <OnboardingStep {...stepDataF} />
            <TitleText text = "Fortsatt Onboarding" />
            <OnboardingStep {...stepDataFive} />
            <OnboardingStep {...stepDataSix} />
            <OnboardingStep {...stepDataSeven} />
            
        </main>

  );
}
