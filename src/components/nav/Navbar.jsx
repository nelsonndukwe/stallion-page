import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAdd} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiContactsFill} from 'react-icons/ri'
import { useState } from 'react'



const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')


  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={(activeNav === '#' ? 'active':'')}><AiTwotoneHome/></a>

    <a href='#about' onClick={() => setActiveNav('#about')} className={(activeNav === '#about' ? 'active':'')}><AiOutlineUser/></a>
      <a href='#experince' onClick={() => setActiveNav('#experince')} className={(activeNav === '#experince' ? 'active':'')}><BiBookAdd/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={(activeNav === '#services' ? 'active':'')}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={(activeNav === '#contact' ? 'active':'')}><RiContactsFill/></a>




    </nav>
  )
}

export default Navbar

