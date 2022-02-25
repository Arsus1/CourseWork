import {carImages, commonImages, placeImages, racerImages} from '../data'
import {useEffect, useState} from 'react'
import Select from '../components/Select'
import MyButton from '../components/button/MyButton'
import axios from 'axios'


function SelectPage() {
  const cars = [
    {
      name: 'Lamborghini',
      speed: 90,
      acceleration: 30,
      handling: 50,
      imageUrl: carImages.lamborghini
    },
    {
      name: 'Dodge',
      speed: 40,
      acceleration: 30,
      handling: 20,
      imageUrl: carImages.dodge
    },
    {
      name: 'Mclaren',
      speed: 30,
      acceleration: 50,
      handling: 60,
      imageUrl: carImages.mclaren
    },
  ]
  const racers = [
    {
      name: 'Vin Diesel',
      experience: 90,
      technique: 80,
      luck: 50,
      imageUrl: racerImages.VinDiesel
    },
    {
      name: 'Paul Walker',
      experience: 80,
      technique: 85,
      luck: 40,
      imageUrl: racerImages.PaulWalker
    },
    {
      name: 'Jason Statham',
      experience: 30,
      technique: 50,
      luck: 70,
      imageUrl: racerImages.JasonStatham
    },
  ]
  const places = [
    {
      name: 'Port Murphy',
      imageUrl: placeImages.port
    },
    {
      name: 'Palm City Raceway',
      imageUrl: placeImages.track
    },
    {
      name: 'Downtown Palm City',
      imageUrl: placeImages.city
    },
    
  
  ]
  const [car, SetCar] = useState(cars[0])
  const [carIndex, setCarIndex] = useState(0)
  const [racer, setRacer] = useState(racers[0])
  const [racerIndex, setRacerIndex] = useState(0)
  const [place, setPlace] = useState(racers[0])
  const [placeIndex, setPlaceIndex] = useState(0)
  const [stage, setStage] = useState(0)
  
  
  function chooseNext(setState, index) {
    if (index === cars.length - 1) setState(0)
    else setState(p => p + 1)
  }
  
  function choosePrev(setState, index) {
    if (index === 0) setState(cars.length - 1)
    else setState(p => p - 1)
  }
  
  function nextStage() {
    setStage(prev => prev === 4 ? 0 : prev + 1)
  }
  function prevStage() {
    setStage(prev => prev - 1)
  }
  
  function sendRequest() {
    const data = {
      car: car.name,
      racer: racer.name,
      place: place.name,
      money: 0
    }
    fetch('http://localhost:8080/races/add', {
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(data)
    })
    
    nextStage()
  }
  
  useEffect(() => {
    SetCar(cars[carIndex])
  }, [carIndex])
  
  useEffect(() => {
    setRacer(racers[racerIndex])
  }, [racerIndex])
  
  useEffect(() => {
    setPlace(places[placeIndex])
  }, [placeIndex])
  
  function renderSwitch() {
    switch (stage) {
      case 0:
        return (
          <div className='apply'>
            <img src={commonImages.girl} alt=""/>
            <div className="text-info">
              <div className="comment">Hey! <br/> Wanna race?</div>
              <MyButton onClick={nextStage}>Apply for a race</MyButton>
            </div>
          </div>
        )
      case 1:
        return (
          <Select
            style = {{
              width: 850 + 'px',
              height: 350 + 'px'
            }}
            functions={[
              () => choosePrev(setCarIndex, carIndex),
              () => chooseNext(setCarIndex, carIndex),
              nextStage,
              prevStage
            ]}
            current={car}
            characteristics={[
              'acceleration',
              'speed',
              'handling'
            ]}
          />
        )
      case 2:
        return (
          <Select
            style = {{
              width: 500 + 'px',
              height: 450 + 'px'
            }}
            functions={[
              () => choosePrev(setRacerIndex, racerIndex),
              () => chooseNext(setRacerIndex, racerIndex),
              nextStage,
              prevStage
            ]}
            current={racer}
            characteristics={[
              'experience',
              'technique',
              'luck'
            ]}
          />)
      case 3:
        return (
        <Select
          style = {{
            width: 800 + 'px',
            height: 450 + 'px'
          }}
          functions={[
            () => choosePrev(setPlaceIndex, placeIndex),
            () => chooseNext(setPlaceIndex, placeIndex),
            sendRequest,
            prevStage
          ]}
          current={place}
          characteristics={[]}
        />)
      case 4:
        return (
          <div className='success'>
            <div className="info">
              <div className="success-title">Application sent!</div>
              <div className="text">driver: {racer.name}</div>
              <div className="text">car: {car.name}</div>
              <div className="text">place: {place.name}</div>
            <MyButton style={{alignSelf: 'flex-end'}} onClick={nextStage}>Ok</MyButton>
            </div>
          </div>
          )
      default:
        return ('')
    }
  }
  
  return (
    <div className='wrapper'>
      {
        renderSwitch()
      }
    </div>
  );
}

export default SelectPage;
