import React, { useContext, useReducer } from 'react'
import { authReducer, initialState } from '../Reducer/authReducer'
import {login,logout} from '../actions/authAction'
import { UserContext } from './UseContext'

const Longin = () => {

    const {isAuth,setIsAuth} = useContext(UserContext)

    const [state, dispatch] = useReducer(authReducer, initialState)

    const handleLogin = (params) => {
        dispatch(login('123','David Cardona'))
        setIsAuth(true)
    }
    

    console.log(state)
    return (
        <div>
            <h1>Login</h1>
            <hr />
            <label>EMAIL: </label>
            <input
            id="email"
            tipe="email"
            placeholder="Email"
            required
            />
            <br/>
            <br />
            <label>PASSWORD:</label>
            <input
            id="password"
            type="password"
            placeholder="Password"
            required
            />

            <p>
            {state.name}
            {state.uid}
            </p>
            <br />
            <p>{isAuth}</p>
            <button 
                className="btn btn-primary" 
                onClick={handleLogin}
            >
                Login
            </button>
            <button 
                className="btn btn-danger" 
            >
                Logout
            </button>
        </div>
    )
}

export default Longin