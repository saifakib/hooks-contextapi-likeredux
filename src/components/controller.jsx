import React,{ useContext } from 'react'
import { CountContext } from '../providers/count-provider'

const Controller = () => {
    const { increment, decrement, reset } = useContext(CountContext)
    return (
        <div>
            <button className="btn btn-primary mx-2" onClick={ () => increment() }>Increment</button>
            <button className="btn btn-primary mx-2" onClick={ () => decrement() }>Decrement</button>
            <button className="btn btn-danger mx-2" onClick={ () => reset() }>Reset</button>
        </div>
    );
}

export default Controller;
