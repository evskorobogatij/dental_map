import React from 'react';

import {ReactComponent as Canine} from './../../img/canine-tooth.svg';
import {ReactComponent as Incisors} from './../../img/incisors-tooth.svg';
import {ReactComponent as Molar} from './../../img/molar-tooth.svg';
import {ReactComponent as Premolar} from './../../img/premolar.svg';
import {ReactComponent as ToothImg} from './../../img/tooth.svg';

import "./Tooth.scss";

export enum ToothType {
    Canine,
    Incisors,
    Molar,
    Premolar,
    Tooth
}

export interface IToothProps {
    num : number, //номер зуба
    type ?: ToothType,
    active ?: boolean,
    onClick?: (param : React.MouseEvent<HTMLDivElement, MouseEvent> ) => void
}

export default function Tooth(props: IToothProps) {

  const rotated_tooth = props.num <=28 ? {
      rotate : '180deg'
  } : {}

  const toothType=(num:number)=>{
        const q = Math.floor(num/10)
        const pos = num % 10

        console.log(q,pos)
        if([1,2].includes(pos))
            return <Incisors style={rotated_tooth}  />
        if(pos===3)
            return <Canine style={rotated_tooth} />
        if([4,5].includes(pos)) 
            return <Premolar style={rotated_tooth}  />
        if([6,7,8].includes(pos)){
            if([1,2].includes(q))
                return <Molar style={rotated_tooth} />
            if([3,4].includes(q))    
                return <ToothImg style={rotated_tooth} />
        }
  }

  return (
    <div className={`Tooth ${props.num <=28 ? 'Tooth_up' : 'Tooth_down'} ${props.active ? 'Tooth_seleted' : ''} `} onClick = {props.onClick}>
        <span>{props.num}</span>
        {/* <ToothImg style={rotated_tooth} /> */}
        <div>
           { toothType(props.num)}
        </div>
    </div>
  );
}
