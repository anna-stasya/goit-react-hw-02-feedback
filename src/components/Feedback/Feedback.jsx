import React from 'react';
import { ButtonsFeedback } from 'components/ButtonsFeedback/ButtonsFeedback';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Feedback/Notification/Notification';
import s from './Feedback.module.css';
import PropTypes from 'prop-types';

class Feedback extends React.Component {
  static defoultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  countTotalFeedback = () => {
    const { Good, Neutral, Bad } = this.state;
    return Good + Neutral + Bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.Good * 100) / this.countTotalFeedback()) || 0;
  };

  leaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    // this.countTotalFeedback();
    // this.countPositiveFeedbackPercentage();
  };

  render() {
    const { Good, Neutral, Bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={s.feedback}>
        <h1 className={s.title}>Please leave feedback </h1>

        <ButtonsFeedback
          className={s.customBtn}
          options={Object.keys(this.state)}
          onLeaveFeedback={this.leaveFeedback}
        />

        <section>
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={Good}
              neutral={Neutral}
              bad={Bad}
              total={totalFeedback}
              positiveFeedback={positiveFeedbackPercentage}
            />
          )}
        </section>
      </div>
    );
  }
}

Feedback.propTypes = {
  Good: PropTypes.number,
  Neutral: PropTypes.number,
  Bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export { Feedback };
