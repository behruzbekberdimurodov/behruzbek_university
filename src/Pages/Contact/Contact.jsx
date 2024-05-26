import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <div className="contacts">
      <form>
        <h1>Contact Us Form</h1>
        <input type="text" id="firstName" placeholder="First Name" required="" />
        <input type="text" id="lastName" placeholder="Last Name" required="" />
        <input type="email" id="email" placeholder="Email" required="" />
        <input type="text" id="mobile" placeholder="Mobile" required="" />
        <h4>Type Your Message Here...</h4>
        <textarea required="" defaultValue={""} />

        <button type="submit" defaultValue="Send" id="button">Send</button>
      </form>
    </div>
  )
}

export default Contact
