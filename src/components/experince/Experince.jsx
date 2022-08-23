import React from 'react'
import './experince.css'
import { ImCheckboxChecked } from 'react-icons/im'

const Experince = () => {
  return (
    <section id='experince'>
      <h2 className='My-skills'>My Skills</h2>

      <div className='container experince_container'>
        <div className='experince_frontend'>
          <h3>Frontend Development </h3>
          <div className='experince_content'>

            <article className='experince_details'>
              <ImCheckboxChecked className='experince_details-icons' />
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Experinced</small>
              </div>

            </article>

            <article className='experince_details'>
              <ImCheckboxChecked className='experince_details-icons' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermidate</small>
              </div>
            </article>


            <article className='experince_details'>
              <ImCheckboxChecked className='experince_details-icons' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermidate</small>
              </div>
            </article>

            <article className='experince_details'>
              <ImCheckboxChecked className='experince_details-icons' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>

            <article className='experince_details'>
              <ImCheckboxChecked className='experince_details-icons' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermidate</small>
              </div>
            </article>

            <article className='experince_details'>
              <ImCheckboxChecked className='experince_details-icons' />
              <div>
                <h4>Mobile Development</h4>
                <small className='text-light'>Intermidate</small>
              </div>
            </article>

          </div>
        </div>

        <div className='experince_frontend'>
          <h3>Other Skills</h3>
          <div className='experince_content'>

            <article className='experince_details'>
              <ImCheckboxChecked className='experince_details-icons' />
              <div>
                <h4>Project Review</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>

            <article className='experince_details'>
              <ImCheckboxChecked className='experince_details-icons' />
              <div>
                <h4>Community Building</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>


            <article className='experince_details'>
              <ImCheckboxChecked className='experince_details-icons' />
              <div>
                <h4>Content Creation</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>

            <article className='experince_details'>
              <ImCheckboxChecked className='experince_details-icons' />
              <div>
                <h4>Bloger and Writer</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>

            <article className='experince_details'>
              <ImCheckboxChecked className='experince_details-icons' />
              <div>
                <h4>Forex and Cypto Trader</h4>
                <small className='text-light'>Experinced</small>
              </div>
            </article>

          </div>
        </div>
      </div>



    </section >
  )
}

export default Experince