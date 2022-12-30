import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Skills.scss'

const Skills = () => {
  return (
    <div className="work-container">
      <div className="text-container">
        <div className="title">Skills & Experience</div>
        <p className="info">
          I mainly use <span>Dropwizard Java, MySQL, Kafka, and HBase</span> at
          HubSpot.
        </p>
        <p className="info">
          Programming languages that I've used throughout my career at companies
          and school include but are not limited to{' '}
          <span>Java, Python, Javascript, OCaml, C++, C#, PHP, and more.</span>
        </p>
        <p className="info">
          Technologies that I have been learning in my free time include{' '}
          <span>React, CSS+SASS, Figma, and AWS.</span> I'm interested in
          learning to develop aesthetically pleasing and user-friendly websites.
        </p>
      </div>
      <div className="stage-cube-container">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faJava} />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
