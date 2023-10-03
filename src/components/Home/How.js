import React from 'react'
import './Css/How.css'
import { how } from '../Data'
const How = () => {
  return (
    <div className='how-parent'>
      <div className='how-title'> 
        <h1>How we do <span style={{color:'#447FF2'}}>thing?</span></h1>
       <div className='quality-how-parent'>
       {
            how.map((item)=>{
                return(
                    <div>
                        <center>
                        <img src={item.img} alt="" />
                        <h2 className={item.class}>{item.title}</h2>
                        <p>{item.para}</p>
                        </center>
                    </div>
                )
            })
        }
       </div>
      </div>
    </div>
  )
}

export default How
