import React from "react";
import s from './Notification.module.css'

const Notification = ({ message }) => { 
    return (
      <p className={s.text}>
          {message}
      </p>
    )
};

export default Notification;