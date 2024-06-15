import React from 'react';
import { Footer, Header, ForgotPassword } from '../components';


function ForgotPasswordPage() {
    return (
        <main className="bg-login">
            <Header />
            <ForgotPassword.ForgotPasswordForm />
            <Footer />
        </main>
    )
}

export default ForgotPasswordPage