import OnboardingStep from './OnboardingStep';

export default function OnboardingProgress({ currentStep = 2 }) {
  const steps = [
    'Välkommen',
    'Fyll i profil',
    'Godkänn policy',
    'Genomför utbildning',
    'Avslut',
  ];

  return (
    <div style={{
      maxWidth: '500px',
      margin: '40px auto',
      padding: '24px',
      border: '1px solid #ddd',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
    }}>
      <h2 style={{ marginBottom: '24px', textAlign: 'center' }}>
        Onboarding framgång
      </h2>

      {steps.map((title, index) => {
        let status = 'pending';
        if (index + 1 < currentStep) status = 'completed';
        else if (index + 1 === currentStep) status = 'current';

        return (
          <OnboardingStep
            key={index}
            stepNumber={index + 1}
            title={title}
            status={status}
          />
        );
      })}
    </div>
  );
}

