import React,{useContext} from 'react';

import Tooth, { IToothProps } from "./../Tooth/Tooth";

import ContextTooth from './../../context'

import "./DentMap.scss";
import "./../Tooth/Tooth.scss";

export interface IDentMapProps {
}

export default function DentMap (props: IDentMapProps) {
    
 const {currentTooth, selectTooth, tooths } = useContext(ContextTooth)
 
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
