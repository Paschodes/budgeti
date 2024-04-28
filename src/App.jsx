import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Phone from './components/mobile/phone'
import Mobile from './components/mobile/Mobile'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/phone' element={<Phone />}/>
        <Route path='/mobile' element={<Mobile />}/>
      </Routes>
    </>
  )
}

export default App
