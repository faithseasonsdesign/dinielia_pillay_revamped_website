import React, { useState } from 'react';
import './ToolsComponent.css';

import imageOne from './images/word.png';
import imageTwo from './images/excel.png';
import imageThree from './images/powerpoint.png';
import imageFour from './images/business.png';
import imageFive from './images/outlook.png';
import imageSix from './images/form.png';

import imageSeven from './images/docs.png';
import imageEight from './images/sheets.png';
import imageNine from './images/gmail.png';
import imageTen from './images/slides.png';

import canva from './images/palette.png';
import adobe from './images/adobe.png';
import capcut from './images/capcut.svg';

import notion from './images/notion.svg';
import clickup from './images/clickup.svg';

import pepipfy from './images/pipefy.svg';
import airtable from './images/airtable.svg';
import mantanal from './images/download (4).png';
import shl from './images/shl-logo-500x500-v2.png';

export default function ToolsComponent() {
    const [activeTab, setActiveTab] = useState('microsoft-google');

    const renderContent = () => {
        switch (activeTab) {
            case 'microsoft-google':
                return (
                    <div className="tools-component-icons">
                        <div className='mt-5 d-flex tools-component-icons-child gx-4'>
                            <Tool icon={imageOne} label="MS Word" />
                            <Tool icon={imageTwo} label="MS Excel" />
                            <Tool icon={imageThree} label="MS PowerPoint" />
                            <Tool icon={imageFour} label="MS Teams" />
                            <Tool icon={imageFive} label="MS Outlook" />
                            <Tool icon={imageSix} label="MS Forms" />
                        </div>
                        <div className="mt-5 d-flex tools-component-icons-child gx-4">
                            <Tool icon={imageSeven} label="Google Docs" />
                            <Tool icon={imageEight} label="Google Sheets" />
                            <Tool icon={imageNine} label="Google Gmail" />
                            <Tool icon={imageTen} label="Google Slides" />
                        </div>
                    </div>
                );
            case 'graphic-design':
                return (
                    <div className="tools-component-icons">
                        <div className='mt-5 d-flex tools-component-icons-child gx-4'>
                            <Tool icon={canva} label="Canva" />
                            <Tool icon={adobe} label="Adobe Express" />
                            <Tool icon={capcut} label="Capcut" />
                        </div>
                    </div>
                );
            case 'project-management':
                return (
                    <div className="tools-component-icons">
                        <div className='mt-5 d-flex tools-component-icons-child gx-4'>
                            <Tool icon={notion} label="Notion" />
                            <Tool icon={clickup} label="Click Up" />
                         
                        </div>
                    </div>
                );
            case 'other':
                return (
                    <div className="tools-component-icons">
                        <div className='mt-5 d-flex tools-component-icons-child gx-4'>
                            <Tool icon={pepipfy} label="Pipefy (Service Request Builder)" />
                            <Tool icon={airtable} label="Airtable (Database Management)" />
                            <Tool icon={mantanal} label="Manatal (ATS)" />
                            <Tool icon={shl} label="SHL (Skills Assessment Platform)" />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container-fluid tools-component-parent-wrapper  p-0 p-sm-0 py-5 py-sm-5 py-md-5">
            <div className="container tools-component-child-wrapper py-3 p-1 p-sm-1 py-md-4">

                <div className="tools-wrapper-content-wrapper px-2 px-sm-2 px-md-3">
                    <h1 className="tools-component-main-heading text-center text-sm-center text-md-start">
                        Tools & Technologies
                    </h1>
                </div>
                <div className="tools-component-content-wrapper px-md-3">
                    
                    <ul className="nav nav-tabs mt-5">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'microsoft-google' ? 'active' : ''}`}
                                onClick={() => setActiveTab('microsoft-google')}
                            >
                                Microsoft & Google
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'graphic-design' ? 'active' : ''}`}
                                onClick={() => setActiveTab('graphic-design')}
                            >
                                Graphic Design
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'project-management' ? 'active' : ''}`}
                                onClick={() => setActiveTab('project-management')}
                            >
                                Project Management
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === 'other' ? 'active' : ''}`}
                                onClick={() => setActiveTab('other')}
                            >
                                Other
                            </button>
                        </li>
                    </ul>
                    <div className="tool-component-content mt-4">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}

const Tool = ({ icon, label }) => (
    <div className="p-0 d-flex flex-column align-items-center">
        <div>
            <img src={icon} style={{ height: '40px' }} alt={label} className="img-fluid img" />
        </div>
        <label className='mt-2'>{label}</label>
    </div>
);
