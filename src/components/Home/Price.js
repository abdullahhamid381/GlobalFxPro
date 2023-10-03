import React from 'react'
import './Css/price.css'
import { pricedetail } from '../Data'
const Price = () => {
    return (
        <div className='price-parent'>
            <div className='price-title'>
                <h1>Plans <span style={{ color: '#447FF2' }}>& Pricing</span></h1>
                <p>Whether your time-saving automation <span style={{ color: '#447FF2' }}>needs are large or small, we’re <br /> here to help you scale.</span></p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='price-detail'>
                    {
                        pricedetail.map((item) => {
                            return (
                                <div style={{margin:'5px 0',padding:'40px 0'}} className={item.latestpkg}>
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <h1 style={{color:'white'}}>{item.price}</h1>
                                        <span style={{color:'white'}}>{item.month}</span>
                                    </div>
                                    <h1 style={{color:'white',marginTop:'20px',fontWeight:'400'}}>{item.title}</h1>
                                    <p style={{color:'white',marginTop:'10px'}}>{item.para}</p>


                                    <div style={{padding:'10px 0'}}>
                                    <div style={{display:'flex',alignItems:'center'}} className='check'>
                                        <img src={item.img} alt="" /> 
                                        <p style={{color:'white'}}> { item.quality1}</p>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center'}} className='check'>
                                        <img src={item.img} alt="" /> 
                                        <p style={{color:'white'}}> { item.quality2}</p>
                                    </div>
                                    <div style={{display:'flex',alignItems:'center'}} className='check'>
                                        <img src={item.img} alt="" /> 
                                        <p style={{color:'white'}}> { item.quality3}</p>
                                    </div>
                                    </div>
                                    <center><button>Chose Plan</button></center>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Price
