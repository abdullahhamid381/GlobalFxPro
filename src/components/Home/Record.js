import React,{useState,useEffect} from 'react'
import './Css/Record.scss'
import { record } from '../Data'
const Record = () => {
    const [countdown, setCountdown] = useState(0); // Initial countdown value
  const [showCountdown, setShowCountdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowCountdown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let interval;
    if (showCountdown) {
      interval = setInterval(() => {
        if (countdown < 50) {
          setCountdown(countdown + 1);
        }
      }, 300);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [showCountdown, countdown]);
    return (
        <div className='record-parent'>
            <div className='record-title'>
                <h1 style={{ color: '' }}> Our Value <span style={{ color: '#447FF2' }}> Record</span></h1>
                <p>Discover early user’s feedback on  <span style={{ color: '#447FF2' }}>Dico integration within <br /> their workflows.</span></p>
            </div>
            <div className='record-flex'>
                {/* {
            record.map((item)=>{
                return(
                <center>
                        <div>
                        <img src={item.img} alt="" className={item.class}/>
                    <h1>{item.title}</h1>
                    <p>{item.user}</p>
                    </div>
                </center>
                )
            })
        } */}
                <center>
                    <div>
                        <img src="./images/user.gif" alt="" className='fade' />
                        <h1>Active Users</h1>
                        {showCountdown && (
        <div>
          <p>{countdown}k+</p>
        </div>
      )}

                    </div>
                </center>
                <center>
                    <div>
                        <img src="./images/global.gif" alt="" className='fade' />
                        <h1>Counties Supported</h1>
                        <p>20+</p>
                    </div>
                </center>
                <center>
                    <div>
                        <img src="./images/trade.gif" alt="" className='fade' />
                        <h1>Weekly Trading Volume </h1>
                        <p>$40M</p>
                    </div>
                </center>
            </div>


        </div>
    )
}

export default Record
