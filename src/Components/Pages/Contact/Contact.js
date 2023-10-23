import React from 'react'
import './Contact.css'
import {AiOutlineMail, AiOutlineMobile, AiOutlineTwitter, AiOutlineInstagram, AiOutlineFacebook} from 'react-icons/ai'

function Contact() {
  return (
    <div className='contact'>
    <div className='contact-top'>
      <h1>Contact <span style={{color:"#ff0000"}}>Us</span> </h1>
    </div>

    <div className='contact-body'>
      <div className='form-section'>
        <h2>Send a mail</h2>
        <form>
          <input type='text' placeholder='Enter Your Name' />
          <input type='email' placeholder='Enter Your Email' />
          <textarea type='text' placeholder='Type Your Message' rows={4} cols={50} />
        </form>
        <button>Submit</button>
      </div>
      <div className='contact-section'>
        <div className='mail'>
          <AiOutlineMail /> <p>gymwebsite@gmail.com</p>
        </div>
        <div className='mobile'>
          <AiOutlineMobile /> <p>+91 0123456789</p>
        </div>
        <div className='social-media'>
         <AiOutlineTwitter/>
         <AiOutlineInstagram/>
         <AiOutlineFacebook/>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Contact