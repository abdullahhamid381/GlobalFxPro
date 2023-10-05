import React from 'react'
import './Css/Record.scss'
import { record } from '../Data'
const Record = () => {
  return (
    <div className='record-parent'>
    <div className='record-title'>
        <h1 style={{ color: '' }}> Our Value <span style={{color:'#447FF2'}}> Record</span></h1>
        <p>Discover early user’s feedback on  <span style={{ color: '#447FF2' }}>Dico integration within <br/> their workflows.</span></p>
    </div>
    <div className='record-flex'>
        {
            record.map((item)=>{
                return(
                <center>
                        <div>
                        <img src={item.img} alt="" />
                    <h1>{item.title}</h1>
                    <p>{item.user}</p>
                    </div>
                </center>
                )
            })
        }
    </div>


</div>
  )
}

export default Record
