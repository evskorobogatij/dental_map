import React,{useEffect, useReducer, useState} from 'react';

import Tooth, { IToothProps } from "./../Tooth/Tooth";
import {toothData} from "../../lib/tooth_data"

import "./DentMap.scss";
import "./../Tooth/Tooth.scss";

export interface IDentMapProps {
}

const changeCurrentTooth=()=>{

}

export default function DentMap (props: IDentMapProps) {

    
 const [tooths,setTooth] = useState(localStorage.getItem('tooths') ? JSON.parse(localStorage.getItem('tooths') ?? '') : toothData );

 const [curTooth,setCurTooth] = useState<number>(-1);

 const handleClick=(e:React.MouseEvent<HTMLDivElement, MouseEvent>,index:number)=>{
        setCurTooth(index)
 }

  useEffect(()=>{
      localStorage.setItem('tooths',JSON.stringify(tooths))
  },[tooths])  

  return (
    <div className={"DentMap"} >
        {
            tooths.map((item:IToothProps,index:number)=>(
                <div className={`${index===curTooth ? 'Tooth_seleted' : ''}`}>
                    <Tooth {...item} key={item.num} onClick={()=>setCurTooth(index)} />
                </div>
            ))
        }     
    </div>
  );
}
