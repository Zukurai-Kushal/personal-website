import Project from "./ProjectObject";
import React from 'react';
const resumeAppImages = Object.values(import.meta.glob('../assets/projectAssets/resume-screenshots/*',{ eager: true, query: '?url', import: 'default' }));
const weatherAppImages = Object.values(import.meta.glob('../assets/projectAssets/weather-screenshots/*',{ eager: true, query: '?url', import: 'default' }));
const toDoAppImages = Object.values(import.meta.glob('../assets/projectAssets/to-do-screenshots/*', { eager: true, query: '?url', import: 'default' }));
const gameOfLifeAppImages = Object.values(import.meta.glob('../assets/projectAssets/game-of-life-screenshots/*',{ eager: true, query: '?url', import: 'default' }));
const superTicTacToeAppImages = Object.values(import.meta.glob('../assets/projectAssets/super-tic-tac-toe-screenshots/*',{ eager: true, query: '?url', import: 'default' }));
const restaurantAppImages = Object.values(import.meta.glob('../assets/projectAssets/restaurant-screenshots/*', { eager: true, query: '?url', import: 'default' }));
const calculatorAppImages = Object.values(import.meta.glob('../assets/projectAssets/calculator-screenshots/*', { eager: true, query: '?url', import: 'default' }));


export default function WebDevProjects() {  
    return <section id="section-web-dev">
        Web Development Projects
        <Project
            images={resumeAppImages}
            title="My Resume Writer"
            description="A web application that helps you write, modify and customize your resume for that perfect job application.
             You can store multiple versions of your resume and easily customize each one by including or excluding specific information with ease. 
             I designed the app with reusability in mind, creating a tool that stays with you and grows with you."
            live="https://myresumewriter.netlify.app/"
            source="https://github.com/Zukurai-Kushal/cv-app"
            date="March 2025"
        />

        <Project
            images={weatherAppImages}
            title="My Weather"
            description="A web application designed to provide real-time weather forecasts for your location or any other city around the globe, you can view hourly weather updates and forecasts for up to 7 days. The app also features a collection of live wallpapers that best illustrates the current weather condition."
            live="https://zukurai-kushal.github.io/weather-app/"
            source="https://github.com/Zukurai-Kushal/weather-app"
            date="December 2024"
        />

        <Project
            images={gameOfLifeAppImages}
            title="Conway's Game of Life"
            description="A web application to run Conway's Game of Life, a cellular automaton developed by the British mathematician John Horton Conway in 1970."
            live="https://zukurai-kushal.github.io/game-of-life/"
            source="https://github.com/Zukurai-Kushal/game-of-life"
            date="December 2024"
        />

        <Project
            images={toDoAppImages}
            title="My Tasks"
            description="This web application helps you manage and schedule your tasks with a handwritten notebook feel. In my day-to-day life, I love using my notebook to keep track of my tasks, so I aimed to recreate that personal and cozy aesthetic in this To-Do App."
            live="https://zukurai-kushal.github.io/to-do/"
            source="https://github.com/Zukurai-Kushal/to-do"
            date="October 2024"
        />

        <Project
            images={restaurantAppImages}
            title="The Hobbit Hole"
            description="A fictional fantasy restaurant website set in Middle-Earth. Here you will find my appreciation for the love of food Hobbits have within Tolkien's universe. So get ready to fill your belly within the cozy homestead of the shire, but be sure to make a reservation, for parties of dwarves have been known to fill the restaurant without announcement!"
            live="https://zukurai-kushal.github.io/restaurant-page/"
            source="https://github.com/Zukurai-Kushal/restaurant-page"
            date="August 2024"
        />

        <Project
            images={superTicTacToeAppImages}
            title="Super Tic Tac Toe"
            description="This web application lets you play an exciting variation of the classic tic-tac-toe game, featuring a board composed of nine smaller tic-tac-toe boards arranged in a 3 × 3 grid. Players take turns on the smaller boards, aiming to win on the larger board. This version offers a more complex strategic experience compared to traditional tic-tac-toe."
            live="https://zukurai-kushal.github.io/super-tic-tac-toe/"
            source="https://github.com/Zukurai-Kushal/super-tic-tac-toe"
            date="July 2024"
        />

        <Project
            images={calculatorAppImages}
            title="A Calculator Doodle"
            description="This web application features a playful calculator designed to evoke the fun doodles we created as kids. It allows users to perform basic arithmetic operations with a stylish interface."
            live="https://zukurai-kushal.github.io/calculator/"
            source="https://github.com/Zukurai-Kushal/calculator"
            date="June 2024"
        />

        
    </section>
}