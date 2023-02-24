import React from "react"
import "./contact.css"
import Hero from "../../components/hero/hero"




function Contact() {

    return (
        <>
        <Hero />
      <h1 id="contact">
        Contact Me
      </h1>

      <div className="contact-form">
        <form>
          <input
            name="name"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            name="email"
            type="text"
            placeholder="Enter Your Email Address"
          />
          <textarea
            name="message"
            placeholder="Enter your message..."
            cols="30"
            rows="10"
          ></textarea>
          <div className="contact-button-container">
            <input type="submit" submit="true" />
          </div>
        </form>
      </div>
        </>
    )
}


export default Contact;