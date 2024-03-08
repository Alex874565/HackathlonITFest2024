import React from 'react'
import { BrowserRouter as Router, Routes, Route }
      from 'react-router-dom';
import Home from'./pages/Home';
import Login from'./pages/Login';
import Register from'./pages/Register';


function App() {
  return (
    <Router styles = "{min-height: 100%;}">
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register} />
        <Route path='/map' Component={Heatmap} />
      </Routes>
    </Router>
  )
}

export default App
