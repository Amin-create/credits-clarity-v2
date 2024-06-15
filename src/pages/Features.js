import React from 'react'
import { Footer, Header, ThreeCards, TopContent, HorizontalContents, Features, Home } from '../components';
import { appFeaturesDescriptions, ctaDataHome, horizontalContents, threeCardsContent, topContent } from '../data';


function FeaturesPage() {
    return (
        <main className="bg-main">
            <Header />
            <TopContent data={topContent} />
            <ThreeCards data={threeCardsContent} />
            <HorizontalContents data={horizontalContents} />
            <Features.AppFeaturesDescription data={appFeaturesDescriptions} />
            <Home.Cta data={ctaDataHome} />
            <Footer />
        </main>
    )
}

export default FeaturesPage