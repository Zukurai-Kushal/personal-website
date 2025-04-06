import Project from "./ProjectObject";
import React from 'react';
import AsideNavBar from "./AsideNavBar";
const resumeAppImages = Object.values(import.meta.glob('../assets/projectAssets/resume-screenshots/*',{ eager: true, query: '?url', import: 'default' }));

export default function OtherProjects() {  
    return (
        <AsideNavBar 
            title={"Other Projects"}
            id={"section-other-projects"}
        >
            <Project
                images={resumeAppImages}
                title="AIoT"
                description="A web application that helps you write, modify and customize your resume.
                You can store multiple versions of your resume and easily customize each one by including or excluding specific information. 
                I designed the app with reusability in mind, to create a tool that stays with you and grows alongside you."
                live="https://myresumewriter.netlify.app/"
                source="https://github.com/Zukurai-Kushal/cv-app"
                date="March 2025"
            />

            <Project
                images={resumeAppImages}
                title="Steam Game"
                description="A web application that helps you write, modify and customize your resume.
                You can store multiple versions of your resume and easily customize each one by including or excluding specific information. 
                I designed the app with reusability in mind, to create a tool that stays with you and grows alongside you."
                live="https://myresumewriter.netlify.app/"
                source="https://github.com/Zukurai-Kushal/cv-app"
                date="March 2025"
            />
        </AsideNavBar>
    )
}