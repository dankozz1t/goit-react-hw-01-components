import React from 'react';
import s from './Task.module.css';

const Task = ({ title, children }) => {
  return (
    <li className={s.item}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </li>
  );
};

export default Task;
