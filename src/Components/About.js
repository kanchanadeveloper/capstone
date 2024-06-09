import React from 'react'
import About1 from "../Assets/img/about-1.jpg"
import About2 from "../Assets/img/about-2.jpg"
import About3 from "../Assets/img/about-3.jpg"
import About4 from "../Assets/img/about-4.jpg"

import team1 from "../Assets/img/team-1.jpg"
import team2 from "../Assets/img/team-2.jpg"
import team3 from "../Assets/img/team-3.jpg"
import team4 from "../Assets/img/team-4.jpg"
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <>

        <div className="container-xxl position-relative p-0">
       

            <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                            <li className="breadcrumb-item"><Link className="link" to="/">Home</Link></li>
                            <li className="breadcrumb-item"><a className="custom-button"  href="/">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={About1} alt="About 1" />
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={About2}   alt="About 2"  style={{marginTtop: "25%"}} />
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={About3}   alt="About 3"  />
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={About4}  alt="About 4"  />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                        <h1 className="mb-4">Welcome to <i className="fa fa-utensils text-primary me-2"></i>Restoran</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="row g-4 mb-4">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Years of</p>
                                        <h6 className="text-uppercase mb-0">Experience</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Popular</p>
                                        <h6 className="text-uppercase mb-0">Master Chefs</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary py-3 px-5 mt-2" >Read More</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl pt-5 pb-3">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                    <h1 className="mb-5">Our Master Chefs</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={team1} alt="alter" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <button className="btn btn-square btn-primary mx-1" ><i className="fab fa-facebook-f"></i></button>
                                <button className="btn btn-square btn-primary mx-1" ><i className="fab fa-twitter"></i></button>
                                <button className="btn btn-square btn-primary mx-1" ><i className="fab fa-instagram"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={team2} alt="alter" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <button className="btn btn-square btn-primary mx-1" ><i className="fab fa-facebook-f"></i></button>
                                <button className="btn btn-square btn-primary mx-1" ><i className="fab fa-twitter"></i></button>
                                <button className="btn btn-square btn-primary mx-1" ><i className="fab fa-instagram"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid"src={team3} alt="alter" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <button className="btn btn-square btn-primary mx-1" ><i className="fab fa-facebook-f"></i></button>
                                <button className="btn btn-square btn-primary mx-1" ><i className="fab fa-twitter"></i></button>
                                <button className="btn btn-square btn-primary mx-1" ><i className="fab fa-instagram"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={team4} alt="alter" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <button className="btn btn-square btn-primary mx-1" ><i className="fab fa-facebook-f"></i></button>
                                <button className="btn btn-square btn-primary mx-1" ><i className="fab fa-twitter"></i></button>
                                <button className="btn btn-square btn-primary mx-1" ><i className="fab fa-instagram"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}