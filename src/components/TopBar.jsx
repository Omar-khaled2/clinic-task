import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons' 

export default class TopBar extends Component {
  render() {
    return <>
        <div className="top-bar bg-primary p-1">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="contact-info">
                    <FontAwesomeIcon icon={faPhone} className="me- text-light" />
                    <p className='text-light d-inline-block '>+1235 2355 98</p> 
                    <FontAwesomeIcon icon={faPaperPlane} className="ms-3 me-2 text-light" />
                    <p className='text-light d-inline-block '>youremail@email.com</p> 
                </div>
                <div className="auth-links">
                    <a href="#" className="text-white" >SIGN UP</a>
                    <a href="#" className="text-white ms-2 ps-3">SIGN IN</a>
                </div>
            </div>
        </div>
    
    </>
  }
}
