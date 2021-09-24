import React, { useState } from 'react'
import {
    HashRouter as Router,
    Switch
} from "react-router-dom";

import Counter from '../Components/Counter'
import { UserContext } from '../Components/UseContext'
import AuthRouter from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute'

const AppRouter = () => {



    const [isAuth, setIsAuth] = useState(false)

    return (
        <UserContext.Provider value={{ isAuth, setIsAuth }}>
            <Router>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isAuth}
                    />
                    <PrivateRoute
                        path="/"
                        component={Counter}
                        isAuthenticated={isAuth}
                    />
                </Switch>
            </Router>
        </UserContext.Provider >
    )
}

export default AppRouter
