import React, { useContext } from 'react';
import ContextTooth from '../../context';
import { ToothStatus } from '../Tooth/Tooth';

import "./ToothInfo.scss"

function ToothInfo() {

    const { currentTooth, tooths, toothStatusChange } = useContext(ContextTooth);


    interface IToothStatus {
        value: ToothStatus,
        title: string
    }

    const toothStatuses: Array<IToothStatus> = [
        { value: ToothStatus.Normal, title: 'Здоровый зуб' },
        { value: ToothStatus.Caries, title: 'Кариес' },
        { value: ToothStatus.CariesPlomb, title: 'Пломба' },
        { value: ToothStatus.Implant, title: 'Имплант' },
        { value: ToothStatus.Fake, title: 'Искуственный зуб' },
        { value: ToothStatus.Removed, title: 'Удален' }
    ];

    const statuses = (toothStatuses: Array<IToothStatus>) => {
        toothStatuses.map((item, index) => (

            <label key={index} className="radio">
                <input type="radio" value={item.value} checked={currentTooth >= 0 ? tooths[currentTooth].status === item.value : false} onChange={toothStatusChange?.bind(null, currentTooth, item.value)} />
                <div className="radio__text">{item.title}</div>
            </label>
        ))

    }


    return (
        <div className={'ToothInfo'}>
            <p>{currentTooth >= 0 ? `Зуб № ${tooths[currentTooth].num}` : 'Зуб не выбран'} </p>
            {
                currentTooth >= 0 ? statuses(toothStatuses) : ''

            }
        </div>
    )
}

export default ToothInfo;