import Project from "./ProjectObject";
import React from 'react';
import AsideNavBar from "./AsideNavBar";
import AIoTReport from "../assets/projectAssets/Smart_Water_Auditing_Paper.pdf"
const waterAuditImages = Object.values(import.meta.glob('../assets/projectAssets/smart-water-audit-images/*', { eager: true, query: '?url', import: 'default' }));
const hippityHoppityImages= Object.values(import.meta.glob('../assets/projectAssets/hippity-hoppity-gameplay/*', { eager: true, query: '?url', import: 'default' }));

export default function OtherProjects() {  
    return (
        <AsideNavBar 
            title={"Other Projects"}
            id={"section-other-projects"}
        >
            <Project
                images={hippityHoppityImages}
                title="Hippity Hoppity"
                description="Hippity Hoppity is a platformer game made using Unity."
                source="https://github.com/Zukurai-Kushal/Hippity-Hoppity"
                otherLinks={[["https://zukku.itch.io/hippityhoppity","Play"]]}
                date="April 2024"
                className={["image-contain"]}
            />

            <Project
                images={waterAuditImages}
                title="Smart Water Auditing (AIoT)"
                description="An AIoT system for smart water auditing. The system logs water use date for a residential household, then uses the data to train a general SVM model capable of classifying water flow events based on the household's water meter readings alone."
                source="https://github.com/Zukurai-Kushal/Water_Audit_Project_Full"
                otherLinks={[[AIoTReport,"Technical Paper"]]}
                date="May 2023"
            />

            <Project
                title={"Java Puzzle"}
                description={"A simple java program that turns an image into a puzzle game."}
                // description={"This is a simple Java program to turn any image into a puzzle game. The program converts an image into a 10x10 puzzle, it then scrambles the pieces randomly. You can then drag and drop the pieces around, a piece will lock into place once it is placed in the correct position. You win the game once all the pieces are in their original position."}
                source={"https://github.com/Zukurai-Kushal/Java-Puzzle"}
                date="May 2019"
            />

        </AsideNavBar>
    )
}