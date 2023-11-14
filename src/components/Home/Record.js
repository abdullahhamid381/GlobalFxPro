import React, { useState, useEffect } from 'react'
import './Css/Record.scss'
import { record } from '../Data'
const Record = () => {

  // ACTIVE USERS SECTION

  const [countdown, setCountdown] = useState(0); // Initial countdown value
  const [showCountdown, setShowCountdown] = useState(false);

  // COUNTRIES USERS SECTION

  const [countdowntwo, setCountdowntwo] = useState(0); // Initial countdown value
  const [showCountdowntwo, setShowCountdowntwo] = useState(false);





  // VOlume USERS SECTION

  const [countdownthree, setCountdownthree] = useState(0); // Initial countdown value
  const [showCountdownthree, setShowCountdownthree] = useState(false);
  // ACTIVE USERS SECTION
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
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [showCountdown, countdown]);





  // COUNTRIES SECTION



  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowCountdowntwo(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let interval;
    if (showCountdowntwo) {
      interval = setInterval(() => {
        if (countdowntwo < 20) {
          setCountdowntwo(countdowntwo + 1);
        }
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [showCountdowntwo, countdowntwo]);




    // Volume SECTION



  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setShowCountdownthree(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      let interval;
      if (showCountdowntwo) {
        interval = setInterval(() => {
          if (countdownthree < 20) {
            setCountdownthree(countdownthree + 1);
          }
        }, 100);
      } else {
        clearInterval(interval);
      }
  
      return () => {
        clearInterval(interval);
      };
    }, [showCountdownthree, countdownthree]);
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

            {showCountdowntwo                                             && (
              <div>
                <p>{countdowntwo}+</p>
              </div>
            )}
           
          </div>
        </center>
        <center>
          <div>
            <img src="./images/trade.gif" alt="" className='fade' />
            <h1>Weekly Trading Volume </h1>
            {showCountdown && (
              <div>
                <p>${countdown}M</p>
              </div>
            )}
          </div>
        </center>
      </div>


    </div>
  )
}

export default Record
