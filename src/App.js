import React from 'react'
import Login from './components/Login'
import Home from './components/Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/login' Component={Login}/>
      </Routes>
    </Router>
    </>
  )
}

export default App