

import './ExpertiseComponent.css';
import recruitmentImage from './images/dinielia_pillay_recruitment.png';
import relationshipImage from './images/dinielia_pillay_brand.png';
import employeeEngagement from './images/dinielia_pillay_employee_engagement.png';
import trainingImage from './images/dinielia_pillay_training.png';
import processImage from './images/dinielia_pillay_process.png';
import automationImage from './images/dinielia_pillay_automation.png';
import payrollImage from './images/diniellia_pillay_payment.png';
import contractImage from './images/dinielia_pillay_contract.png';
import speakerImage from './images/diniellia_pillay_speaker.png';
import socialImage from './images/dinielia_pillay_social.png';
import graphicImage from './images/dinielia_pillay_graphic_design.png';
import programImage from './images/diniellia_pillay_graduate.png';
export default function ExpertiseComponent(){
    return(
        <div className="container-fluid expertise-component-parent-wrapper py-4 gx-0 gx-sm-0">
            <div className="container expertise-component-child-wrapper py-3">
                <div className="expertise-component-content-wrapper">
                    <h2 className="expertise-component-main-heading text-center text-sm-center text-md-start">
                        Expertise and Skills
                    </h2>
                    <div className="row gx-2 gy-3 mt-4 justify-content-center justify-content-sm-center justify-content-md-start">
                        
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center text-sm-center text-md-start">
                            <div className="card shadow-sm rounded p-3 border-1 h-100 d-flex ">
                                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center mx-auto custom-mx-md-not-auto" 
                                    style={{ backgroundColor: "white", width: "50px", height: "50px" }}>
                                    <img src={recruitmentImage} 
                                        className="img img-fluid mx-auto" 
                                        alt="Dinielia Pillay | HR Generalist" 
                                        style={{ width: "50px", height: "50px" }} />
                                </div>
                                <div className="mt-2">
                                    <h5 className="fw-bold mt-2 skill-heading">Talent Acquisition & Recruitment</h5>
                                </div>
                                <p>
                                    Successfully sourcing, attracting, and hiring top talent for technical and graduate roles.
                                </p>
                            </div>
                        </div>


                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center text-sm-center text-md-start">
                            <div className="card shadow-sm rounded p-3 border-1 h-100 d-flex justify-content-center justify-content-sm-center justify-content-md-start">
                                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center mx-auto custom-mx-md-not-auto " style={{ backgroundColor: "white", width: "50px", height: "50px" }}>
                                    <img src={relationshipImage} alt="Dinielia Pillay | HR Generalist" style={{ width: "50px", height: "50px" }} />
                                </div>
                                <div className="mt-2">
                                    <h5 className="fw-bold mt-2 skill-heading">Brand & Relationship Building</h5>
                                </div>
                                <p>
                                    Building relationships with universities to ensure top talent is recruited and appointed in graduate roles.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center text-sm-center text-md-start">
                            <div className="card shadow-sm rounded p-3 border-1 h-100 d-flex justify-content-center">
                                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center mx-auto custom-mx-md-not-auto" style={{ backgroundColor: "white", width: "50px", height: "50px" }}>
                                    <img src={employeeEngagement} alt="Dinielia Pillay | HR Generalist" style={{ width: "50px", height: "50px" }} />
                                </div>
                                <div className="mt-2">
                                    <h5 className="fw-bold mt-2 skill-heading">Employee Engagement</h5>
                                </div>
                                <p>
                                    Successfully sourcing, attracting, and hiring top talent for technical and graduate roles.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center text-sm-center text-md-start">
                            <div className="card shadow-sm rounded p-3 border-1 h-100 d-flex justify-content-center">
                                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center mx-auto custom-mx-md-not-auto" style={{ backgroundColor: "white", width: "50px", height: "50px" }}>
                                    <img src={trainingImage} alt="Dinielia Pillay | HR Generalist" style={{ width: "50px", height: "50px" }} />
                                </div>
                                <div className="mt-2">
                                    <h5 className="fw-bold mt-2 skill-heading">Training & Development</h5>
                                </div>
                                <p>
                                    Developing employee training programmes such as; Mentorship workshops and training for hiring managers on how to effectively conduct interviews.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center text-sm-center text-md-start">
                            <div className="card shadow-sm rounded p-3 border-1 h-100 d-flex justify-content-center">
                                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center mx-auto custom-mx-md-not-auto" style={{ backgroundColor: "white", width: "50px", height: "50px" }}>
                                    <img src={processImage} alt="Dinielia Pillay | HR Generalist" style={{ width: "50px", height: "50px" }} />
                                </div>
                                <div className="mt-2">
                                    <h5 className="fw-bold mt-2 skill-heading">Process Development & Implementation</h5>
                                </div>
                                <p>
                                    Designing efficient recruitment processes, induction and onboarding programmes as well as offboarding.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center text-sm-center text-md-start">
                            <div className="card shadow-sm rounded p-3 border-1 h-100 d-flex justify-content-center">
                                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center mx-auto custom-mx-md-not-auto" style={{ backgroundColor: "white", width: "50px", height: "50px" }}>
                                    <img src={automationImage} alt="Dinielia Pillay | HR Generalist" style={{ width: "50px", height: "50px" }} />
                                </div>
                                <div className="mt-2">
                                    <h5 className="fw-bold mt-2 skill-heading">Process Automation</h5>
                                </div>
                                <p>
                                    Automating repetitive HR Tasks using Microsoft Power Automate
                                </p>
                            </div>
                        </div>




                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center text-sm-center text-md-start">
                            <div className="card shadow-sm rounded p-3 border-1 h-100 d-flex justify-content-cente">
                                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center mx-auto custom-mx-md-not-auto" style={{ backgroundColor: "white", width: "50px", height: "50px" }}>
                                    <img src={payrollImage} alt="Dinielia Pillay | HR Generalist" style={{ width: "50px", height: "50px" }} />
                                </div>
                                <div className=" mt-2">
                                    <h5 className="fw-bold mt-2 skill-heading">Payroll & Benefits Administration</h5>
                                </div>
                                <p>
                                    Managing month-to-month payroll and benefits changes.
                                </p>
                            </div>
                        </div>



                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center text-sm-center text-md-start">
                            <div className="card shadow-sm rounded p-3 border-1 h-100 d-flex justify-content-cente">
                                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center mx-auto custom-mx-md-not-auto" style={{ backgroundColor: "white", width: "50px", height: "50px" }}>
                                    <img src={contractImage} alt="Dinielia Pillay | HR Generalist" style={{ width: "50px", height: "50px" }} />
                                </div>
                                <div className=" mt-2">
                                    <h5 className="fw-bold mt-2 skill-heading">Contract Management</h5>
                                </div>
                                <p>
                                    Drafting and sharing employment contracts in a timely manner
                                </p>
                            </div>
                        </div>




                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center text-sm-center text-md-start">
                            <div className="card shadow-sm rounded p-3 border-1 h-100 d-flex justify-content-cente">
                                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center mx-auto custom-mx-md-not-auto" style={{ backgroundColor: "white", width: "50px", height: "50px" }}>
                                    <img src={speakerImage} alt="Dinielia Pillay | HR Generalist " style={{ width: "50px", height: "50px" }} />
                                </div>
                                <div className=" mt-2">
                                    <h5 className="fw-bold mt-2 skill-heading">Dynamic Speaker</h5>
                                </div>
                                <p>
                                    A speaker at job fairs, providing insightful information to students who are embarking on their career in tech.
                                </p>
                            </div>
                        </div>


                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center text-sm-center text-md-start">
                            <div className="card shadow-sm rounded p-3 border-1 h-100 d-flex justify-content-cente">
                                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center mx-auto custom-mx-md-not-auto" style={{ backgroundColor: "white", width: "50px", height: "50px" }}>
                                    <img src={socialImage} alt="Dinielia Pillay | HR Generalist " style={{ width: "50px", height: "50px" }} />
                                </div>
                                <div className=" mt-2">
                                    <h5 className="fw-bold mt-2 skill-heading">Social Media Management & Content Creation</h5>
                                </div>
                                <p>
                                    Creating social media calendars and curating posts for business's various social media platforms, including TikTok.
                                </p>
                            </div>
                        </div>


                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center text-sm-center text-md-start">
                            <div className="card shadow-sm rounded p-3 border-1 h-100 d-flex justify-content-center">
                                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center mx-auto custom-mx-md-not-auto" style={{ backgroundColor: "white", width: "50px", height: "50px" }}>
                                    <img src={graphicImage} alt="Dinielia Pillay | HR Generalist " style={{ width: "50px", height: "50px" }} />
                                </div>
                                <div className=" mt-2">
                                    <h5 className="fw-bold mt-2 skill-heading">Graphic Design</h5>
                                </div>
                                <p>
                                    Making use of various graphic design software to enhance social media posts and internal campaigns.
                                </p>
                            </div>
                        </div>


                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 text-center text-sm-center text-md-start">
                            <div className="card shadow-sm rounded p-3 border-1 h-100 d-flex justify-content-center">
                                <div className="icon-container rounded-circle d-flex align-items-center justify-content-center mx-auto custom-mx-md-not-auto" style={{ backgroundColor: "white", width: "50px", height: "50px" }}>
                                    <img src={programImage} alt="Dinielia Pillay | HR Generalist " style={{ width: "50px", height: "50px" }} />
                                </div>
                                <div className=" mt-2">
                                    <h5 className="fw-bold mt-2 skill-heading">Programme Development</h5>
                                </div>
                                <p>
                                    Developing, implementing and managing various graduate programmes such as a graduate tester programme & a sales graduate programme, to name a few.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}