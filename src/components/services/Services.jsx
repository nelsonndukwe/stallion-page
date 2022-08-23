import React from 'react'
import './services.css'
import { TiTick } from 'react-icons/ti'


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container container_services'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX</h3>

            </div>

            <ul className='service_list'>

            <li className='service_list-icon'>
            <TiTick />
            <p>Builds responsive deisgns for mobile and web applications</p>
            </li>

            <li className='service_list-icon'>
            <TiTick />
            <p>Frontend Development For Mobiles uisng Flutter</p>
            </li>

            <li className='service_list-icon'>
            <TiTick />
            <p>Frontend Development For webpages Using React</p>
            </li>
          
            </ul>


        </article>


         <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>

            </div>

            <ul className='service_list'>

            <li className='service_list-icon'>
            <TiTick />
            <p>Experinced Backend Developer</p>
            </li>

            <li className='service_list-icon'>
            <TiTick />
            <p>Building Smart Apis  </p>
            </li>

            <li className='service_list-icon'>
            <TiTick />
            <p>Web 3 Developer </p>
            </li>
            
            <li className='service_list-icon'>
            <TiTick />
            <p>Frontend Developer using React.Js</p>
            </li>

            <li className='service_list-icon'>
            <TiTick />
            <p>FBuilds And maintains Scalable Databases</p>
            </li>
            </ul>


        </article>



        <article className='service'>
          <div className='service_head'>
            <h3>Content Creation</h3>

            </div>

            <ul className='service_list'>

            <li className='service_list-icon'>
            <TiTick />
            <p>A Writer and Crypto Analyst </p>
            </li>

            <li className='service_list-icon'>
            <TiTick />
            <p>Community builder for Web 3 Projects</p>
            </li>

            <li className='service_list-icon'>
            <TiTick />
            <p>Projects Reviews for diffrenbt Compaines like Onepage X and Harmony</p>
            </li>
            </ul>


        </article>









    </div>







    </section >
  )
}

export default Services