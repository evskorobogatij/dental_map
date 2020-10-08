import React,{useReducer, useState} from 'react';

import Tooth from "./../Tooth/Tooth";
import {toothData} from "../../lib/tooth_data"

import "./DentMap.scss";

export interface IDentMapProps {
}

const changeCurrentTooth=()=>{

}

export default function DentMap (props: IDentMapProps) {

 const [tooths,setTooth] = useState(toothData);

 const [curTooth,setCurTooth] = useState<number>(-1);

 const handleClick=(e:React.MouseEvent<HTMLDivElement, MouseEvent>,index:number)=>{
        console.log(index)

        const tmp_tm = tooths.slice()
        if(curTooth>=0)
            tmp_tm[curTooth].active = false
        tmp_tm[index].active = true
        setTooth(tmp_tm)
        setCurTooth(index)
 }

  return (
    <div className={"DentMap"} >
        {
            tooths.map((item,index)=>(
                <Tooth {...item} key={item.num} onClick={(e)=>handleClick(e,index)} />
            ))
        }     
    </div>
  );
}
