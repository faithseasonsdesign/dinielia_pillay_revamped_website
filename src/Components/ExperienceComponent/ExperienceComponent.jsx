import React from 'react';
import './ExperienceComponent.css';


import boxfusiongLogo from './images/boxfusion_logo.jpeg';

export default function ExperienceComponent() {
    return (
        <div className="container-fluid experience-component-parent-wrapper py-4 px-0 p-sm-0 py-4">
            <div className="container experience-component-child-wrapper py-4 px-2 p-sm-2 d-flex justify-content-center justify-content-sm-center justify-content-md-start">
                <div className="container-fluid row gx-2 gy-2 gy-sm-2 gy-md-4 px-2 d-flex justify-content-center justify-content-sm-center justify-content-md-start py-md-5">
                    <div className="col-12 col-sm-12 col-md-12">
                        <h1 className='experience-component-heading text-center text-sm-center text-md-start'>
                            Experience
                        </h1>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="card">
                            <div className="card-body">

                            <div className="d-flex flex-column flex-sm-column flex-md-row  justify-content-center justify-content-sm-center justify-content-md-start align-items-center">
                                {/* Icon Image */}
                                <div
                                className="icon-container rounded-circle d-flex align-items-center justify-content-center"
                                style={{ backgroundColor: "white", width: "50px", height: "50px" }}
                                >
                                <img
                                    src={boxfusiongLogo}
                                    alt="University Icon"
                                    style={{ width: "50px", height: "50px" }}
                                />
                                </div>
                                <div className="ms-3">
                                <h5 className="mb-0 fw-bold education-heading text-center text-sm-center text-md-start mt-3 mt-sm-3 mt-md-0">Human Resources Generalist</h5>
                                <p className="text-muted small mb-0 education-description text-center text-sm-center text-md-start mt-1 mt-sm-1 mt-md-0">Boxfusion (Centurion, Gauteng, SA)</p>
                                <p className="text-muted small mb-0 education-description text-center text-sm-center text-md-start mt-0 mt-sm-0 mt-md-0"><strong>Full-time</strong> | Apr 2024 - Present (9 months)</p>
                                </div>
                            </div>
                            <p className='mt-3 text-center text-sm-center text-md-start experience-text'>Talent Management: Enhanced recruitment and onboarding practices, successfully hiring a VP of Engineering and other senior roles. Developed career paths and conducted promotion processes for internal staff.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        {/* Timeline item 2 */}
                        <div className="card">
                            <div className="card-body">

                            <div className="d-flex flex-column flex-sm-column flex-md-row  justify-content-center justify-content-sm-center justify-content-md-start align-items-center">
                                {/* Icon Image */}
                                <div
                                className="icon-container rounded-circle d-flex align-items-center justify-content-center"
                                style={{ backgroundColor: "white", width: "50px", height: "50px" }}
                                >
                                <img
                                    src={boxfusiongLogo}
                                    alt="University Icon"
                                    style={{ width: "50px", height: "50px" }}
                                />
                                </div>
                                <div className="ms-3">
                                <h5 className="mb-0 fw-bold education-heading text-center text-sm-center text-md-start mt-3 mt-sm-3 mt-md-0">Human Resources Graduate</h5>
                                <p className="text-muted small mb-0 education-description text-center text-sm-center text-md-start mt-1 mt-sm-1 mt-md-0">Boxfusion (Centurion, Gauteng, SA)</p>
                                <p className="text-muted small mb-0 education-description text-center text-sm-center text-md-start mt-0 mt-sm-0 mt-md-0"><strong>Contract</strong> | Apr 2023 - Mar 2024 (1 year)</p>
                                </div>
                            </div>
                            <p className='mt-3 text-center text-sm-center text-md-start experience-text'>Talent Acquisition & Recruitment: Crafting and refining job descriptions to streamline recruitment efforts. Leading end-to-end recruitment processes. Specialization in technical and graduate recruitment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
