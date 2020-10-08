import React, { useState } from 'react';
import './App.scss';

// import {ReactComponent as Tooth} from './img/tooth.svg';
import DentMap from "./components/DentMap/DentMap"
import ContextTooth from './context'

function App() {

  const [current,setCurrent] = useState(-1);

  const selectTooth=(num:number)=>{
    console.log(num)
      setCurrent(num)
  }

  return (
    <ContextTooth.Provider value={{currentTooth:current,selectTooth}} >
      <div className="Block">
        <DentMap />
        <div>
           { current>=0 ? `Зуб № ${current}` : 'Зуб не выбран' }
        </div>          
      </div>
    </ContextTooth.Provider>

  );
}

export default App;
