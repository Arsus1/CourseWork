import React, {useState} from 'react';
import MyModal from './MyModal'
import ListItem from './ListItem'

const Place = ({size: {width, height}, races, title, offsetX, offsetY}) => {
  const [isVisible, setIsVisible] = useState(false)
  
  function toggleVisible() {
    setIsVisible(prev => !prev)
  }
  
  return (
    <div className='place'>
      <div
        className="dot"
        style={{
          top: height/2 + offsetY + 'px',
          left: width/2 + offsetX + 'px'
        }}
        onClick={toggleVisible}
      />
      {
        isVisible
          ? <MyModal races={races.filter(el => el.place === title)} title={title} close={toggleVisible}/>
          : ''
      }
      
    </div>
  );
};

export default Place;
