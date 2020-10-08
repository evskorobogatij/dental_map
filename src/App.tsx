import React, { useEffect, useState } from 'react';
import './App.scss';

// import {ReactComponent as Tooth} from './img/tooth.svg';
import DentMap from "./components/DentMap/DentMap"
import { IToothProps, ToothStatus } from './components/Tooth/Tooth';
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

  const toothStatusChange=(code:number,status:ToothStatus)=>{
    const tmp_tooth:Array<IToothProps> = tooths.slice()
    tmp_tooth[code].status = status
    setTooth(tmp_tooth)
  } 

  useEffect(()=>{
    localStorage.setItem('tooths',JSON.stringify(tooths))
  },[tooths])  

  return (
    <>
      <h1 style={{textAlign:'center'}}>Зубная карта</h1>
      <ContextTooth.Provider value={{currentTooth:current,selectTooth,tooths,toothStatusChange}} >
        <div className="Block">
          <DentMap />
          <ToothInfo /> 
        </div>
      </ContextTooth.Provider>
    </>

  );
}

export default App;
