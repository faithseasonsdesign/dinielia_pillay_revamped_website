import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import logoImg from './images/dinielia_pillary.svg';

import ScrollToTop from './ScrollToTop';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ExperiencePage from './Pages/ExperiencePage/ExperiencePage';
import EducationPage from './Pages/EducationPage/EducationPage';


export default function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div id='menuWrapper' className={`navigation_parent_wrapper py-4 px-0 px-sm-0 ${menuVisible ? 'menu-open' : ''}`}>
        <div className="container navigation_child_wrapper py-2 px-5 px-sm-5 px-md-3 d-flex align-items-center ">
          <div className="logo_wrapper">
            <Link className='nav_link home_link link' to='/' onClick={closeMenu}>
              {/* Add your logo here */}
              <img src={logoImg} alt="Dinielia_Pillay_Img" style={{height:50}} className="img-fluid" />
            </Link>
          </div>
          <div className={`nav-list-items-wrapper px-4 px-sm-4 p-md-0 container d-md-flex align-items-center justify-content-center justify-content-sm-center justify-content-md-end ${menuVisible ? 'show' : 'hide'}`}>
            <li className="nav_link_item ">
              <Link className='text-dark link active' to='/' onClick={closeMenu}><span>Home</span></Link>
            </li>
            <li className="nav_link_item">
              <Link className='text-dark active link' to='/about' onClick={closeMenu}><span>About</span></Link>
            </li>
            <li className="nav_link_item">
              <Link className='text-dark active link' to='/experience' onClick={closeMenu}><span>Experience</span></Link>
            </li>
            <li className="nav_link_item">
              <Link className='text-dark active link' to='/education' onClick={closeMenu}><span>Education</span></Link>
            </li>
            <li className="nav_link_item contact_link py-2 text-white">
              <Link className='text-white active link' to='/contact' onClick={closeMenu}><span>Contact</span></Link>
            </li>
          </div>
          <div id='menuBtn' onClick={toggleMenu} className="small_device_menu_wrapper container p-0 d-flex d-sm-flex d-md-none justify-content-end">
            <li className="nav_link_item link text-end">
              <i className="fa fa-2x fa-bars text-dark text-end"></i>
            </li>
          </div>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/experience' element={<ExperiencePage/>} />
        <Route path='/education' element={<EducationPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
