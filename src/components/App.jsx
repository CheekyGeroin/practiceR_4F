import Notiflix from 'notiflix';
import { Component } from 'react';
import { Controlers } from './Controlers/Controlers';
import { Notifications } from './Notifications/Notifications';
import { Section } from './Section/Section';
import { Statictics } from './Statistics/Statictics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onChangeStat = option => {
    Notiflix.Notify.success('Thank you for your feedback', { timeout: 1000 });
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  countTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositivePercentage = () => {
    return Math.ceil((this.state.good * 100) / this.countTotal());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const isThereIsStat = good >= 1 || neutral >= 1 || bad >= 1;
    const total = this.countTotal();
    const positivePercentage = this.countPositivePercentage();
    return (
      <>
        <Section title={'Please leave feedback'}>
          <Controlers
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onChangeStat}
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
  }
}
