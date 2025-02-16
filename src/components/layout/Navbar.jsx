import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return <>
        <nav className="navbar navbar-expand-lg p-4 opacity sticky-bottom bg-transparent">
            <div className="container-fluid ">
                <a className="navbar-brand fs-4 fw-bolder" href="#">MediPlus</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 me-5 ">
                        <li className="nav-item">
                            <a className="nav-link pt-3" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pt-3" href="#about">About</a>
                           
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pt-3" href="#departments">Departments</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pt-3" href="#doctors">Doctors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pt-3" href="#blog" >Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pt-3" href="#contact" >Contact</a>
                        </li>
                        <li className="nav-itemC">
                        <Link className="btn btn-danger pt-3" to="/appointment">Appointment</Link>
                        </li>                                              
                    </ul>
                </div>
            </div>
        </nav>
    </>
  }
}
