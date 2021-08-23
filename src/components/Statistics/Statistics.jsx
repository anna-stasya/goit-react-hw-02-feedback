import React from 'react';
import PropTypes from 'prop-types';

import s from './Statistics.module.css';

const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positiveFeedback = 0,
}) => {
  return (
    <div className={s.feedback}>
      <h2 className={s.title}>Statistics</h2>
      <ul className={s.list}>
        <li className={s.item}>Good: {good}</li>
        <li className={s.item}>Neutral: {neutral}</li>
        <li className={s.item}>Bad: {bad}</li>
        <li className={s.item}>Total: {total}</li>
        <li className={s.item}>Positive Feedback: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export { Statistics };
