import  React, { useContext } from 'react';
import ContextTooth from '../../context';
import { ToothStatus } from '../Tooth/Tooth';

import "./ToothInfo.scss"

function ToothInfo() {

    const {currentTooth, tooths, toothStatusChange} = useContext(ContextTooth);

    const toothStatuses:Array<{
        value : ToothStatus,
        title: string
    }> =[
        {value:ToothStatus.Normal, title:'Здоровый зуб'},
        {value:ToothStatus.Caries, title:'Кариес'},
        {value:ToothStatus.CariesPlomb, title:'Пломба'},
        {value:ToothStatus.Implant, title:'Имплант'},
        {value:ToothStatus.Fake, title:'Искуственный зуб'},
        {value:ToothStatus.Removed, title:'Удален'}
    ]   ;

    return (        
        <div className={'ToothInfo'}>
            <p>{ currentTooth>=0 ? `Зуб № ${tooths[currentTooth].num}` : 'Зуб не выбран' } </p>    
            {
                currentTooth>=0 ?
                toothStatuses.map((item,index)=>(
                    <label key={index}>
                        <input type="radio" value={item.value} checked={ currentTooth>=0 ? tooths[currentTooth].status===item.value : false} onChange={toothStatusChange?.bind(null,currentTooth,item.value)}  /> 
                        {item.title}
                    </label>
                ))
                : ''
            }       
        </div>    
    )    
}

export default ToothInfo;