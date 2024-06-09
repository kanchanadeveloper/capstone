
import { Link } from "react-router-dom"
import team1 from "../../Assets/img/team-1.jpg"
import team2 from "../../Assets/img/team-2.jpg"
import team3 from "../../Assets/img/team-3.jpg"
import team4 from "../../Assets/img/team-4.jpg"

export function Team()
{
    return (
        <>
        <div className="container-xxl position-relative p-0">

            <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container text-center my-5 pt-5 pb-4">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Our Team</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center text-uppercase">
                        <li className="breadcrumb-item"><Link className="link" to="/">Home</Link></li>
                        <li className="breadcrumb-item"><a className="custom-button" href="/" >Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Team</li>
                        </ol>
                    </nav>
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
                                <img className="img-fluid" src={team1} alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={team2} alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={team3} alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={team2} alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={team2} alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={team3} alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={team4} alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="rounded-circle overflow-hidden m-4">
                                <img className="img-fluid" src={team1} alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</>
    )
}