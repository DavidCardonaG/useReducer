import React, { useReducer } from 'react'
import {CounterReducer, initialState} from '../Reducer/CounterReducer'

const Counter = () =>{

    const[state,dispatch] = useReducer(CounterReducer,initialState)

    const handleIncrement = (e) =>{
        const {checked} = e.target;
        dispatch({type:"INCREMENT", increment:checked })
    }
    const handleCountInterval = (e) =>{
        const {value} = e.target;
        dispatch({type:"SET INTERVAL", countInterval:value })
    }
    const handleCount = (e) =>{
        if(state.increment){
            dispatch({type:"INCREASE_COUNT" })
        }else{
            dispatch({type:"DECREASE_COUNT" })
        }
    }
    const handleRestart = (e) =>{
        dispatch({type:"RESTART" })
    }

    return(
        <div className="padre">
            <h1 id="title">HOOK USEREDUCER BY DAVID</h1>
            <p id="cuenta">{"Cuenta: " + state.count}</p>
            <div>
                <input
                type="checkbox"
                id="check"
                defaultChecked={state.increment}
                onChange={handleIncrement}
                />
                <label htmlFor="check">{"Incrementar"}</label>
            </div>
            <br/>
            <div>
                <label id="cuenta" htmlFor="interval">{"Intervalo"}</label>
                <input
                type="text"
                id="interval"
                value={state.countInterval}
                onChange={handleCountInterval}
                />
            </div>
            <br/>
            <button id="btn1" onClick={handleCount}>{state.increment ? "INCREMENTAR": "DECREMENTAR"}</button>
            <button id="btn2"onClick={handleRestart}>{"REINICIAR"}</button>

        </div>
    )
}

export default Counter;
