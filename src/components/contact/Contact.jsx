import React from 'react'
import './contact.css'
import { MdMarkEmailUnread } from 'react-icons/md'
import { SiSteemit } from 'react-icons/si'
import { ImWhatsapp } from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1xzqtlh', 'template_h8g78h9', form.current, 'BLLsOFvUMfZ6fbN5U')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);

      });
    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Wanna Say Hi</h5>
      <h2>Swipe Up</h2>

      <div className='conatiner contact_container' >
        <div className='contact_options'>
          <article className='contact_option'>
            <MdMarkEmailUnread className='contact_option-icon' />
            <h4>Email</h4>
            <h5 className='contact_option-name'>Nelsonndukwe800@gmail.com</h5>
            <a href='mailto:Nelsonndukwe800@gmail.com' target='_blank'>Send a Message</a>


          </article>

          <article className='contact_option'>
            <ImWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5 className='contact_option-name'>09064035138</h5>
            <a href='https://api.whatsapp.com/send?phone=+2349064035138' target='_blank'>Send a Message</a>


          </article>


          <article className='contact_option'>
            <SiSteemit className='contact_option-icon' />
            <h4>Steemit</h4>
            <h5 className='contact_option-name'>Whitestallion</h5>
            <a href='https://steemit.com/@whitestallion/posts' target='_blank'>Visit My Blog</a>


          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>

          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn_primary'>Send Message</button>





        </form>








      </div>



    </section>
  )
}

export default Contact