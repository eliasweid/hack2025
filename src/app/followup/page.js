'use client';
import styles from './followup.module.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

export default function FollowUpPage() {
  const [surveyResults] = useState({
    employeeName: 'Elliot Storm',
    department: 'HTA',
    startDate: '2025-04-01',
    surveyDate: '2025-05-15',
    results: {
      welcome: 4,
      clarity: 3,
      support: 5,
      engagement: 4,
      tools: 2,
    },
    comments: 'Jag känner mig väl mottagen men behöver mer tid med systemen.',
  });

  const chartData = [
    { name: 'Välkomnande', value: surveyResults.results.welcome },
    { name: 'Tydlighet', value: surveyResults.results.clarity },
    { name: 'Stöd', value: surveyResults.results.support },
    { name: 'Engagemang', value: surveyResults.results.engagement },
    { name: 'Verktyg', value: surveyResults.results.tools },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Uppföljning: Onboardingundersökning</h1>

      <p className={styles.intro}>
        Denna rapport sammanfattar resultatet från en arbetsundersökning kopplad till onboardingprocessen. Målet är att identifiera eventuella hinder och stärka upplevelsen för nya medarbetare.
      </p>

      <div className={styles.card}>
        <h2>{surveyResults.employeeName}</h2>
        <p><strong>Avdelning:</strong> {surveyResults.department}</p>
        <p><strong>Startdatum:</strong> {surveyResults.startDate}</p>
        <p><strong>Enkät genomförd:</strong> {surveyResults.surveyDate}</p>
      </div>

      <div className={styles.chartContainer}>
        <h3>Betyg från enkät (skala 1–5)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Bar dataKey="value" fill="#4a90e2" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.summary}>
        <h3>Sammanfattning</h3>
        <p>
          Generellt visar resultaten en god onboardingupplevelse, särskilt inom stöd och välkomnande. Dock noteras att tillgång till rätt verktyg och system kan förbättras.
        </p>
        <p>
          Det är viktigt att säkerställa att alla nyanställda snabbt får åtkomst till tekniska resurser och tydlig information kring sina arbetsuppgifter.
        </p>
      </div>

      <div className={styles.comments}>
        <h3>Kommentar från anställd</h3>
        <p>{surveyResults.comments}</p>
      </div>
    </div>
  );
}
