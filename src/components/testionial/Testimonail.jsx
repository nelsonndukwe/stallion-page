import React from 'react'
import './testinonial.css'
import AVAT1 from '../../assets/Anita2.jpeg'
import AVAT2 from '../../assets/marvel.jpeg'
import AVAT3 from '../../assets/avatar3.jpg'
import AVAT4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';






const Testimonail = () => {
  return (
    <section id=''>

      <h5>What Our Clients Are Saying</h5>
      <h2>Testimonals</h2>

      <Swiper className='conatiner testimonail_conatiner'
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
       
      >
        <SwiperSlide className='testimonail'>

          <div className='client_avater'>
            <img src={AVAT2} alt='Avater one' />
          </div>
          <h5 className='client_name'>Marvel</h5>
          <small className='client_review'>
          Working with Nelson as a Frontend developer on our groove project has proved to be a spectauclar experince as a result of his insane work ethic and vivalious sense of humour.
          </small>

        </SwiperSlide>

        <SwiperSlide className='testimonail'>

          <div className='client_avater'>
            <img src={AVAT1} alt='Avater one' />
          </div>
          <h5 className='client_name'>Anita</h5>
          <small className='client_review'>
          Working and Learning with Nelosn has been by far the best leaening experince i have had in my whole life, his understanding of the forex and crypto market is immense.

          </small>

        </SwiperSlide>


      </Swiper>



    </section>

  )
}

export default Testimonail