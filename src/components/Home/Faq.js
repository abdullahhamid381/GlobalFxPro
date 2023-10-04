import React from 'react'
import './Css/Faq.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Faq = () => {
  return (
    <div className='faq-parent'>
    <div className='faq-title'>
        <h1 style={{ color: '' }}> Frequently asked <span style={{color:'#447FF2'}}>questions  </span></h1>
        <p>The answers to the frequently asked questions about the <br/> Forex market are presented in these FAQs:</p>
    </div>
  
<div style={{padding:'80px 0'}}>
<Accordion style={{background:'#181717',borderRadius:'8px',padding:'5px 0',marginTop:'20px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'20px',fontWeight:'500',color:'#447FF2'}}>What is forex trading?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'20px',fontWeight:'500',color:'white'}}>
          Forex trading, also known as foreign exchange trading, is the process of buying and selling currencies in the foreign exchange market with the aim of making a profit.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion style={{background:'#181717',borderRadius:'8px',padding:'5px 0',marginTop:'20px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'20px',fontWeight:'500',color:'#447FF2'}}>How does forex trading work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'20px',fontWeight:'500',color:'white'}}>
          Forex trading involves the simultaneous exchange of one currency for another, with the hope that the currency purchased will increase in value compared to the one sold. Traders speculate on the exchange rate movements to profit from the price fluctuations.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion style={{background:'#181717',borderRadius:'8px',padding:'5px 0',marginTop:'20px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'20px',fontWeight:'500',color:'#447FF2'}}>How much money do I need to start trading Forex?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'20px',fontWeight:'500',color:'white'}}>
          With some Forex brokers you can start trading Forex with as little as $1. Usually, the minimum amount varies from $100 to $10,000 ($100,000 and more for interbank trading).
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion style={{background:'#181717',borderRadius:'8px',padding:'5px 0',marginTop:'20px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:'20px',fontWeight:'500',color:'#447FF2'}}>How do I open an account with Globalfxpro?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:'20px',fontWeight:'500',color:'white'}}>
          Click on Sign-In: Click on the "Sign In" or "Login" button, and you will be directed to the login page.
          </Typography>
        </AccordionDetails>
      </Accordion>
   
   
    
</div>

<div>
<h1 className='question'>
Have more <span style={{color:'#447FF2'}}>questions!</span>
</h1>
<center>
<button className='question-button'>Call us</button>
</center>
</div>

</div>
  )
}

export default Faq
