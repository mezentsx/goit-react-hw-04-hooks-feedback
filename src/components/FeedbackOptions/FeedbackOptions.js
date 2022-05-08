import React from "react";
import s from './FeedbackOptions.module.css';
import PropTypes from "prop-types";

export default function FeedbackOptions({ options, onLeaveFeedback }) { 
    return (
      <ul className={s.list}>
        {options.map(option => (
          <li key={option} className={s.item}>
             <button name={option} type="button" onClick={() => onLeaveFeedback(option)} className={s.button}>{option}</button>
          </li>
        ))}
        
      </ul>
    )
}

FeedbackOptions.propTypes = { 
  options: PropTypes.node.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}