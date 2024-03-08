import React from 'react'
import { BrowserRouter as Router, Routes, Route }
      from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Heatmap from './pages/Heatmap';

function App() {
  return (
    <Router styles = "{min-height: 100%;}">
      <Routes>
        <Route exact path='/' Component={Login} />
        <Route path='/home/:username/:email/' Component={Home} />
        <Route path='/register' Component={Register} />
        <Route path='/map/:username/:email/' Component={Heatmap} />
        <Route path='/login' Component={Login} />
      </Routes>
    </Router>
  )
}

export default App
