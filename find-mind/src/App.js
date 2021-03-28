import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import './App.css';
import Home from './components/Home.js'
import SignIn from './components/SignIn.js'


class App extends Component {
  state = {
    users: {}
    // {
    //   "id":            "69",
    //   "author":        "Alexander Shustov",
    //   "width":         4912,
    //   "height":        3264,
    //   "url":           "https://unsplash.com/photos/SITaCHf7jjg",
    //   "download_url":  "https://picsum.photos/id/69/4912/3264"
    // }
  }

  constructor() {
    super()
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={SignIn} path='/' exact />
          <Route component={Home} path='/dashboard' />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
