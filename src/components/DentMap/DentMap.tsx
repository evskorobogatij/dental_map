import * as React from 'react';

import Tooth from "./../Tooth/Tooth";
import {toothData} from "../../lib/tooth_data"

import "./DentMap.scss";

export interface IDentMapProps {
}

export default function DentMap (props: IDentMapProps) {

 const tooths = toothData

 const handleClick=(e:React.MouseEvent<HTMLDivElement, MouseEvent>,num:number)=>{
        console.log(num)
 }

  return (
    <div className={"DentMap"} >
        {
            tooths.map((item)=>(
                <Tooth {...item} key={item.num} onClick={(e)=>handleClick(e,item.num)} />
            ))
        }     
    </div>
  );
}
