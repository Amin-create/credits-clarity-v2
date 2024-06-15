import React from 'react'
import { Home, Footer, Header } from '../components';
import { contentImageDataHome, ctaDataHome, faqDataHome, heroDataHome, textArrayHome } from '../data';

function HomePage() {
    return (
        <main className="bg-main">
            <Header />
            <Home.Hero data={heroDataHome} />
            <Home.Help data={textArrayHome} />
            <Home.ContentImage data={contentImageDataHome} />
            <Home.Faq data={faqDataHome} />
            <Home.Cta data={ctaDataHome} />
            <Footer />
        </main>
    )
}

export default HomePage