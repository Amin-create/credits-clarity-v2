import React, { useState } from 'react'
import { Core } from '..';
import styles from '../../style';
import { Link, NavLink } from 'react-router-dom';

function SignupForm() {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [calender, setcalender] = useState("");
    const [ssn, setSsn] = useState("");

    const [fullNameError, setFullNameError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [calenderError, setCalenderError] = useState("");
    const [ssnError, setSsnError] = useState("");

    const [termsofServicesChecked, setTermsofServicesChecked] = useState(false);
    const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);

    const handleTermsCheckbox = () => {
        setTermsofServicesChecked(!termsofServicesChecked);
    };

    const handlePrivacyCheckbox = () => {
        setPrivacyPolicyChecked(!privacyPolicyChecked);
    };

    console.log("email", email)
    console.log("password", password)
    console.log("confirmPassword", confirmPassword)
    console.log("fullName", fullName)
    console.log("calender", calender)
    console.log("phoneNumber", phoneNumber)
    console.log("ssn", ssn)

    const isFormValid = () => {
        return (
            !emailError &&
            !passwordError &&
            !fullNameError &&
            !phoneNumberError &&
            !confirmPasswordError &&
            !calenderError &&
            !ssnError &&
            email.trim() !== "" &&
            password.trim() !== "" &&
            fullName.trim() !== "" &&
            phoneNumber.trim() !== "" &&
            confirmPassword.trim() !== "" &&
            calender.trim() !== "" &&
            ssn.trim() !== "" &&
            termsofServicesChecked === true &&
            privacyPolicyChecked === true
        );
    };


    const handleSubmit = () => {
        if (email !== "" &&
            password !== "" &&
            fullName !== "" &&
            phoneNumber !== "" &&
            confirmPassword !== "" &&
            calender !== "" &&
            ssn !== "" &&
            password === confirmPassword
        ) {
            window.location.href = "/login"
        }
    };
    return (
        <section className='w-full relative'>
            <Core.Container wider>
                <div className="flex justify-center items-center pt-14 md:pt-28 pb-20 md:pb-72">
                    <div className='w-full max-w-[700px] rounded-[30px] bg-white px-6 md:px-24 pt-6 sm:pt-8 md:pt-14 pb-6 md:pb-12'>
                        <form>
                            <h1 className='text-dark-blue text-[28px] sm:text-[40px] md:text-[52px] leading-[35px] sm:leading-[50px] md:leading-[70px] tracking-[-1px] font-bold text-center mx-auto mb-[10px] sm:mb-[20px] md:mb-[60px]'>
                                Sign up
                            </h1>
                            <div className="grid grid-cols-1 gap-x-4 md:gap-x-16 gap-y-4 md:gap-y-5 sm:grid-cols-6 pb-6">
                                <Core.InputLabel
                                    setState={setFullName}
                                    name="fullName"
                                    auth
                                    setErrorMessage={setFullNameError}
                                    errorMessage={fullNameError}
                                />
                                <Core.InputLabel
                                    setState={setEmail}
                                    name="email"
                                    auth
                                    setErrorMessage={setEmailError}
                                    errorMessage={emailError}
                                />
                                <Core.InputLabel
                                    setState={setPassword}
                                    name="password"
                                    auth
                                    setErrorMessage={setPasswordError}
                                    errorMessage={passwordError}
                                />
                                <Core.InputLabel
                                    password={password}
                                    setState={setConfirmPassword}
                                    name="confirmPassword"
                                    auth
                                    setErrorMessage={setConfirmPasswordError}
                                    errorMessage={confirmPasswordError}
                                />
                                <Core.InputLabel
                                    setState={setcalender}
                                    name="calender"
                                    auth
                                    setErrorMessage={setCalenderError}
                                    errorMessage={calenderError}
                                />
                                <Core.InputLabel
                                    setState={setSsn}
                                    name="ssn"
                                    auth
                                    setErrorMessage={setSsnError}
                                    errorMessage={ssnError}
                                />
                                <Core.InputLabel
                                    setState={setPhoneNumber}
                                    name="phoneNumber"
                                    auth
                                    setErrorMessage={setPhoneNumberError}
                                    errorMessage={phoneNumberError}
                                />
                                <div className="col-span-full pb-3">
                                    <div className=" space-y-3">

                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    type="checkbox"
                                                    className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] checkbox checkbox-success cursor-pointer appearance-none border-green border-[1px] rounded-[4px] md:rounded-[6px]"
                                                    checked={termsofServicesChecked}
                                                    onChange={handleTermsCheckbox}
                                                />
                                            </div>
                                            <div className="">
                                                <label htmlFor="comments" className="text-dark-blue text-[12px] md:text-[14px] font-bold">
                                                    I Agree
                                                    <a className={`${styles.linkHover1}`}>
                                                        <Link to="/terms-of-conditions">Terms of Services</Link>
                                                    </a>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    type="checkbox"
                                                    className="w-[18px] md:w-[24px] h-[18px] md:h-[24px] checkbox checkbox-success cursor-pointer appearance-none border-green border-[1px] rounded-[4px] md:rounded-[6px]"
                                                    checked={privacyPolicyChecked}
                                                    onChange={handlePrivacyCheckbox}
                                                />
                                            </div>
                                            <div className="">
                                                <label htmlFor="candidates" className="text-dark-blue text-[12px] md:text-[14px] font-bold">
                                                    I Agree
                                                    <a className={`${styles.linkHover1}`}>
                                                        <Link to="/privacy-policy">Privacy Policy</Link>
                                                    </a>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Core.Button greenIconicLg wider
                                onclick={handleSubmit}
                                disabled={!isFormValid()}
                            >Create Account</Core.Button>
                            <p className='text-dark-blue text-[12px] md:text-[16px] leading-[14px] md:leading-[20px] font-regular text-center pt-4 md:pt-8'>
                                Do you have an account? <strong className='inline-block'>
                                    <a className={` ${styles.linkHover1}`}>
                                        <NavLink to="/login">Sign in</NavLink>
                                    </a>
                                </strong>
                            </p>
                        </form>
                    </div>
                </div >
            </Core.Container >
        </section >
    )
}

export default SignupForm