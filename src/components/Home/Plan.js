import React from 'react'
import './Css/Plan.scss'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { pricedetail } from '../Data';
const Plan = () => {
    return (
        <div className='plan-parent'>
            <div className='plan-title'>
                <h1>Plans <span>& Pricing</span></h1>
                <p>Whether your time-saving automation <span>needs are large or small, we’re <br />
                    here to help you scale.</span></p>
            </div>

            <div className="plan-price-section">
                <Swiper

                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{

                        992: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                 {
                    pricedetail.map((item)=>{
                        return(
                            <SwiperSlide>
                            <div className='price-detail' id={item.latestpkg}>
                                <div className='price-detail-price'>
                                    <h1>{item.price}<span>/month</span></h1>
                                    <h2>{item.title}</h2>
                                    <p>{item.para}</p>
                                </div>
                             <div style={{paddingTop:'15px'}}>
                             <div className='price-spec'>
                                    <img src="./images/check.png" alt="" />
                                    <span>{item.quality1}</span>
                                </div>
                                <div className='price-spec'>
                                    <img src="./images/check.png" alt="" />
                                    <span>{item.quality2}</span>
                                </div>
                                <div className='price-spec'>
                                    <img src="./images/check.png" alt="" />
                                    <span>{item.quality3}</span>
                                </div>
                                <div className='price-spec'>
                                    <img src="./images/check.png" alt="" />
                                    <span>{item.quality4}</span>
                                </div>
                                <div className='price-spec'>
                                    <img src="./images/check.png" alt="" />
                                    <span>{item.quality5}</span>
                                </div>
                             </div>
                             <button>Choose Plan</button>
                            </div>
                        </SwiperSlide>
                        )
                    })
                 }
             

                </Swiper>
            </div>
        </div>
    )
}

export default Plan
