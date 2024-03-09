import React from 'react'
import { BrowserRouter as Router, Routes, Route }
      from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Heatmap from './pages/Heatmap';
import Contact from './pages/Contact';
import Ocupare from './pages/Ocupare';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Welcome} />
        <Route path='/home/:email/' Component={Home} />
        <Route path='/register' Component={Register} />
        <Route path='/map/:email/' Component={Heatmap} />
        <Route path='/contact/:email/' Component={Contact} />
        <Route path='/login' Component={Login} />
        <Route path='/ocupare/:email' Component={Ocupare} />
      </Routes>
    </Router>
  )
}

export default App
