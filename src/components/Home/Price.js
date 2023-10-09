import React from 'react'
import './Css/price.scss'
import { pricedetail } from '../Data'
const Price = () => {
    return (
        <div className='price-parent'>
            <div className='price-title'>
                <h1>Plans <span style={{ color: '#447FF2' }}>& Pricing</span></h1>
                <p>Whether your time-saving automation <span style={{ color: '#447FF2' }}>needs are large or small, we’re <br /> here to help you scale.</span></p>
            </div>
            <div className="price-detail">
                {
                    pricedetail.map((item) => {
                        return (
                            <div className='price-detail-div' id={item.latestpkg}>
                                <div className='price'>
                                    <h1>{item.price}<span>/month</span></h1>

                                </div>

                                <div className='start'>
                                    <h1>{item.title}</h1>
                                    <p>{item.para}</p>
                                </div>
                                <div style={{ padding: '15px 0 0 0' }}>
                                    <div className='spec'>
                                        <img src="./images/check.png" alt="" />
                                        <span>{item.quality1}</span>
                                    </div>
                                    <div className='spec'>
                                        <img src="./images/check.png" alt="" />
                                        <span>{item.quality2}</span>
                                    </div>
                                    <div className='spec'>
                                        <img src="./images/check.png" alt="" />
                                        <span>{item.quality3}</span>
                                    </div>
                                    <div className='spec'>
                                        <img src="./images/check.png" alt="" />
                                        <span>{item.quality4}</span>
                                    </div>
                                    <div className='spec'>
                                        <img src="./images/check.png" alt="" />
                                        <span>{item.quality5}</span>
                                    </div>
                                </div>
                                <button>Choose Plan</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Price
