import './Navbar.scss'

export default function Navbar() {
  return (
    <header id="header-nav" className="header">
      <div className="container">
      
        <nav id="header-menu">
          <ul className="menu">
            <li>
              <a href="/info" className="hover-effect">Home</a>
            </li>
            <li>
              <a href="/archivo" className="hover-effect">SERVICIOS</a>
            </li>
            <li>
              <a href="/archivo" className="hover-effect">CONTACTOS</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

  )
}
