

import { Link } from 'react-router-dom';
import './RadioComponent.css';

import imageOne from './images/screenshot-2024-10-05-165823-1078x1076.png';

export default function RadioComponent(){
    return(
        <div className="container-fluid radio-component-parent-wrapper py-4">
            <div className="container radio-component-child-wrapper py-3">
                <div className="radio-component-content-wrapper">
                    <div className="row gy-4 radio-component-row d-flex align-items-center">
                        <div className='col-12 col-sm-12 col-md-6 col-xl-6'>
                            <h2 className="radio-component-main-heading text-center text-sm-center text-md-start">
                                Radio Interview
                            </h2>
                            <p className="radio-component-text mt-4 text-center text-sm-center text-md-start">
                                Check out my public speaking skills in action. I had the opportunity of representing my employer on TUKS FM.
                            </p>
                            <div className="radio-component-btn-wrapper mt-4 text-center text-sm-center text-md-start">
                                <button className="btn radio-btn btn-md text-white px-5 py-3 mt-2" style={{backgroundColor:'orange'}}>
                                    <Link className='text-white' style={{textDecoration:'none'}} to="https://www.dropbox.com/scl/fi/aiwnue4fga4ic1io85vsr/Radio-Interview.mp4?rlkey=ry8mkl6srvgaf75n5wcbiae2d&e=1&st=y9caxxjk&dl=0">
                                        WATCH VIDEO &nbsp;&nbsp; <i className="fa fa-video"></i>
                                    </Link>
                                    
                                </button>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lx-6">
                            <img src={imageOne} alt="" className="img-fluid d-flex" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}