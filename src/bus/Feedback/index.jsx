import { useState } from 'react';
import { Container, Section, FeedbackOptions, Statistics } from './components';

export default function Feedback() {
  const [estimates, setEstimates] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = estimates;

  function onLeaveFeedback(type) {
    setEstimates(prevState => ({
      ...prevState,
      [type]: estimates[type] + 1,
    }));
  }

  const options = Object.keys(estimates);
  const total = good + neutral + bad;
  const positiveFeedbackPercentage = Math.floor((100 * good) / total);

  return (
    <Container>
      <Section color="rgba(0, 0, 0, 0.8)" title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        <Statistics
          estimates={estimates}
          total={total}
          positivePercentage={positiveFeedbackPercentage}
        />
      </Section>
    </Container>
  );
}
