import { NavLink } from 'react-router'
import './Navbar.scss'

export default function Navbar() {
  return (
    <header id="header-nav" className="header">
      <div className="container">
      
        <nav id="header-menu">
          <ul className="menu">
            <li>
              <NavLink to="/" className="hover-effect">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Servicios" className="hover-effect">SERVICIOS</NavLink>
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
