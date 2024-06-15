import React from 'react'
import { Footer, Header, Login } from '../../components';



function LoginPage() {
    return (
        <main className="bg-login">
            <Header />
            <Login.LoginForm />
            <Footer />
        </main>
    )
}

export default LoginPage