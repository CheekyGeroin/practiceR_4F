import Notiflix from 'notiflix';
import { useState } from 'react';
import { Controlers } from './Controlers/Controlers';
import { Notifications } from './Notifications/Notifications';
import { Section } from './Section/Section';
import { Statictics } from './Statistics/Statictics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onChangeStat = option => {
    Notiflix.Notify.success('Thank you for your feedback', { timeout: 1000 });
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotal = () => {
    return good + neutral + bad;
  };
  const countPositivePercentage = () => {
    return Math.ceil((good * 100) / countTotal());
  };
  const isThereIsStat = good >= 1 || neutral >= 1 || bad >= 1;
  const total = countTotal();
  const positivePercentage = countPositivePercentage();
  return (
    <>
      <Section title={'Please leave feedback'}>
        <Controlers
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onChangeStat}
        />
      </Section>
      <Section title={'Statictics'}>
        {isThereIsStat ? (
          <Statictics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notifications message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
};
