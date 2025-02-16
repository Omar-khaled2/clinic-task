import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance, faUserDoctor, faStethoscope, faClock,} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faSquareGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSignsPost,faPhone,faPaperPlane,faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Formik } from 'formik';
import * as Yup from "yup"
import { Link } from 'react-router';

const testimonials = [
  {
    img: "./public/person_1.jpg",
    name: "Jeff Freshman",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    img: "./public/person_2.jpg",
    name: "John Doe",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    img: "./public/person_3.jpg",
    name: "Alice Smith",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    img: "./public/person_1.jpg",
    name: "Jeff Freshman",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    img: "./public/person_2.jpg",
    name: "John Doe",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    img: "./public/person_3.jpg",
    name: "Alice Smith",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

const initValues={first_name:'',last_name:'',phone:'',Message:''}

const schema = Yup.object().shape({
  first_name: Yup.string()
    .required('Please enter this field')
    .min(3, 'The minimum characters is 3'),
  last_name: Yup.string()
    .required('Please enter this field')
    .min(3, 'The minimum characters is 3'),
  phone: Yup.string()
    .required('Phone is required')
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'), 
  service: Yup.string().required('Please select a service'), 
  date: Yup.string().required('Date is required'), 
  time: Yup.string().required('Time is required'), 
  Message: Yup.string()
    .required('Please enter this field')
    .min(30, 'The minimum characters is 30')
});
export default class LandingPage extends Component {
  render() {
    return <>

    <div className="bgg w-100 h-100 d-flex flex-column justify-content-center align-items-start" id='home'>
      <p className="text-primary ps-5">Welcome to MediPlus</p>
      <h1 className="ps-5">We are here <br /> for your Care</h1>
      <p className="text-dark ps-5 w-50">Far far away, behind the word mountains, far from the countries 
        Vokalia and Consonantia, there live the blind texts. Separated
        they live in Bookmarksgrove.
      </p>
      <Link className="btn btn-primary p-3" to="/appointment">Make an Appointment</Link>
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
              <Link className="btn btn-primary m-2 rounded-5 p-3" to="/appointment">Make an Appointment</Link>
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
         
            <Formik
              initialValues={initValues}
              validationSchema={schema}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm();
              }}
            >
              {({ values, handleChange, errors, handleSubmit, touched }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="form-control mb-3"
                    value={values.first_name}
                    onChange={handleChange}
                    name="first_name"
                    placeholder="First Name"
                  />
                  {touched.first_name && errors.first_name && (
                    <div className="text-danger">{errors.first_name}</div>
                  )}


                  <input
                    type="text"
                    className="form-control mb-3"
                    value={values.last_name}
                    onChange={handleChange}
                    name="last_name"
                    placeholder="Last Name"
                  />
                  {touched.last_name && errors.last_name && (
                    <div className="text-danger">{errors.last_name}</div>
                  )}


                  <select
                    className="form-control mb-3"
                    value={values.service}
                    onChange={handleChange}
                    name="service"
                  >
                    <option value="">Select Your Services</option>
                    <option value="Emergency Services">Emergency Services</option>
                    <option value="Qualified Doctors">Qualified Doctors</option>
                    <option value="Outdoors Checkup">Outdoors Checkup</option>
                    <option value="24 Hours Service">24 Hours Service</option>
                  </select>
                  {touched.service && errors.service && (
                    <div className="text-danger">{errors.service}</div>
                  )}


                  <input
                    type="tel"
                    className="form-control mb-3"
                    value={values.phone}
                    onChange={handleChange}
                    name="phone"
                    placeholder="Phone"
                  />
                  {touched.phone && errors.phone && (
                    <div className="text-danger">{errors.phone}</div>
                  )}


                  <input
                    type="date"
                    className="form-control mb-3"
                    value={values.date}
                    onChange={handleChange}
                    name="date"
                  />
                  {touched.date && errors.date && (
                    <div className="text-danger">{errors.date}</div>
                  )}


                  <input
                    type="time"
                    className="form-control mb-3"
                    value={values.time}
                    onChange={handleChange}
                    name="time"
                  />
                  {touched.time && errors.time && (
                    <div className="text-danger">{errors.time}</div>
                  )}


                  <textarea
                    className="form-control mb-3"
                    value={values.Message}
                    onChange={handleChange}
                    name="Message"
                    placeholder="Message"
                    rows="3"
                  />
                  {touched.Message && errors.Message && (
                    <div className="text-danger">{errors.Message}</div>
                  )}


                  <button type="submit" className="btn btn-danger w-100 py-2">
                    Appointment
                  </button>
                </form>
              )}
            </Formik>;
        </div>
      </div>
    </section>


      <section className='departments'>
      
        

       
        <div className='text-center my-5 pt-5 text-light ttt'>
          <h2 className='fa-3x'>Your Health is Our Priority</h2>
          <p>We can manage your dream building. A small river named Duden flows by their place.</p>
          <button className='btn btn-light rounded-5'>Search Places</button>
        </div>
      </section>

      <section id='departments'>
        <div className="row">

          <div className="col-md-4 imagee">
            <img src="./public/dept-1.jpg" alt="hand" className="img-fluid" />
          </div>


          <div className="col-md-8">
            <div className="row">
              {[
                "Neurology",
                "Opthalmology",
                "Nuclear Magnetic",
                "Surgical",
                "Cardiology",
                "X-ray",
                "Dental",
                "Traumatology",
                "Cardiology",
              ].map((dept, index) => (
                <div key={index} className="col-md-4 text-center mb-4 my-5">
                  <FontAwesomeIcon icon={faStethoscope} size="2x" className='text-primary' />
                  <h5 className="mt-2">{dept}</h5>
                  <p className="text-muted">Far far away, behind the word mountains</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='pt-5 my-5 'id='doctors'>
        <div className=" container">
          <h2 className='text-center center fa-3x position-relative'>Our Qualified Doctors</h2>
          <p className=' position-absolute ms-5 ps-5 text-secondary '>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
        </div>
        <div className="card-group mt-3 pt-5 gap-4 text-center ">
          <div className="card ps-4">
            <img src="./public/doc-1.jpg" className="card-img-top" alt="..." />
            <div className="overlay">
              <ul className=' d-flex gap-4 list-unstyled  justify-content-center'>
                <a href="#"><li> <FontAwesomeIcon icon={faFacebook} style={{ color: "#f50000", }} /></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faTwitter} style={{ color: "#ff0000", }} /></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faInstagram} style={{ color: "#ff0000", }} /></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faSquareGooglePlus} style={{ color: "#ff0000", }} /></li></a>
              </ul>

            </div>

            <div className="card-body">
              <h5 className="card-title">Dr. Lloyd Wilson <br /> <span style={{ color: 'blue' }}>Neurologist</span></h5>
              <p className="card-text">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
              <button className='btn-primary btn rounded-5'>Book Now</button>

            </div>
          </div>
          <div className="card">
            <img src="./public/doc-2.jpg" className="card-img-top" alt="..." />
            <div className="overlay">
              <ul className=' d-flex gap-4 list-unstyled  justify-content-center'>
              <a href="#"><li> <FontAwesomeIcon icon={faFacebook} style={{ color: "#f50000", }} /></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faTwitter} style={{ color: "#ff0000", }} /></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faInstagram} style={{ color: "#ff0000", }} /></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faSquareGooglePlus} style={{ color: "#ff0000", }} /></li></a>
              </ul>

            </div>

            <div className="card-body">
              <h5 className="card-title">Dr. Rachel Parker<br /> <span style={{ color: 'blue' }}>Ophthalmologist</span></h5>
              <p className="card-text">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
              <button className='btn-primary btn rounded-5'>Book Now</button>

            </div>
          </div>
          <div className="card">
            <img src="./public/doc-3.jpg" className="card-img-top" alt="..." />
            <div className="overlay">
              <ul className=' d-flex gap-4 list-unstyled  justify-content-center'>
              <a href="#"><li> <FontAwesomeIcon icon={faFacebook} style={{ color: "#f50000", }} /></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faTwitter} style={{ color: "#ff0000", }} /></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faInstagram} style={{ color: "#ff0000", }} /></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faSquareGooglePlus} style={{ color: "#ff0000", }} /></li></a>
              </ul>

            </div>

            <div className="card-body">
              <h5 className="card-title">Dr. Ian Smith<br /> <span style={{ color: 'blue' }}>Dentist</span></h5>
              <p className="card-text">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
              <button className='btn-primary btn rounded-5'>Book Now</button>

            </div>
          </div>
          <div className="card pe-4">
            <img src="./public/doc-4.jpg" className="card-img-top" alt="..." />
            <div className="overlay">
              <ul className=' d-flex gap-4 list-unstyled  justify-content-center'>
              <a href="#"><li> <FontAwesomeIcon icon={faFacebook} style={{ color: "#f50000", }} /></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faTwitter} style={{ color: "#ff0000", }} /></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faInstagram} style={{ color: "#ff0000", }} /></li></a>
                <a href="#"><li><FontAwesomeIcon icon={faSquareGooglePlus} style={{ color: "#ff0000", }} /></li></a>
              </ul>

            </div>

            <div className="card-body">
              <h5 className="card-title">Dr. Alicia Henderson<br /> <span style={{ color: 'blue' }}>Pediatrician</span></h5>
              <p className="card-text">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
              <button className='btn-primary btn rounded-5'>Book Now</button>

            </div>
          </div>

        </div>
      </section>



      <section className='bggtwo text-white'>

        <div className='over '>

          <h6 className="text-uppercase fw-bold ">Fun Facts</h6>
          <h2 className="fw-bold fa-3x ">Over 5,100 patients <br /> trust us</h2>
          <button className="btn btn-danger rounded-5 px-4 py-2 mt-3">Make an appointment</button>

          <div className="col-md-6 d-flex flex-row float-end flex-wrap gap-5">

          <h3>30<br />Years of experiance</h3>
          <h3>4500<br />Happy patients</h3>
          <h3>84<br />Number of Doctors</h3>
          <h3>300<br />Number of Staff</h3>
          
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
            <div className="col d-flex justify-content-center">
              <div className="card text-center">
                <img src="./public/image_4.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Scary Thing That You Don’t Get Enough Sleep</h5>
                  <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <button className='btn btn-primary'>Read More</button>

                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="card text-center">
                <img src="./public/image_5.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Scary Thing That You Don’t Get Enough Sleep</h5>
                  <p className="card-text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <button className='btn btn-primary'>Read More</button>

                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="card text-center">
                <img src="./public/image_6.jpg" className="card-img-top" alt="..." />
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
      <div className="testimonial-section py-5">
      <h2 className="text-center text-white fw-bold">Our Patient Says</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          480: { slidesPerView: 1 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card text-center">
              <div className="testimonial-img">
                <img src={item.img} alt={item.name} />
                <div className="quote-icon">❝</div>
              </div>
              <p className="text-white">{item.text}</p>
              <h5 className="text-white fw-bold">{item.name}</h5>
              <span className="text-light">PATIENTS</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>


       <section className='contactUs my-5'id='contact'>
              <div className="text-center">
                <h2 className='fa-3x'>Contact Us</h2>
                <p className=' text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia <br />and Consonantia</p>
              </div>
              <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              
              <div className="col">
                <div className="card text-center p-4 shadow-sm border-0 bg-light">
                  <div className="d-flex justify-content-center mb-3">
                    <FontAwesomeIcon icon={faSignsPost} size="2x" style={{ color: "blue" }} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">ADDRESS</h5>
                    <p className="card-text text-muted">198 West 21th Street, Suite 721 New York NY 10016</p>
                  </div>
                </div>
              </div>
      
              <div className="col">
                <div className="card text-center p-4 shadow-sm border-0 bg-light">
                  <div className="d-flex justify-content-center mb-3">
                    <FontAwesomeIcon icon={faPhone} size="2x" style={{ color: "blue" }} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">CONTACT NUMBER</h5>
                    <p className="card-text text-muted">+ 1235 2355 98</p>
                  </div>
                </div>
              </div>
      
              <div className="col">
                <div className="card text-center p-4 shadow-sm border-0 bg-light">
                  <div className="d-flex justify-content-center mb-3">
                    <FontAwesomeIcon icon={faPaperPlane} size="2x" style={{ color: "blue" }} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">EMAIL ADDRESS</h5>
                    <a href="mailto:info@yoursite.com" className="text-primary">info@yoursite.com</a>
                  </div>
                </div>
              </div>
      
              
              <div className="col">
                <div className="card text-center p-4 shadow-sm border-0 bg-light">
                  <div className="d-flex justify-content-center mb-3">
                    <FontAwesomeIcon icon={faEarthAmericas} size="2x" style={{ color: "blue" }} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">WEBSITE</h5>
                    <a href="#" className="text-primary">yoursite.com</a>
                  </div>
                </div>
              </div>
      
            </div>
          </div>
      
            </section>
      
      
            <section className="my-5 pt-5">
            <div className="container bg-body-secondary d-flex flex-wrap">
              {/* Left Side - Google Map */}
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799141002!2d-74.25987568745003!3d40.69767006365181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzAuMjU5NDU1LCAtNzQuMTEzMTg2!5e0!3m2!1sen!2sus!4v1646991518061!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
      

              <div className="col-md-6 p-4">
                <form className="p-4 bg-white shadow rounded">
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" required />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Subject" required />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-danger w-100 py-2">Send Message</button>
                </form>
              </div>
            </div>
          </section>


      

  </>
  }}