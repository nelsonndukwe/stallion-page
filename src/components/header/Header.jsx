import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/NFT1.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
   <div className='container header_container'>
   <h5>Hello I'am</h5>
   <h1>Nelson Ndukwe</h1>
   <h5 className='text-light'>Frontend Developer</h5>
   <CTA />
   <HeaderSocials />


   <div className='Me'>

    <img src={ME} alt='' className='header_image'></img>
   </div>

   <a href='#contact' className='scroll_down'>Scroll Down</a>






   </div> 



    </header>
  )
}

export default Header