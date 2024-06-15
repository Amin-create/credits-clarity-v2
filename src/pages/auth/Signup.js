import React from 'react'
import { Footer, Header, Signup } from '../../components';

function SignUpPage() {
    return (
        <main className="bg-signup">
            <Header />
            <Signup.SignupForm />
            <Footer />
        </main>
    )
}

export default SignUpPage