import React, { useState } from 'react'
import { Core } from '..';

function MyProfile() { 
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState(""); 

    const [fullNameError, setFullNameError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [dobError, setDobError] = useState("");

    console.log("fullName", fullName)
    console.log("email", email)
    console.log("phoneNumber", phoneNumber)
    console.log("dob", dob)

    return (
        <div data-aos="fade- up" className={`w-full h-fit rounded-[18px] md:rounded-[24px] overflow-hidden bg-white bg-opacity-40 px-[55px] py-[35px]`}>
            <h5 className='text-dark-blue text-[22px] leading-[30px] font-bold'>My Profile</h5>
            <div className='flex flex-col gap-y-4 mt-6 mb-8'>
                <Core.InputLabel
                    auth
                    setState={setFullName}
                    name="fullName"
                    setErrorMessage={setFullNameError}
                    errorMessage={fullNameError}
                />
                <Core.InputLabel
                    auth
                    setState={setEmail}
                    name="email"
                    setErrorMessage={setEmailError}
                    errorMessage={emailError}
                />
                <Core.InputLabel
                    auth
                    setState={setPhoneNumber}
                    name="phoneNumber"
                    setErrorMessage={setPhoneNumberError}
                    errorMessage={phoneNumberError}
                />
                <Core.InputLabel
                    auth
                    setState={setDob}
                    name="calender"
                    setErrorMessage={setDobError}
                    errorMessage={dobError}
                />
                <div className='flex justify-start max-w-[500px] gap-x-6 mt-4'>
                    <Core.Button greenIconicSm className={"w-full"}>Save</Core.Button>
                    <Core.Button invert className={"w-full"}>Cancel</Core.Button>
                </div>
            </div>
        </div>
    )
}

export default MyProfile