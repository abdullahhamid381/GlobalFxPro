import React from 'react'
import './Css/WhyChoose.scss'
const WhyChoose = () => {
    return (
        <div className='choose-parent'>
            <div className='choose-title'>
                <h1 style={{ color: '' }}> Why Choose <span style={{ color: '#447FF2' }}> us?</span></h1>
                <p>Discover early user’s feedback on  <span style={{ color: '#447FF2' }}>Dico integration within   <br /> their workflows.</span></p>
            </div>

            <div className='choose-detail'>
                <div className='choose-detail-first'>
                    <img src="./images/choose1.png" alt="" />
                    <div>
                        <h1>Expert Team:</h1>
                        <p>Our team of skilled traders, analysts, and technical experts are at the forefront of the forex industry. They continuously monitor market trends, analyze data, and develop robust trading strategies to keep our clients ahead of the curve.</p>
                    </div>
                </div>

                <div className='choose-detail-first' id='second'>

                    <div>
                        <h1>Personalized Support:</h1>
                        <p>Our dedicated customer support team is available 24/5 to assist our clients with any inquiries or issues they may encounter. We take pride in delivering prompt and attentive support to enhance the overall trading experience.</p>
                    </div>
                    <img src="./images/choose2.png" alt="" />
                </div>

                <div className='choose-detail-first'>
                    <img src="./images/choose3.png" alt="" />
                    <div>
                        <h1>Security and Transparency:</h1>
                        <p>Ensuring the safety of our clients' funds and maintaining transparency in our operations are our utmost priorities. We adhere to strict regulatory standards and implement robust security measures to safeguard our clients' interests.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default WhyChoose
