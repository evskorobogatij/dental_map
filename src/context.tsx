import React from 'react'

type ContextProps = {
    currentTooth : number,
    selectTooth : (num:number)=>void
}

const ContextTooth = React.createContext<Partial<ContextProps>>({});

export default ContextTooth;