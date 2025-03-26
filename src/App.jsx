import "./App.css"
import React from 'react'
import Navbar from './components/Navbar'
import HomeContent from "./components/HomeContent"
import ServiceContent from "./components/ServiceContent"

function App() {
  return (
    <div>
      <Navbar />
      <HomeContent />
      <ServiceContent/>
    </div>
  )
}

export default App