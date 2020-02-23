import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './views/Home'

import './App.styl'

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
