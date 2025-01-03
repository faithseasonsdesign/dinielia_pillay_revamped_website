

import AboutComponent from '../../Components/AboutComponent/AboutComponent';
import EducationComponent from '../../Components/EducationComponent/EducationComponent';
import ExperienceComponent from '../../Components/ExperienceComponent/ExperienceComponent';
import ExpertiseComponent from '../../Components/ExpertiseComponent/ExpertiseComponent';
import HeroComponent from '../../Components/HeroComponent/HeroComponent';
import RadioComponent from '../../Components/RadioComponent/RadioComponent';
import TestimonialsSection from '../../Components/TestimonialsSection/TestimonialsSection';
import ToolsComponent from '../../Components/ToolsComponent/ToolsComponent';
import './HomePage.css';

export default function HomePage(){
    return(
        <>
            <HeroComponent/>
            <AboutComponent/>
            <ExperienceComponent/>
            <EducationComponent/>
            <ExpertiseComponent/>
            <ToolsComponent/>
            <TestimonialsSection/>
            <RadioComponent/>
            
        </>
    );
}