import React from 'react'
import './Css/How.scss'
import { how } from '../Data'
const How = () => {
  return (
    <div className='how-parent'>
      <div className='how-title'>
        <h1>How we do <span style={{ color: '#447FF2' }}>thing?</span></h1>
      </div>
      <div className='how-detail'>
        {
          how.map((item) => {
            return (
              <center>
                <div className='how-item'>
                  <img src={item.img} alt="" />
                  <div className={item.class} >
                    <h1>{item.title}</h1>
                    <p>{item.para}</p>
                  </div>
                </div>
              </center>
            )
          })
        }
      </div>
    </div>
  )
}

export default How
