import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ChatHome from './ChatHome.jsx'
import './App.css'
// import Instructions from './Instructions.jsx'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ChatHome />} />
      {/* <Route path="/instructions" element={<Instructions />} /> */}
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
