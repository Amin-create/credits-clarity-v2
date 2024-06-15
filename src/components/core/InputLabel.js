import React, { useState } from 'react';
import envelope from '../../assets/images/icon/envelope.svg';
import key from '../../assets/images/icon/key.svg';
import user from '../../assets/images/icon/user.svg';
import card from '../../assets/images/icon/card.svg';
import mobile from '../../assets/images/icon/mobile.svg';
import calender from '../../assets/images/icon/calender.svg';
import eye_close from '../../assets/images/icon/eye-close.svg';
import eye_open from '../../assets/images/icon/eye-open.svg';

function InputLabel({
    // ----
    web,
    errorMessage,
    setErrorMessage,
    // ----
    auth,
    // ----
    // common
    name,
    setState,
    password
}) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [inputType, setInputType] = useState('text');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
        setInputType(passwordVisible ? 'password' : 'text');
    };

    const label = (name) => {
        switch (name) {
            case "fullName":
                return "Full Name";
            case "lastName":
                return "Last Name";
            case "email":
                return "Email";
            case "password":
                return "Password";
            case "newPassword":
                return "New Password";
            case "confirmPassword":
                return "Confirm Password";
            case "calender":
                return "DOB";
            case "ssn":
                return "SSN";
            case "phoneNumber":
                return "Mobile Number";
            case "phoneNumber":
                return "Phone Number";
            case "message":
                return "Message";
            default:
                return "Label";
        }
    }

    const icon = (name) => {
        switch (name) {
            case "email":
                return envelope;
            case "password":
            case "newPassword":
            case "confirmPassword":
                return key;
            case "fullName":
                return user;
            case "calender":
                return calender;
            case "ssn":
                return card;
            case "phoneNumber":
                return mobile;
            default:
                return mobile;
        }
    }

    const type = (name) => {
        switch (name) {
            case "email":
            case "fullName":
            case "ssn":
            case "phoneNumber":
            case "lastName":
            case "message":
            case "phoneNumber":
                return "text";
            case "password":
            case "newPassword":
            case "confirmPassword":
                return "password";
            case "calender":
                return "date";
            default:
                return "text";
        }
    }

    const placeholder = (name) => {
        switch (name) {
            case "email":
                return "name@gmail.com";
            case "fullName":
                return "Full Name";
            case "lastName":
                return "Last Name";
            case "password":
            case "newPassword":
            case "confirmPassword":
                return "••••••••••";
            case "ssn":
                return "AAA-GG-SSSS";
            case "phoneNumber":
                return "0000-0000000";
            case "phoneNumber":
                return "0000-0000000";
            case "message":
                return "Message";
            default:
                return "";
        }
    }

    const isPasswordInput = name === "password" || name === "confirmPassword" || name === "newPassword" ? false : true;

    const validateInput = (name, value) => {
        switch (name) {
            case "fullName":
                return value.trim() === "" ? "Please enter your Full Name" : !/^[a-zA-Z\s]+$/.test(value) ? "Please enter a valid Full Name without numbers and special characters" : "";
            case "lastName":
                return value.trim() === "" ? "Please enter your Full Name" : !/^[a-zA-Z\s]+$/.test(value) ? "Please enter a valid Last Name without numbers and special characters" : "";
            case "email":
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return !emailRegex.test(value) ? "Please enter a valid Email Address" : "";
            case "phoneNumber":
                // const phoneRegex = /^\d{4}-\d{7}$/;
                const phoneRegex = /^[\d-]{1,18}$/;
                return !phoneRegex.test(value) ? "Please enter a valid Phone Number" : "";
            case "message":
                return value.trim() === "" ? "Please enter your Message" : "";
            case "confirmPassword":
                return value !== password ? "Passwords do not match" : value.length < 8 ? "Password must be at least 8 characters long" : "";
            case "password":
            case "newPassword":
                return value.length < 8 ? "Password must be at least 8 characters long" : "";
            default:
                return "";
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const validationError = validateInput(name, value);
        setErrorMessage(validationError);

        if (!validationError) {
            setState(value);
        }
    };

    return (
        <>
            {web &&
                <div className="col-span-full">
                    <label for={name} className="text-dark-blue text-[12px] sm:text-[14px] md:text-[18px] leading-[18px] sm:leading-[20px] md:leading-[30px] font-medium">{label(name)}</label>
                    <div className="mt-1 sm:mt-2">
                        {name !== "message" &&
                            <>
                                <input
                                    onChange={handleInputChange}
                                    type={type(name)}
                                    name={name}
                                    id={name}
                                    placeholder={placeholder(name)}
                                    autocomplete="off"
                                    className="w-full text-dark-blue text-[12px] md:text-[16px] leading-[18px] md:leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green px-[15px] py-[12px] md:py-[15px]"
                                />
                                {errorMessage && <p className='text-[red] text-[12px] leading-[14px] pt-2 pl-1'>{errorMessage}</p>}
                            </>
                        }
                        {name === "message" &&
                            <>
                                <textarea
                                    onChange={handleInputChange}
                                    id={name}
                                    name={name}
                                    rows="4"
                                    placeholder={placeholder(name)}
                                    className="w-full text-dark-blue last:text-[16px] leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green px-[15px] py-[15px]"
                                ></textarea>
                                {errorMessage && <p className='text-[red] text-[12px] leading-[14px] pt-2 pl-1'>{errorMessage}</p>}
                            </>
                        }
                    </div>
                </div>
            }
            {auth &&
                <div className="col-span-full">
                    <label for={name} className="text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-medium">{label(name)}</label>
                    <div className="relative mt-1 md:mt-2">
                        <img className="absolute w-[16px] md:w-[auto] left-3 md:left-5 top-[12px] md:top-[18px]" src={icon(name)} alt="big image" />
                        <input
                            // onChange={(e) => setState(e.target.value)}
                            onChange={handleInputChange}
                            type={isPasswordInput ? inputType : type(name)}
                            name={name}
                            id={name}
                            placeholder={placeholder(name)}
                            autocomplete="off"
                            className="w-full text-dark-blue text-[12px] md:text-[16px] leading-[18px] md:leading-[30px] rounded-md border-0 ring-1 ring-inset ring-gray-3 outline-none focus:ring-2 focus:ring-inset focus:ring-green pl-[35px] md:pl-[60px] pr-[8px] md:pr-[15px] py-[12px] md:py-[15px]" />
                        {isPasswordInput &&
                            <img
                                className="absolute w-[16px] md:w-[auto] right-3 md:right-5 top-[16px] sm:top-[14px] md:top-[20px] cursor-pointer"
                                src={passwordVisible ? eye_open : eye_close}
                                onClick={togglePasswordVisibility}
                                alt="eye icon"
                            />}
                    </div>
                    {errorMessage && <p className='text-[red] text-[12px] leading-[14px] pt-2 pl-1'>{errorMessage}</p>}
                </div>
            }
        </>
    )
}

export default InputLabel


