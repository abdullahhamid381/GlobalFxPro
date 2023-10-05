import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Css/Review.scss';

// import required modules
import { Pagination } from 'swiper/modules';
import { reviewdata } from '../Data';

export default function Review() {
  return (
    <div className='review-parent'>
      <div className="review-title">
        <h1>Users Testimonials
          
        </h1>
        <p>Discover early user’s feedback on <span> Dico integration within <br />their workflows.</span></p>
      </div>
      <div className="review-slider-parent">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            reviewdata.map((item) => {
              return (
                <SwiperSlide>
                  <div className='slider-div-parent'>
                    <div>
                      <img src={item.img} alt="" />
                    </div>
                    <div style={{padding:'10px 0 0 0'}}>
                      <h1>{item.title}</h1>
                      <p>{item.para}</p>
                      <h6>{item.detail}</h6>
                    </div>
                    <h6>

                    </h6>
                  </div>
                </SwiperSlide>
              )
            })
          }

        </Swiper>
      </div>
    </div>
  );
}
