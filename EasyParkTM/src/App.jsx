import React from 'react'
import { BrowserRouter as Router, Routes, Route }
      from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Heatmap from './pages/Heatmap';
import Contact from './pages/Contact';
import Ocupare from './pages/Ocupare'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Login} />
        <Route path='/home/:username/:email/' Component={Home} />
        <Route path='/register' Component={Register} />
        <Route path='/map/:username/:email/' Component={Heatmap} />
        <Route path='/contact/:username/:email/' Component={Contact} />
        <Route path='/login' Component={Login} />
        <Route path='/ocupare/:username/:email' Component={Ocupare} />
      </Routes>
    </Router>
  )
}

export default App
