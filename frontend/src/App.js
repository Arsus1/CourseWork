import Header from './components/Header'
import {Route, Routes} from 'react-router-dom'
import MapPage from './pages/MapPage'
import SelectPage from './pages/SelectPage'

function App() {
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<SelectPage/>}/>
        <Route path="/map" element={<MapPage/>}/>
      </Routes>
    </>
  );
}

export default App;
