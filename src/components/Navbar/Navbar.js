import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo2.svg'
import { ReactSVG } from 'react-svg'

const Navbar = () => {
  return (
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
    </div>
  )
}

export default Navbar
