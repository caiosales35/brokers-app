import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'

const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/broker">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default RoutesProvider
