import React, { useState } from 'react'
import { Core } from '..';
import { NavLink } from 'react-router-dom';

function LoginForm() {
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    console.log("email", email)
    console.log("password", password)

    const isFormValid = () => {
        return (
            !emailError &&
            !passwordError &&
            email.trim() !== "" &&
            password.trim() !== ""
        );
    };

    const handleSubmit = () => {
        if (email !== "" &&
            password !== ""
        ) {
            window.location.href = "/dashboard"
        }
    };

    return (
        <section className='w-full relative'>
            <Core.Container wider>
                <div className="flex justify-center items-center pt-14 md:pt-28 pb-20 md:pb-72">
                    <div className='w-full max-w-[700px] rounded-[30px] bg-white px-6 md:px-24 pt-6 sm:pt-8 md:pt-14 pb-6 md:pb-12'>
                        <form>
                            <h1 className='text-dark-blue text-[28px] sm:text-[40px] md:text-[52px] leading-[35px] sm:leading-[50px] md:leading-[70px] tracking-[-1px] font-bold text-center mx-auto mb-[10px] sm:mb-[20px] md:mb-[60px]'>
                                Sign in
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
                                    setErrorMessage={setPasswordError}
                                    errorMessage={passwordError}
                                    name="password"
                                    auth
                                />
                            </div>
                            <div className="flex gap-x-2 md:gap-x-16 gap-y-5 sm:grid-cols-6 pb-10">
                                <div className="w-[50%]">
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                        />
                                        <span className="relative w-[32px] md:w-[62px] h-[18px] md:h-[32px] bg-gray-4 rounded-full transition duration-300 ease-in-out">
                                            <span
                                                className={`absolute w-[14px] md:w-[28px] h-[14px] md:h-[28px] rounded-full transform m-[2px] ${isChecked ? "bg-green translate-x-full" : "bg-gray-5 translate-x-0"
                                                    } transition duration-300 ease-in-out`}
                                            ></span>
                                        </span>
                                        <span className="text-dark-blue text-[11px] md:text-[14px] leading-[16px] md:leading-[23px] font-semibold">Remember Me</span>
                                    </label>
                                </div>
                                <div className="w-[50%] flex justify-end">
                                    <NavLink to={"/forgot-password"}>
                                        <span className="text-dark-blue text-[11px] md:text-[14px] leading-[16px] md:leading-[23px] font-semibold">Forgot Password?</span>
                                    </NavLink>
                                </div>
                            </div>
                            <Core.Button greenIconicLg wider
                                onclick={handleSubmit}
                                disabled={!isFormValid()}>Sign in</Core.Button>
                            <p className='text-dark-blue text-[12px] md:text-[16px] leading-[14px] md:leading-[20px] font-regular text-center pt-4 md:pt-8'>
                                Don’t have any account? <NavLink to="/signup"><strong>Create an Account</strong></NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </Core.Container>
        </section>
    )
}

export default LoginForm