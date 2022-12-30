import {
  faGithub,
  faLinkedin,
  faMediumM,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="footer-container">
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://medium.com/@sh779">
            <FontAwesomeIcon icon={faMediumM} color="#aaa" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/hansamuel/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#aaa" />
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/shan145">
            <FontAwesomeIcon icon={faGithub} color="#aaa" />
          </a>
        </li>
      </ul>
      <div className="copyright">© {currentYear} | Samuel Han</div>
    </div>
  )
}

export default Footer
