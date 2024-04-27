import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ChatHome from './ChatHome.jsx'
import Navbar from './Navbar.jsx' 
import Instructions from './Instructions.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Instructions />} />
            <Route path="/chathome" element={<ChatHome />} />
            <Route path="/instructions" element={<Instructions />} />
          </Routes>
    </div>
    </BrowserRouter>
   
  )
}

export default App
