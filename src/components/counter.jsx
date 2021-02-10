import React,{ useContext } from 'react'
import Controller from './controller'
import { CountContext } from '../providers/count-provider'

function Counter() {
    const {count} = useContext(CountContext)
    return (
        <>
            <div className="card card-body text-center my-2">
                <h4>{count}</h4>
            </div>
            <div className="card card-body text-center">
                <Controller />
            </div>
        </>
    )
}

export default Counter;
