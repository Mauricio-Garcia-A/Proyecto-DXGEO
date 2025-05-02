import { NavLink} from 'react-router'
import './Navbar.scss'

export default function Navbar() {
  return (
    <header id="header-nav" className="header">
      <div className="container">
        <nav id="header-menu">
          <ul className="menu">
            <li>
              <NavLink to="/Proyecto-DXGEO/" className="hover-effect" onClick={() => window.scrollTo(0, 0)}>INICIO</NavLink>
            </li>
            <li>
              <NavLink to="/Proyecto-DXGEO/Servicios" className="hover-effect" onClick={() => window.scrollTo(0, 0)}>SERVICIOS</NavLink>
            </li>
            <li>
              <NavLink to="/Proyecto-DXGEO/Productos" className="hover-effect" onClick={() => window.scrollTo(0, 0)}>PRODUCTOS</NavLink>
            </li>
            <li>
              <a href='#formas-de-contacto' className="hover-effect">CONTACTOS</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

  )
}
