import React from 'react'

import {BrowserRouter as Router, Route } from 'react-router-dom'

import ScreenHome from './Home'
import ScreenChat from './Chat'

const Root = () => {

    return (
        <Router>
            <Route exact path="/"> <ScreenHome /> </Route>
            <Route exact path="/:room"> <ScreenChat /> </Route>
        </Router>
    )
}

export default Root