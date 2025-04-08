import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import Navigation from './components/Navigation'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <Navigation></Navigation>
      <Home id="Home"></Home>
      <About id="About"></About>
      <Skills id="Skills"></Skills>
      <Contacts id="Contacts"></Contacts>
      <Footer></Footer>
      </div>
  )
}

export default App
