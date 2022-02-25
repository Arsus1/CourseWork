import React from 'react';
import ProgressBar from './ProgressBar/ProgressBar'
import MyButton from './button/MyButton'

const Select = ({current, characteristics, functions: [prev, next, nextStage, prevStage], style}) => {
  
  return (
    <div  className="select-card">
      <div className="select">
        <button className='select-button' onClick={prev}>&lt;</button>
          <div style={style} className="image">
            <img src={current.imageUrl} />
          </div>
        <button className='select-button' onClick={next}>&gt;</button>
      </div>
      <div className="description">
        <div className="main-title">
          {current.name}
        </div>
          {
            characteristics.map(char => (
            <ProgressBar
              key={char}
              title={char}
              rate={current[char] + '%'}
            />
            ))
          }
      </div>
      <div className="buttons">
        <MyButton onClick={prevStage}>Back</MyButton>
        <MyButton onClick={nextStage}>Select</MyButton>
      </div>
    </div>
  );
};

export default Select;
