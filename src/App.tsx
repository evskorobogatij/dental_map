import React, { useEffect, useState } from 'react';
import './App.scss';

// import {ReactComponent as Tooth} from './img/tooth.svg';
import DentMap from "./components/DentMap/DentMap"
import ToothInfo from './components/ToothInfo';
import ContextTooth from './context'
import { toothData } from './lib/tooth_data';

function App() {

  const [current,setCurrent] = useState(-1);
  const [tooths,setTooth] = useState(localStorage.getItem('tooths') ? JSON.parse(localStorage.getItem('tooths') ?? '') : toothData );

  const selectTooth=(num:number)=>{
    console.log(num)
      setCurrent(num)
  }

  useEffect(()=>{
    localStorage.setItem('tooths',JSON.stringify(tooths))
  },[tooths])  
  
  return (
    <ContextTooth.Provider value={{currentTooth:current,selectTooth,tooths}} >
      <div className="Block">
        <DentMap />
        <ToothInfo /> 
      </div>
    </ContextTooth.Provider>

  );
}

export default App;
