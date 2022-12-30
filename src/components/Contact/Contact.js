import './Contact.scss'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {
  const refForm = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        refForm.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message successfully sent!')
        },
        () => {
          alert('Message failed to send.')
        }
      )
  }
  return (
    <div className="contact-form">
      <div className="title">Contact Me</div>
      <form ref={refForm} onSubmit={sendEmail}>
        <ul>
          <li className="half">
            <input type="text" name="name" placeholder="Name" required />
          </li>
          <li className="half">
            <input type="email" name="email" placeholder="Email" required />
          </li>
          <li>
            <input type="text" name="subject" placeholder="Subject" required />
          </li>
          <li>
            <textarea placeholder="Message" name="message" required></textarea>
          </li>
          <li>
            <input type="submit" className="flat-button" value="SEND" />
          </li>
        </ul>
      </form>
    </div>
  )
}

export default Contact
