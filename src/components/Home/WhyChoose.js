import React from 'react'
import './Css/WhyChoose.scss'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import{AiFillPlayCircle} from 'react-icons/ai'
import expert from '../assets/expert.mp4'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const WhyChoose = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className='choose-parent'>
            <div className='choose-title'>
                <h1 style={{ color: '' }}> Why Choose <span style={{ color: '#447FF2' }}> us?</span></h1>
                <p>Discover early user’s feedback on  <span style={{ color: '#447FF2' }}>Dico integration within   <br /> their workflows.</span></p>
            </div>

            <div className='choose-detail'>
                <div className='choose-detail-first'>
                    <div className='imgg'>
                        <img src="./images/choose1.png" alt="" />
                        <div className='modal'>
                            <Button onClick={handleOpen}><AiFillPlayCircle/></Button>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                slots={{ backdrop: Backdrop }}
                                slotProps={{
                                    backdrop: {
                                        timeout: 500,
                                    },
                                }}
                            >
                                <Fade in={open}>
                                    <Box sx={style}>
                                        <Typography id="transition-modal-title" variant="h6" component="h2">
                                            Text in a modal
                                        </Typography>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                        </Typography>
                                    </Box>
                                </Fade>
                            </Modal>
                        </div>
                    </div>
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
                    <div className='imgg'>
                        <img src="./images/choose2.png" alt="" />
                        <div className='modal'>
                            <Button onClick={handleOpen}><AiFillPlayCircle/></Button>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                slots={{ backdrop: Backdrop }}
                                slotProps={{
                                    backdrop: {
                                        timeout: 500,
                                    },
                                }}
                            >
                                <Fade in={open}>
                                    <Box sx={style}>
                                        <Typography id="transition-modal-title" variant="h6" component="h2">
                                            Text in a modal
                                        </Typography>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                        </Typography>
                                    </Box>
                                </Fade>
                            </Modal>
                        </div>
                    </div>
                </div>

                <div className='choose-detail-first'>
                <div className='imgg'>
                        <img src="./images/choose3.png" alt="" />
                        <div className='modal'>
                            <Button onClick={handleOpen}><AiFillPlayCircle/></Button>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                slots={{ backdrop: Backdrop }}
                                slotProps={{
                                    backdrop: {
                                        timeout: 500,
                                    },
                                }}
                            >
                                <Fade in={open}>
                                    <Box sx={style}>
                                       <video src={expert} controls style={{width:'100%'}}></video>
                                    </Box>
                                </Fade>
                            </Modal>
                        </div>
                    </div>
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
