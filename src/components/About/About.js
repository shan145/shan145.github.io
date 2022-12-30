import './About.scss'
import shan from '../../assets/images/shan.jpg'

const About = () => {
  return (
    <div className="about-container">
      <div className="img-container">
        <img src={shan} alt="Samuel Han" />
      </div>
      <div className="text-container">
        <div className="title">About Me</div>
        <p className="info">
          I'm currently a software engineer at HubSpot working on the CRM. I
          have worked on designing RESTful APIs for both frontend and backend
          teams to use at HubSpot, and creating robust systems to handle high
          loads of traffic from customers during my time there.
        </p>
        <p className="info">
          My main focuses as a software engineer include learning sound and
          robust design patterns in both coding and systems, and creating
          distributed systems that are reliable and scalable.
        </p>
        <p className="info">
          Other interests outside of the above include basketball, volleyball,
          design, and theology.
        </p>
      </div>
    </div>
  )
}

export default About
