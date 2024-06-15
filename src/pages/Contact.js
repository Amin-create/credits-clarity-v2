import React from 'react'
import { Home, Footer, Header, TopContent, Contact } from '../components';
import { ctaDataHome, topContentContact } from '../data';

function ContactPage() {
    return (
        <main className="bg-main">
            <Header />
            <TopContent data={topContentContact} />
            <Contact.ContactForm />
            <Home.Cta data={ctaDataHome} />
            <Footer />
        </main>
    )
}

export default ContactPage