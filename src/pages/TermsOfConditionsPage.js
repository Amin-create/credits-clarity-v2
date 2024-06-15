import React from 'react'
import { topContentTermsOfConditions } from '../data';
import { Footer, Header, TopContent } from '../components';

function TermsOfConditionsPage() {
    return (
        <main className="bg-main">
            <Header />
            <TopContent data={topContentTermsOfConditions} />
            <Footer />
        </main>
    )
}

export default TermsOfConditionsPage