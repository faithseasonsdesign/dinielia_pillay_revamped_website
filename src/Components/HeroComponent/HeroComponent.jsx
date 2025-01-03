

import './HeroComponent.css';
import heroSectionImage from './images/dinielia_pillay.png';

export default function HeroComponent() {
    return (
        <div className="container-fluid hero-section-component-parent-wrapper py-5">
            <div className="container hero-section-component-child-wrapper py-1">
                <div className="hero-section-content-wrapper">
                    <div className="row g-4 align-items-center">
                        {/* Left Content */}
                        <div className="col-12.co-sm-12 col-md-7 text-center text-sm-center text-md-start">
                            <h6 className="hero-section-sub-heading">
                                Hi I am Dinielia Pillay
                            </h6>
                            <h1 className="hero-section-main-heading mt-3 mt-sm-3 mt-md-4">
                                HR GENERALIST <b>&#64;</b> BOXFUSION
                            </h1>
                            <p className="hero-section-main-description mt-3 mt-sm-3 mt-md-4">
                                I am Certified HR professional with expertise in workplace culture, employee experience, and aligning HR initiatives with organizational goals.
                            </p>
                            <div className="hero-section-button-wrapper mt-3 mt-sm-3 mt-md-4">
                                <button className="hero-section-contact-btn btn py-2 px-4 text-white">
                                    Get In Touch
                                </button>
                            </div>
                        </div>
                        
                        {/* Right Content */}
                        <div className="col-12 col-sm-12 col-md-5 ">
                            <img
                                src={heroSectionImage}
                                alt="Dinielia Pillay"
                                className="d-flex tex-end img-fluid mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
