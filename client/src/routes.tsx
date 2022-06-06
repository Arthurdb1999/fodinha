import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './Landing'
import Play from './Play'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/play" component={Play} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes