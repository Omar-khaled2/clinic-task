import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faLocation, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'

export default class Footer extends Component {
  render() {
    return <>
    <footer className='mt-5'>
        <div className=' container d-flex flex-wrap pt-5 pb-5'>
            <div className=' col-md-2'>
                <h2  className=' pb-4'>MediaPlus</h2>
                <p className=' mt-5 pb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                
                <a href="#"><FontAwesomeIcon icon={faFacebook} style={{color:'blue'}} className='fa-3x pe-3'/></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} style={{color:'blue'}} className='fa-3x' /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} style={{color:'blue'}} className='fa-3x ps-3'/></a>
            </div>
            <div className='col-md-2 m-auto'>
                <h2  className=' pb-4'>Department</h2>
                <ul className='text-primary'>
                    <li>Neuology</li>
                    <li>Opthalmology</li>
                    <li>Nuclear Magnetic</li>
                    <li>Surgical</li>
                    <li>Cardiology</li>
                    <li>Dental</li>
                </ul>

            </div>
            <div className="col-md-2 m-auto">
                <h2 className=' pb-4'>Links</h2>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Departments</a></li>
                    <li><a href="#">Doctors</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Conatct us</a></li>
            </div>

            <div className="col-md-2 m-auto">
                <h2 className=' pb-4'>Sevices</h2>
                    <li><a href="#">Emergency Services</a></li>
                    <li><a href="#">Qualifed Doctors</a></li>
                    <li><a href="#">Outdoors check-up</a></li>
                    <li><a href="#">24 Hours Services</a></li>
            </div>

            <div className="col-md-2 ">
                <h2 className=' pb-4'>Have Question?</h2>
                    <li className=' pb-3'><FontAwesomeIcon icon={faLocation}/>	203 Fake St. Mountain View, San Francisco, California, USA</li>
                    <li ><FontAwesomeIcon icon={faPhone}/>+123456789</li>
                    <li className='pt-3'><FontAwesomeIcon icon={faMailBulk}/>info@yourdomain.com</li>
            </div>

        </div>
        <div className="text-center mt-4 pb-4">
            <p>Copyright ©2025 All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart}/> by Omar</p>
        </div>

    </footer>
    </>
  }
}
