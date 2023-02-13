import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

const BottomBar:React.FC = () => {

    const [show, setShow] = useState(true);
    const [sourceModalShow, setSourceModalShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // <div className="text-center mr-4 bg-white text-pink rounded-full px-2 cursor-pointer" onClick={handleShow}>Modal</div>

    const handleSourceModalClose = () => setSourceModalShow(false);
    const handleSourceModalShow = () => setSourceModalShow(true);

    return <>
        <div className="fixed bottom-0 py-1 px-3 w-full flex bg-pink border border-pink-dark text-white overflow-x-scroll">
            <div className="mr-6 font-bold">SmoothFlight DEMO | Alpha Build 0.0.1</div>
            <a href="/assets/ProjectScreen.pdf" target="_blank" className="text-center mr-4 bg-white text-pink rounded-full px-2">View Design File For This Interface</a>
            <Link to="/techstack" className="text-center mr-4 bg-white text-pink rounded-full px-2">View Tech Stack</Link>
            <div className="text-center mr-4 bg-white text-pink rounded-full px-2 cursor-pointer" onClick={handleSourceModalShow}>Source</div>
            <p>Fun fact, this desktop interface gets <a href="/assets/PageSpeed_Insights.pdf" target="_blank" className="font-bold">100/100 in PageSpeed rankings.</a></p>
        </div>
        <Modal 
            show={show} 
            onHide={handleClose}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title>Welcome here!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Thanks for checking out SmoothFlight.io! This is a <strong>very</strong> early 
                beta with lots of missing functionality, but I hope you'll see what I'm trying to 
                accomplish with the very streamlined yet information-rich UI 🙂
                <img src="/assets/demo.gif" className="w-full mt-4" />
            </Modal.Body>
            <Modal.Footer>
            <div onClick={handleClose} className="text-white cursor-pointer rounded-full p-2 bg-pink w-full font-bold text-lg text-center">Let's Check It Out!</div>
            </Modal.Footer>
        </Modal>

        <Modal 
            show={sourceModalShow} 
            onHide={handleSourceModalClose}
            centered
        >
            <Modal.Body>
                Because I'm somewhat secretive with my code, I tend to do most of my work on private 
                BitBucket repos. However, if I know who you are, I'd be happy to send you an invite to check it out <span className="mr-1">🙂 </span>
                Please feel free to request access by emailing me at 
                <a href="mailto:resume@coulterpeterson.com" className="ml-1">resume@coulterpeterson.com</a>.
            </Modal.Body>
            <Modal.Footer>
            <div onClick={handleSourceModalClose} className="rounded-full cursor-pointer p-2 bg-gray-300 w-full font-bold text-lg text-center">Close</div>
            </Modal.Footer>
        </Modal>
        </>


}

export default BottomBar;