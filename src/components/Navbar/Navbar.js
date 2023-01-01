import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo2.svg'
import { ReactSVG } from 'react-svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const openMenu = () => {
    setMenu(true)
  }

  const closeMenu = () => {
    setMenu(false)
  }
  return (
    <div>
      <div className="navbar">
        <Link to="/" className="logo-link">
          <ReactSVG src={logo} />
        </Link>

        <NavLink
          exact="true"
          activeclassname="active"
          className="nav-link"
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="nav-link"
          to="/about"
        >
          About
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="nav-link"
          to="/skills"
        >
          Skills
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="nav-link"
          to="/contact"
        >
          Contact
        </NavLink>

        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          color="#fff"
          className="hamburger"
          onClick={openMenu}
        />
      </div>

      {menu && (
        <div className="collapsible-navbar">
          <FontAwesomeIcon
            icon={faX}
            size="lg"
            className="close-button"
            onClick={closeMenu}
          />
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/skills" onClick={closeMenu}>
            Skills
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Navbar
