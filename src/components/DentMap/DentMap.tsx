import React,{useContext, useEffect, useState} from 'react';

import Tooth, { IToothProps } from "./../Tooth/Tooth";
import {toothData} from "../../lib/tooth_data"

import ContextTooth from './../../context'

import "./DentMap.scss";
import "./../Tooth/Tooth.scss";

export interface IDentMapProps {
}

export default function DentMap (props: IDentMapProps) {
    
 const [tooths,setTooth] = useState(localStorage.getItem('tooths') ? JSON.parse(localStorage.getItem('tooths') ?? '') : toothData );

 const {currentTooth, selectTooth } = useContext(ContextTooth)
 
  useEffect(()=>{
      localStorage.setItem('tooths',JSON.stringify(tooths))
  },[tooths])  

  return (
    <div className={"DentMap"} >
        {
            tooths.map((item:IToothProps,index:number)=>(
                <div className={`${index===currentTooth ? 'Tooth_seleted' : ''}`}>
                    <Tooth {...item} key={item.num} onClick={selectTooth?.bind(null,index)} />
                </div>
            ))
        }     
    </div>
  );
}
