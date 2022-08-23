import React from 'react'
import './about.css'
import ME from '../../assets/NFT1.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiFillFolder } from 'react-icons/ai'



const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about_container'>
                <div className='about_me'>

                    <div className='about_me-image'>
                        <img src={ME} alt="About Image" />

                    </div>

                </div>

                <div className='about_content'>

                    <div className='about_cards'>

                        <article className='about_card'>

                            <FaAward className='about_icon' />
                            <h5>Experince</h5>
                            <small>1+ Years Working</small>
                        </article>

                        <article className='about_card'>
                            <FiUsers className='about_icon' />
                            <h5>Clients</h5>
                            <small>5+ Clients  Worldwide</small>
                        </article>

                        <article className='about_card '>
                            <AiFillFolder className='about_icon' />
                            <h5>Projects</h5>
                            <small>8+ Completed Projects</small>
                        </article>


                    </div>

                    <p>
                        Experienced in managing front-end web architecture, the responsiveness of applications, and
                        coordinating with user interface designers to bring live their designs. Conceptualizing, developing, testing, and
                        implementing back-end front-end applications. Proficient in the use of Back-end languages such as Javascript,
                        HTML, and CSS including other languages, and frameworks such as Node Js, React Js, and Express J                    </p>

                    <a href='' className='btn btn-primary'>Lets Talk</a>


                </div>


            </div>




        </section>
    )
}

export default About