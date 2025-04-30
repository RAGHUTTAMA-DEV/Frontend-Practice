import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DashBoard from './pages/DashBoard'
import {Routes, Route,BrowserRouter} from 'react-router-dom'
import Cards from './pages/cards'
import LaunchCard from './pages/LaunchCard'
import Trending from './pages/Treading'
function App() {
  
  return(
    <div>
      <BrowserRouter>
      <Routes>
         <Route path='/card' element={<Cards/>}/>
          <Route path='/' element={<DashBoard/>}/>
          <Route path='/launcher' element={<LaunchCard/>}/>
          <Route path='/trending' element={<Trending/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
