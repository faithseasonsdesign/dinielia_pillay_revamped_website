

import { Link } from 'react-router-dom';
import './AboutComponent.css';

export default function AboutComponent(){
    return(
        <div className="container-fluid about-component-parent-wrapper py-4">
            <div className="container about-component-child-wrapper py-3">
                <div className="about-component-content-wrapper">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-8">
                            <h3 className="about-component-main-heading mt-2 text-center text-sm-center text-md-start">
                                About Dinielia Pillay
                            </h3>
                            <p className="about-component-description mt-4 text-center text-sm-center text-md-start">
                                I am a dedicated and results-driven HR/TA professional with a passion for talent management, graduate recruitment, 
                                graduate programme development and branding strategist. I began my HR career in a start-up environment, 
                                where I had the opportunity to build HR processes from the ground up. With no existing HR structure in place, 
                                I developed and implemented essential systems, including an HR service request portal, requisition procedures, 
                                and recruitment, induction, and onboarding processes.
                            </p>
                            <div className="about-component-btn-wrapper mt-4 d-flex justify-content-center justify-content-sm-center justify-content-md-start">
                                <button className="btn about-component-read-more-btn px-5">
                                    <Link to='/about' className='text-dark' style={{textDecoration:'none'}}>
                                        Read More
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}