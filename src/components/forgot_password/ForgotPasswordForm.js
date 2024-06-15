import React, { useState } from 'react'
import { Core } from '..';

function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const [confirmPasswordError, setConfirmEmailError] = useState("");

    console.log("email", email)
    console.log("password", password)
    console.log("confirmPassword", confirmPassword)
    return (
        <section className='w-full relative'>
            <Core.Container wider>
                <div className="flex justify-center items-center pt-14 md:pt-28 pb-20 md:pb-72">
                    <div className='w-full max-w-[700px] rounded-[30px] bg-white px-6 md:px-24 pt-6 sm:pt-8 md:pt-14 pb-6 md:pb-12'>
                        <form>
                            <h1 className='text-dark-blue text-[28px] sm:text-[40px] md:text-[52px] leading-[35px] sm:leading-[50px] md:leading-[70px] tracking-[-1px] font-bold text-center mx-auto mb-[10px] sm:mb-[20px] md:mb-[60px]'>
                                Forgot Password
                            </h1>
                            <div className="grid grid-cols-1 gap-x-4 md:gap-x-16 gap-y-4 md:gap-y-5 sm:grid-cols-6 pb-6">
                                <Core.InputLabel
                                    setState={setEmail}
                                    setErrorMessage={setEmailError}
                                    errorMessage={emailError}
                                    name="email"
                                    auth
                                />
                                <Core.InputLabel
                                    setState={setPassword}
                                    setErrorMessage={setNewPasswordError}
                                    errorMessage={newPasswordError}
                                    name="newPassword"
                                    auth
                                />
                                <Core.InputLabel
                                    setState={setConfirmPassword}
                                    setErrorMessage={setConfirmEmailError}
                                    errorMessage={confirmPasswordError}
                                    name="confirmPassword"
                                    auth
                                />
                            </div>
                            <Core.Button greenIconicLg wider to="#">Reset Password</Core.Button>
                        </form>
                    </div>
                </div>
            </Core.Container>
        </section>
    )
}

export default ForgotPasswordForm