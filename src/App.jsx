import { BrowserRouter, Route, Routes } from "react-router"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Services from "./pages/Services"


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Servicios" element={<Services />} />
        <Route path="*" element={<div>ERROR</div>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App