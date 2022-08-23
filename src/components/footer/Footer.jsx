import React from 'react'
import './footer.css'
import { AiFillFacebook } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'

export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Nelson</a>

      <ul className='permalinks'>
        <li><a href='#' >Home</a></li>
        <li><a href='#about' >About</a></li>
        <li><a href='#experince' >Experince</a></li>
        <li><a href='#services' >Services</a></li>
        <li><a href='#testimonials' >Testimonails</a></li>
        <li><a href='#contact' >Contact</a></li>

      </ul>


      <div className='footer_socails'>
        <a href=''><AiFillFacebook /></a>
        <a href=''><BsInstagram /></a>
        <a href=''><BsTwitter /></a>
        <a href=''><AiFillLinkedin /></a>
      </div>


      <div className='footer_copyright'>
        <small>&copy; Nelson Ndukwe. All Rights Reserved</small>
      </div>







    </footer>
  )
}
export default Footer;
