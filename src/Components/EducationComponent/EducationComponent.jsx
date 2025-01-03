

import './EducationComponent.css';
import ujImg from './images/university_of_johannesburg_logo (1) 3 (1).png';
import uctImg from './images/uct.png';
import unisaImg from './images/unisa_logo 2.png';
export default function EducationComponent(){
    return(
        <div className="container-fluid education-component-parent-wrapper py-1 py-sm-1 py-md-4 px-0 px-sm-0">
            <div className="container education-component-child-wrapper py-0 py-sm-0 py-md-4 px-4 px-sm-4">
                <div className="education-component-content-wrapper">
                    <h2 className="education-component-main-heading text-center text-sm-center text-md-start">
                        Education
                    </h2>
                    <div className="row gx-2 gy-3 mt-2 mt-sm-2 mt-md-4">
                        <div className="col-12 col-sm-12 col-md-9">
                            <p className="education-component-card-text text-center text-sm-center text-md-start">
                                I believe my qualifications demonstrate my commitment to continuous professional development and staying abreast of industry best practices. 
                                My approach to HR is rooted in fostering a positive workplace culture, enhancing employee experiences, 
                                and aligning HR initiatives with organizational goals.
                            </p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-5">
                            <div className="card shadow-sm rounded p-3 border-1 h-100 d-flex py-4 py-md-4 py-md-0">
                            <div className="d-flex flex-column flex-sm-column flex-md-row justify-content-center justify-content-sm-center justify-content-md-start align-items-center mb-3 ">
                                {/* Icon Image */}
                                <div
                                    className="icon-container rounded-circle d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: "white", width: "50px", height: "50px" }}
                                >
                                <img
                                    src={ujImg}
                                    alt="University Icon"
                                    style={{ width: "50px", height: "50px" }}
                                />
                                </div>
                                <div className="ms-3">
                                <h5 className="mb-0 fw-bold education-heading text-center text-sm-center text-md-start mt-3 mt-sm-3 mt-md-0">University Of Johannesburg</h5>
                                <p className="text-muted small mb-0 education-description text-center text-sm-center text-md-start mt-2 mt-sm-2 mt-md-0">2020 - 2023</p>
                                </div>
                            </div>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2 about-list text-center text-sm-center text-md-start">
                                <span className="text-primary education-description d-none d-sm-none d-md-inline me-2 education-description">&#8226;</span>Undergraduate Degree
                                in Psychology
                                </li>
                                <li className="mb-2 about-list text-center text-sm-center text-md-start about-li">
                                <span className="text-success education-description d-none d-sm-none d-md-inline me-2 education-description">&#8226;</span>Certification In
                                Artificial Intelligence
                                </li>
                                <li className='text-center about-list text-sm-center text-md-start'>
                                <span className="text-warning education-description d-none d-sm-none d-md-inline me-2 education-description">&#8226;</span>Certification In
                                Financial Literacy
                                </li>
                            </ul>
                            </div>

                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-5 ">
                        <div className="card shadow-sm rounded p-3 border-1 h-100 d-flex">
                            <div className="d-flex flex-column flex-sm-column flex-md-row  justify-content-center justify-content-sm-center justify-content-md-start align-items-center mb-3">
                                {/* Icon Image */}
                                <div
                                className="icon-container rounded-circle d-flex align-items-center justify-content-center"
                                style={{ backgroundColor: "white", width: "50px", height: "50px" }}
                                >
                                <img
                                    src={uctImg}
                                    alt="University Icon"
                                    style={{ width: "50px", height: "50px" }}
                                />
                                </div>
                                <div className="ms-3">
                                <h5 className="mb-0 fw-bold education-heading text-center text-sm-center text-md-start mt-3 mt-sm-3 mt-md-0">University Of Cape Town</h5>
                                <p className="text-muted small mb-0 education-description text-center text-sm-center text-md-start mt-2 mt-sm-2 mt-md-0"> 2024</p>
                                </div>
                            </div>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2 text-center text-sm-center text-md-start text-md-start about-list">
                                <span className="text-primary me-2 education-description d-none d-sm-none d-md-inline">&#8226;</span>Certification In Human Resources Management
                                </li>
                              
                            </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-xl-5 ">
                        <div className="card shadow-sm rounded p-3 border-1 h-100 d-flex">
                            <div className="d-flex flex-column flex-sm-column flex-md-row  justify-content-center justify-content-sm-center justify-content-md-start align-items-center">
                                {/* Icon Image */}
                                <div
                                className="icon-container rounded-circle d-flex align-items-center justify-content-center"
                                style={{ backgroundColor: "white", width: "50px", height: "50px" }}
                                >
                                <img
                                    src={unisaImg}
                                    alt="University Icon"
                                    style={{ width: "50px", height: "50px" }}
                                />
                                </div>
                                <div className="ms-3">
                                <h5 className="mb-0 fw-bold education-heading text-center text-sm-center text-md-start mt-3 mt-sm-3 mt-md-0">University Of South Africa</h5>
                                <p className="text-muted small mb-0 education-description text-center text-sm-center text-md-start mt-2 mt-sm-2 mt-md-0">2024 - 2025</p>
                                </div>
                            </div>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2 text-center text-sm-center text-md-start about-list mt-3 mt-sm-3 mt-md-0">
                                <span className="text-primary me-2 education-description education-description d-none d-sm-none d-md-inline">&#8226;</span>Honours in Counselling Psychology
                                </li>
                              
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}