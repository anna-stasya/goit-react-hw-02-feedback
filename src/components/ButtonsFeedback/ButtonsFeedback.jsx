import React from 'react';
import PropTypes from 'prop-types';
import s from './ButtonsFeedback.module.css';

const ButtonsFeedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.customBtn}>
      {options.map(option => (
        <button
          className={s.btn}
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

ButtonsFeedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export { ButtonsFeedback };
