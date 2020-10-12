import React from 'react';

import {ReactComponent as Canine} from './../../img/canine-tooth.svg';
import {ReactComponent as Incisors} from './../../img/incisors-tooth.svg';
import {ReactComponent as Molar} from './../../img/molar-tooth.svg';
import {ReactComponent as Premolar} from './../../img/premolar.svg';
import {ReactComponent as ToothImg} from './../../img/tooth.svg';
import {ReactComponent as FakeTooth  } from "./../../img/fake-tooth.svg";
import {ReactComponent as Implant } from "./../../img/implant-fixture.svg";

import "./Tooth.scss";

export enum ToothType {
    Canine,
    Incisors,
    Molar,
    Premolar,
    Tooth
}

export enum ToothStatus {
    Normal,
    Caries,
    CariesPlomb,
    Implant,
    Fake,
    Removed
}

export interface IToothProps {
    num : number, //номер зуба
    type ?: ToothType,
    status : ToothStatus,
    onClick?: (param : React.MouseEvent<HTMLDivElement, MouseEvent> ) => void
}

export default function Tooth(props: IToothProps) {

  const rotated_tooth = [1,2,5,6].includes(Math.floor(props.num/10)) ? {
      rotate : '180deg'
  } : {}

  const checkToothHelth=(status:ToothStatus) =>{
      let s = '';
      s+=status===ToothStatus.Caries ? 'Tooth_caries' : '';
      s+=status===ToothStatus.CariesPlomb ? 'Tooth_caries_plomb' : ''
      return s;
  }

  const toothType=(props:IToothProps)=>{
        const {num,status} = props
        const q = Math.floor(num/10)
        const pos = num % 10

        console.log(q,pos)
        if(status===ToothStatus.Removed)
            return <></>
        if(status===ToothStatus.Fake)
            return <FakeTooth style={rotated_tooth} />
        if(status===ToothStatus.Implant)
            return <Implant style={rotated_tooth}  />
        if([1,2].includes(pos))
            return <Incisors style={rotated_tooth} className={checkToothHelth(status)} />
        if(pos===3)
            return <Canine style={rotated_tooth} className={checkToothHelth(status) } />
        if([4,5].includes(pos)) 
            if([1,2,3,4].includes(q))
                return <Premolar style={rotated_tooth} className={checkToothHelth(status)} />
            if([5,6].includes(q))
                return <Molar style={rotated_tooth} className={checkToothHelth(status)} />
            if([7,8].includes(q))    
                return <ToothImg style={rotated_tooth} className={checkToothHelth(status)} />                
        if([6,7,8].includes(pos)){
            if([1,2].includes(q))
                return <Molar style={rotated_tooth} className={checkToothHelth(status)} />
            if([3,4].includes(q))    
                return <ToothImg style={rotated_tooth} className={checkToothHelth(status)} />
        }
  }

  return (
    <div className={`Tooth ${[1,2,5,6].includes(Math.floor(props.num/10)) ? 'Tooth_up' : 'Tooth_down'}  `} onClick = {props.onClick}>
        <span>{props.num}</span>
        {/* <ToothImg style={rotated_tooth} /> */}
        <div>
           { toothType(props)}
        </div>
    </div>
  );
}
