import React from 'react';
import classes from './MyButton.module.scss'
const MyButton = ({children, onClick, style}) => {
  return (
    <button style={style} onClick={onClick} className={classes.MyButton}>
      {children}
    </button>
  );
};

export default MyButton;
