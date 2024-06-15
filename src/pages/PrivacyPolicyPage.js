import React from 'react'
import { Footer, Header, TopContent } from '../components';
import { topContentPrivacyPolicy } from '../data';


function PrivacyPolicyPage() {
    return (
        <main className="bg-main">
            <Header />
            <TopContent data={topContentPrivacyPolicy} />
            <Footer />
        </main>
    )
}

export default PrivacyPolicyPage