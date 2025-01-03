


import './TestimonialsSection.css';


export default function TestimonialsSection(){
    return(
        <div className="container-fluid testimonials-section-parent-wrapper py-4 gx-0 gx-sm-0">
            <div className="container testimonials-section-child-wrapper py-4">
                <div className="testimonials-section-content-wrapper">
                    <h1 className="testimonials-section-main-heading text-center text-sm-center text-md-start">
                        Testimonials
                    </h1>
                    <div className="row gx-2 gy-3 mt-4 justify-content-center justify-content-sm-center justify-content-md-start">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-center text-sm-center text-md-start">
                            <div className="card shadow-sm rounded p-3 border-1 h-100 d-flex ">
                                <div className="card-body">
                                    <p className='testimonial-text'>
                                    I would like to thank you very much for your generosity and kindness, In a world where both are found lacking, It was
                                    such a great pleasure to interact with you.
                                    </p>
                                    <div className="d-flex flex-column flex-sm-column flex-md-row justify-content-center justify-content-sm-center justify-content-md-start align-items-center mb-3 ">
                                    {/* Icon Image */}
                                    <div
                                        className="icon-container rounded-circle d-flex align-items-center justify-content-center"
                                        style={{ backgroundColor: "white", width: "50px", height: "50px" }}
                                    >
                                    <i className="fa fa-user fa-2x text-dark"></i>
                                    </div>
                                    <div className="ms-3">
                                    <h5 className="mb-0 fw-bold education-heading text-center text-sm-center text-md-start mt-3 mt-sm-3 mt-md-0">Candidate</h5>
                                    <p className="text-muted small mb-0 education-description text-center text-sm-center text-md-start mt-2 mt-sm-2 mt-md-0">Going Through Recruitment Process</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-center text-sm-center text-md-start">
                            <div className="card shadow-sm rounded p-3 border-1 h-100 d-flex ">
                                <div className="card-body">
                                    <p className='testimonial-text'>
                                        Impressive work representing #Boxfusion at the #HyperionDev SA Virtual Tech Jobs Fair! It's enlightening to learn about the opportunities and products at Boxfusion, along with insights into the company's work culture. Thanks for your valuable contributions 
                                    </p>
                                    <div className="d-flex flex-column flex-sm-column flex-md-row justify-content-center justify-content-sm-center justify-content-md-start align-items-center mb-3 ">
                                    {/* Icon Image */}
                                    <div
                                        className="icon-container rounded-circle d-flex align-items-center justify-content-center"
                                        style={{ backgroundColor: "white", width: "50px", height: "50px" }}
                                    >
                                    <i className="fa fa-user fa-2x text-dark"></i>
                                    </div>
                                    <div className="ms-3">
                                    <h5 className="mb-0 fw-bold education-heading text-center text-sm-center text-md-start mt-3 mt-sm-3 mt-md-0">HyperionDev</h5>
                                    <p className="text-muted small mb-0 education-description text-center text-sm-center text-md-start mt-2 mt-sm-2 mt-md-0">Employer Relations Manager</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}