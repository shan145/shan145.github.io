import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import './Home.scss'

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-container">
        <div className="welcome">Welcome Aboard</div>
        <div className="hi">Hi, I'm Samuel Han.</div>
        <div className="intro">
          Feel free to explore this website to learn more about me.
        </div>
        <Link to="/contact" className="contact-link">
          Contact Me
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            color="#fff"
            className="right-arrow"
          />
        </Link>
      </div>
      <div className="earth-container">
        <div className="earth"></div>
      </div>
    </div>
  )
}

export default Home
