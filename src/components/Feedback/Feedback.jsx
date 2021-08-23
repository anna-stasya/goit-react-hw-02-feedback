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
    total: 0,
    positivePercentage: 0,
    visible: false,
  };

  show = () => {
    this.setState({ visible: true });
  };

  //     countTotalFeedback = () => {
  //     this.setState(({ good, neutral, bad }) => ({
  //         total: good + neutral + bad,
  //     }));
  //   };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  //   countPositiveFeedbackPercentage = () => {
  //     this.setState(({ good, total }) => ({
  //       positivePercentage: ((good * 100) / total) || 0,
  //     }));
  //   };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback()) || 0;
  };

  leaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    this.show();
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const {
      visible,
      Good,
      Neutral,
      Bad,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this.state;

    console.log(countTotalFeedback);

    return (
      <div className={s.feedback}>
        <h1 className={s.title}>Please leave feedback </h1>

        <ButtonsFeedback
          className={s.customBtn}
          options={Object.keys(this.state)}
          onLeaveFeedback={this.leaveFeedback}
        />

        <section>
          {!visible && <Notification message="No feedback given" />}

          {visible && (
            <Statistics
              good={Good}
              neutral={Neutral}
              bad={Bad}
              total={countTotalFeedback}
              positiveFeedback={countPositiveFeedbackPercentage}
            />
          )}
        </section>

        {/* <section>
          {visible ? (
            <Statistics
              good={Good}
              neutral={Neutral}
              bad={Bad}
              total={countTotalFeedback}
              positiveFeedback={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </section> */}
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
  visible: PropTypes.bool,
};

export { Feedback };
