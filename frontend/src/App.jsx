import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ChatHome from './ChatHome.jsx'
import './App.css'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ChatHome />} />
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
