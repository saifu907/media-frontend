import { useState } from 'react'
import './App.css'
import Headers from './Components/Headers'
import LandingPage from './Pages/LandingPage'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import WatchHistory from './Pages/WatchHistory'
import Home from './Pages/Home'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Headers/>
    <Routes>
      
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watchhistory' element={<WatchHistory/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
