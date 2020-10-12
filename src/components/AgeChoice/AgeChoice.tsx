import React, { useContext } from 'react'
import ContextTooth from '../../context';

import "./AgeChoice.scss"

function AgeChoice() {

    const {isChild, setIsChild} = useContext(ContextTooth)

    return (
        <div className={'AgeChoice'}>
            <label className="radio">
                <input type="radio" value="child" checked={isChild} onChange={setIsChild?.bind(null,true)} />
                <div className="radio__text">Ребенок</div>
            </label>
            <label className="radio">
                <input type="radio" value="child" checked={!isChild} onChange={setIsChild?.bind(null,false)} />
                <div className="radio__text">Взрослый</div>
            </label>
        </div>
    )
}

export default AgeChoice;