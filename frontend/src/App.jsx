import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ChatHome from './ChatHome.jsx'
import Navbar from './Navbar.jsx' 
import Instructions from './Instructions.jsx'

function App() {
  return (
    
    <BrowserRouter>
    <main className="flex min-h-screen flex-col bg-[#32194c]">
    <div className="container mt-24 mx-auto px-12 py-4">
        <Navbar />
          <Routes>
            <Route path="/" element={<Instructions />} />
            <Route path="/chathome" element={<ChatHome />} />
            <Route path="/instructions" element={<Instructions />} />
          </Routes>
    </div>
    </main>
    </BrowserRouter>
    
  )
}

export default App
