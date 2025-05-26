import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { HashRouter as Router,
  Routes,
  Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Card from './components/pages/Card'
import Placeorder from './components/pages/Placeorder'
import Footer from './components/Footer'
import LoginPopup from './components/LoginPopup'

const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  return (<>
  {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></> }
  <div className='w-80% m-auto'>
    
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Card' element={<Card/>} />
       <Route path='/Order' element={<Placeorder/>} />
    </Routes>
    
  </div> 
  <Footer/>
  </>
  )
}

export default App
