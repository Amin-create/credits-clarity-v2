import React from 'react'
import { Footer, Header, About, Home, TopContent } from '../components';
import team from "../assets/images/team/team3.jpg";
import { contentAbout, ctaDataHome, ourMissionDataAbout, topContentAbout } from '../data';


function AboutPage() {
    return (
        <main className="bg-main">
            <Header />
            <TopContent data={topContentAbout} />
            <About.OurMission data={ourMissionDataAbout} />
            <About.BigImage img={team} />
            <About.TextContent data={contentAbout} />
            <Home.Cta data={ctaDataHome} />
            <Footer />
        </main>
    )
}

export default AboutPage