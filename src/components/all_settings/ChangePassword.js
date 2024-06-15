import React, { useState } from 'react'
import { Core } from '..';

function ChangePassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    console.log("password", password)
    console.log("confirmPassword", confirmPassword)

    return (
        <div data-aos="fade- up" className={`w-full h-fit rounded-[18px] md:rounded-[24px] overflow-hidden bg-white bg-opacity-40 px-[55px] py-[35px]`}>
            <h5 className='text-dark-blue text-[22px] leading-[30px] font-bold'>Change Password</h5>
            <div className='flex flex-col gap-y-4 mt-6 mb-8'>
                <Core.InputLabel
                    auth
                    setState={setPassword}
                    name="password"
                    setErrorMessage={setPasswordError}
                    errorMessage={passwordError}
                />
                <Core.InputLabel
                    auth
                    setState={setConfirmPassword}
                    name="confirmPassword"
                    setErrorMessage={setConfirmPasswordError}
                    errorMessage={confirmPasswordError}
                />
                <div className='flex justify-start max-w-[500px] gap-x-6 mt-4'>
                    <Core.Button greenIconicSm className={"w-full"}>Save</Core.Button>
                    <Core.Button invert className={"w-full"}>Cancel</Core.Button>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword