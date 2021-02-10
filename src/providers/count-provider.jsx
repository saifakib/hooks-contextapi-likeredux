import React,{ createContext, useReducer } from 'react'
import reducer, { createAction } from '../reducers/count-reducer'

const CountContext = createContext()

const CountProvider = props => {
    const [count, dispatch] = useReducer(reducer, 0)
    const actions = createAction(dispatch)

    return(
        <CountContext.Provider value={{ count, ...actions }}>
            {props.children}
        </CountContext.Provider>
    )
}

export { CountProvider, CountContext }
