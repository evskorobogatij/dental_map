import  React, { useContext } from 'react';
import ContextTooth from '../../context';
import { ToothStatus } from '../Tooth/Tooth';

import "./ToothInfo.scss"

function ToothInfo() {

    const {currentTooth, tooths} = useContext(ContextTooth);

    return (        
        <div className={'ToothInfo'}>
            <p>{ currentTooth>=0 ? `Зуб № ${tooths[currentTooth].num}` : 'Зуб не выбран' } </p>           
            <label>
                <input type="radio" value="normal" name={"tooth"} checked={ currentTooth>=0 ? tooths[currentTooth].status===ToothStatus.Normal : false} />
                Здоровый зуб
            </label>
            <label>
                <input type="radio" value="caries" name={"tooth"} checked={ currentTooth>=0 ? tooths[currentTooth].status===ToothStatus.Caries : false} />
                Кариес
            </label>
            <label>
                <input type="radio" value="plomb" name={"tooth"} checked={ currentTooth>=0 ? tooths[currentTooth].status===ToothStatus.CariesPlomb : false} />
                Пломба
            </label>
            <label>
                <input type="radio" value="implant" name={"tooth"} checked={ currentTooth>=0 ? tooths[currentTooth].status===ToothStatus.Implant : false} />
                Имплант
            </label>
            <label>
                <input type="radio" value="fake" name={"tooth"} checked={ currentTooth>=0 ? tooths[currentTooth].status===ToothStatus.Fake : false} />
                Искуственный зуб
            </label>
            <label>
                <input type="radio" value="removed" name={"tooth"} checked={ currentTooth>=0 ? tooths[currentTooth].status===ToothStatus.Removed : false} />
                Удален
            </label>
        </div>    
    )    
}

export default ToothInfo;