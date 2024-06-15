import React, { useState, useEffect } from 'react';
import { Core } from '..';
import checkWhiteCheck from '../../assets/images/icon/check-white-circle.svg';

function ContactForm() {
    const [fullName, setFullName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [toggleThankyouModal, setToggleThankyouModal] = useState(false);
    const [fullNameError, setFullNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [messageError, setMessageError] = useState("");

    const handleSubmit = () => {
        setToggleThankyouModal(true);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setToggleThankyouModal(false);
        }, 4000);
        return () => clearTimeout(timeoutId);
    }, [toggleThankyouModal]);


    const Overlay = ({ children }) => {
        return (
            <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
                {children}
            </div>
        );
    };

    const isFormValid = () => {
        return (
            !fullNameError &&
            !lastNameError &&
            !emailError &&
            !phoneNumberError &&
            !messageError &&
            fullName.trim() !== "" &&
            lastName.trim() !== "" &&
            email.trim() !== "" &&
            phoneNumber.trim() !== "" &&
            message.trim() !== ""
        );
    };

    return (
        <section className='w-full relative'>
            {toggleThankyouModal &&
                <Overlay>
                    <div className="flex flex-col justify-center items-center bg-green -3 rounded-lg shadow-lg p-16">
                        <img className="w-[80px]" src={checkWhiteCheck} alt="big image" />
                        <h1 className="text-white text-[35px] font-bold">Thank you for contacting us!</h1>
                        <p className='text-white '>Lorem Ipsum is simply dummy text the printing and typesetting industry   text the printing</p>
                    </div>
                </Overlay>
            }
            <Core.Container>
                <form className='pt-3 sm:pt-5 md:pt-10 pb-8 sm:pb-24 md:pb-52'>
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 gap-x-16 gap-y-3 sm:gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <Core.InputLabel
                                    setState={setFullName}
                                    setErrorMessage={setFullNameError}
                                    errorMessage={fullNameError}
                                    name="fullName"
                                    web
                                />
                            </div>
                            <div className="sm:col-span-3">
                                <Core.InputLabel
                                    setState={setLastName}
                                    setErrorMessage={setLastNameError}
                                    errorMessage={lastNameError}
                                    name="lastName"
                                    web
                                />
                            </div>
                            <div className="sm:col-span-3">
                                <Core.InputLabel
                                    setState={setEmail}
                                    setErrorMessage={setEmailError}
                                    errorMessage={emailError}
                                    name="email"
                                    web
                                />
                            </div>
                            <div className="sm:col-span-3">
                                <Core.InputLabel
                                    setState={setPhoneNumber}
                                    setErrorMessage={setPhoneNumberError}
                                    errorMessage={phoneNumberError}
                                    name="phoneNumber"
                                    web
                                />
                            </div>
                            <div className="col-span-full">
                                <Core.InputLabel
                                    setState={setMessage}
                                    setErrorMessage={setMessageError}
                                    errorMessage={messageError}
                                    name="message"
                                    web
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 sm:mt-6 flex items-center justify-start gap-x-6">
                        <Core.Button greenIconicMd onclick={handleSubmit} disabled={!isFormValid()}>Submit</Core.Button>
                    </div>
                </form>
            </Core.Container>
        </section>
    )
}

export default ContactForm