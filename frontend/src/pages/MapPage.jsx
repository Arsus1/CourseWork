import React, {useEffect, useState} from 'react';
import Place from '../components/Place'

const MapPage = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  const [races, setRaces] = useState([])
  
  useEffect(() => {
    const onResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    load()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  
  function load() {
    fetch('http://localhost:8080/races/getAll', {
      method: 'GET',
      headers: {"Content-Type":"application/json"},
    })
      .then(response => response.json())
      .then(races => setRaces(races))
  }
  
  return (
    <div className='map-page'>
      <Place
        title='Port Murphy'
        races={races}
        size={size}
        offsetX={-220}
        offsetY={220}
      />
      <Place
        title='Palm City Raceway'
        races={races}
        size={size}
        offsetX={170}
        offsetY={60}
      />
      <Place
        title='Downtown Palm City'
        races={races}
        size={size}
        offsetX={130}
        offsetY={-70}
      />
    </div>
  );
};

export default MapPage;
