import { Route, Routes } from "react-router"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Perfil from "./pages/Perfil"
import LoadingComponent from "./components/LoadingComponent/LoadingComponent"
import { useEffect, useState } from "react"


function App() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      
      // Esperar 1 segundo después de que la página cargue completamente
      setTimeout(() => {
        setFadeOut(true);
        setLoading(false);
      }, 1000);
    };

    // Si la página ya terminó de cargar antes de que el useEffect corra
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {
        loading ? <LoadingComponent fadeOut={fadeOut}/>
          : <>
              <Navbar />
              <Routes>
                <Route path="/Proyecto-DXGEO/" element={<Home />} />
                <Route path="/Proyecto-DXGEO/Servicios" element={<Services />} />
                <Route path="/Proyecto-DXGEO/Perfil-profecional" element={<Perfil />} />
                <Route path="/Proyecto-DXGEO/*" element={<div>ERROR</div>} />
                <Route path="*" element={<div>ERROR</div>} />

              </Routes>
              <Footer />
          </>
      }


    </>
  )
}

export default App