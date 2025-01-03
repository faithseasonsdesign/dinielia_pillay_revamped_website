

import AboutComponent from '../../Components/AboutComponent/AboutComponent';
import AboutComponentTwo from '../../Components/AboutComponentTwo/AboutComponentTwo';
import EducationComponent from '../../Components/EducationComponent/EducationComponent';
import ExperienceComponent from '../../Components/ExperienceComponent/ExperienceComponent';
import ExpertiseComponent from '../../Components/ExpertiseComponent/ExpertiseComponent';
import ToolsComponent from '../../Components/ToolsComponent/ToolsComponent';
import './AboutPage.css';

export default function AboutPage(){
    return(
        <>
            <AboutComponentTwo/>
            <ExperienceComponent/>
            <EducationComponent/>
            <ExpertiseComponent/>
            <ToolsComponent/>
        </>
    )
}