import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance, faUserDoctor, faStethoscope, faClock,} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faSquareGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default class Appoiment extends Component {
  render() {
    return <>
      <div className="bga d-flex align-items-center" id="home">
        <div className="App d-flex flex-column">
          <h1 className="title">Appointment</h1>
          <div className="breadcrumb-container">
            <a className='breadcrumb' href="/">Home &gt;</a>
            <a href="#appoiment" className='breadcrumb'>Appointment &gt;</a>
          </div>
        </div>
      </div>

      <section id='about'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src="./public/about.jpg" alt="doc" className="img-fluid w-75" />
            </div>

            <div className="col-md-6">
              <h2 >
                We Are <span style={{ color: "blue" }}>Mediplus</span> A Medical Clinic
              </h2>
              <p className="m-3">
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
              <button className="btn btn-primary m-2 rounded-5 p-3">Make an Appointment</button>
              <button className="btn btn-danger m-2 rounded-5 p-3">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5 bg-body-secondary ">
            <div className="row">

              <div className="col-md-6">
                <h2 className="fw-bolder mb-5">Our Services</h2>
      
                <div className="row g-5">

                  <div className="col-md-6 d-flex align-items-start">
                    <div className="icon-container">
                      <FontAwesomeIcon icon={faAmbulance} size="2x" />
                    </div>
                    <div>
                      <h6 className="fw-bold">Emergency Services</h6>
                      <p className="text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                  </div>
      

                  <div className="col-md-6 d-flex align-items-start">
                    <div className="icon-container">
                      <FontAwesomeIcon icon={faUserDoctor} size="2x" />
                    </div>
                    <div>
                      <h6 className="fw-bold">Qualified Doctors</h6>
                      <p className="text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex align-items-start">
                    <div className="icon-container">
                      <FontAwesomeIcon icon={faStethoscope} size="2x" />
                    </div>
                    <div>
                      <h6 className="fw-bold">Outdoors Checkup</h6>
                      <p className="text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex align-items-start">
                    <div className="icon-container">
                      <FontAwesomeIcon icon={faClock} size="2x" />
                    </div>
                    <div>
                      <h6 className="fw-bold">24 Hours Service</h6>
                      <p className="text-muted">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                  </div>
                </div>
              </div>
      

              <div className="col-md-6 bg-light p-4 rounded">
                <h5 className="text-primary text-uppercase fw-bold mb-4">Free Consultation</h5>
                <form>
                  <input type="text" className="form-control mb-3" placeholder="First Name" />
                  <input type="text" className="form-control mb-3" placeholder="Last Name" />
                  <select className="form-control mb-3">
                    <option>Select Your Services</option>
                    <option>Emergency Services</option>
                    <option>Qualified Doctors</option>
                    <option>Outdoors Checkup</option>
                    <option>24 Hours Service</option>
                  </select>
                  <input type="tel" className="form-control mb-3" placeholder="Phone" />
                  <input type="date" className="form-control mb-3" />
                  <input type="time" className="form-control mb-3" />
                  <textarea className="form-control mb-3" placeholder="Message" rows="3"></textarea>
                  <button className="btn btn-danger w-100 py-2">Appointment</button>
                </form>
              </div>
            </div>
          </section>


          <section id='blog'>
        <div className='text-center justify-content-center py-5 my-5'>
          <h2>Gets Every Single Updates Here</h2>
          <p className=' text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

        </div>
        <div className="d-flex justify-content-center">
          <div className="row row-cols-1 row-cols-md-3 g-4 w-75 cards justify-content-center">
            <div className="col d-flex justify-content-center">
              <div className="card text-center">
                <img src="./public/image_1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title ">Scary Thing That You Don’t Get Enough Sleep</h5>
                  <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <button className='btn btn-primary'>Read More</button>

                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="card text-center">
                <img src="./public/image_2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Scary Thing That You Don’t Get Enough Sleep</h5>
                  <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <button className='btn btn-primary'>Read More</button>

                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="card text-center">
                <img src="./public/image_3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Scary Thing That You Don’t Get Enough Sleep</h5>
                  <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <button className='btn btn-primary'>Read More</button>

                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>




    </>
  }
}
