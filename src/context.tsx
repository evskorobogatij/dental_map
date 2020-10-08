import React from 'react'
import { IToothProps } from './components/Tooth/Tooth';

type ContextProps = {
    currentTooth : number,
    tooths:Array<IToothProps>,
    selectTooth ?: (num:number)=>void
}

const ContextTooth = React.createContext<ContextProps>({currentTooth:-1,tooths:[]});

export default ContextTooth;