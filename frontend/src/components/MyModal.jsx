import React, {useEffect, useState} from 'react';
import ListItem from './ListItem'
import MyButton from './button/MyButton'

function calcTotalMoney(races) {
  return races.length === 0 ? 0
    : races.reduce((acc, cur) => acc + cur.money, 0)
}

const MyModal = ({children, close, title, races}) => {
  const [active, setActive] = useState(null)
  const [betMoney, setBetMoney] = useState('')
  const [totalMoney, setTotalMoney] = useState(() => calcTotalMoney(races))
  
  function calcCoef(racerMoney) {
    let result = racerMoney / totalMoney
    if (isNaN(result)) result = 0
    return result.toFixed(2)
  }
  
  function bet() {
    const intBetMoney = Number.parseInt(betMoney)
    if (intBetMoney > 0 && !isNaN(intBetMoney)) {
      active.money += intBetMoney
      setTotalMoney(totalMoney + intBetMoney)
      sendRequest()
    }
      setBetMoney('')
  }
  
  function sendRequest() {
    fetch('http://localhost:8080/races/add', {
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(active)
    })
  }
  
  return (
    <div onClick={() => close()} className='modal'>
      <div onClick={e => e.stopPropagation()} className="content">
        <div className="main-title">{title}</div>
        <div className="titles">
          <div className="number">№</div>
          <div className="name">name</div>
          <div className="car">car</div>
          <div className="car">coef</div>
        </div>
        <div className="list">
          {
            races.map((el, i) => (
              <ListItem
                isActive={el === active}
                key={i}
                index={i + 1}
                name={el.racer}
                car={el.car}
                place={el.place}
                coef={calcCoef(el.money)}
                onClick={() => setActive(el)}
              />
            ))
          }
        </div>
        {
          active &&
          <div className="bet">
            <input value={betMoney} onChange={e => setBetMoney(e.target.value)} className='bet-input' type="text" maxLength={5}/>
            <div className="bet-racer">total prize: {totalMoney}$</div>
            <MyButton onClick={bet}>Bet!</MyButton>
          </div>
        }
        
      </div>
    </div>
  );
};

export default MyModal;
