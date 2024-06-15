import React, { useState } from 'react'
import { Core } from '..';
import Icon from '../icons';
import visa from "../../assets/images/logo/visa.svg";

function Subscription() {
    const [activeScreen, setActiveScreen] = useState("subscription");
    const [isChecked, setIsChecked] = useState(false);

    const addPaymentMethod = () => {
        setActiveScreen("payment")
    }

    const payNow = () => {
        setActiveScreen("thankYou")

    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div data-aos="fade- up" className={`w-full min-h-[200px] md:min-h-[60vh] rounded-[18px] md:rounded-[24px] overflow-hidden bg-white bg-opacity-40 px-[55px] py-[40px]`}>
            {activeScreen === "subscription" &&
                <h5 className='text-dark-blue text-[22px] leading-[30px] font-bold'>Subscription</h5>
            }
            {activeScreen === "payment" &&
                <h5 className='text-dark-blue text-[22px] leading-[30px] font-bold'>Payment</h5>
            }
            {activeScreen === "thankYou" &&
                <h5 className='text-dark-blue text-[22px] leading-[30px] font-bold'>Payment</h5>
            }
            <div className='flex flex-col gap-y-4 mt-6 mb-8'>
                {activeScreen !== "thankYou" &&
                    <p className='text-[16px] leading-[24px] font-semibold'>App will be free for 14 days trial after that it will charge $4 per month from customer</p>
                }
                {activeScreen === "payment" &&
                    <div className={`w-[360px] h-[190px] rounded-[18px] md:rounded-[24px] overflow-hidden bg-white p-5 pb-6 mt-5`}>
                        <h6 className='text-dark-blue text-[18px] leading-[27px] font-semibold mb-1'>Card Information</h6>
                        <div className='h-[108px] border-[1px] border-gray-3 rounded-[10px] overflow-hidden'>
                            <div className='flex justify-between items-center h-[50%] border-b-[1px] border-gray-3 px-4'>
                                <input type="text" placeholder='0000 0000 0000 0000' className='w-[80%] outline-none border-none' />
                                <img src={visa} />
                            </div>
                            <div className='flex justify-start'>
                                <input type="text" placeholder='MM/YY' className='w-[70%] h-[52px] outline-none border-r-[1px] border-gray-3 px-4' />
                                <div className='flex justify-between items-center h-[52px] pl-4 pr-3'>
                                    <input type="text" placeholder='CVC' className='w-[75%] outline-none border-none' />
                                    <span className='text-gray-8'><Icon name="Card" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {activeScreen === "subscription" &&
                    <div className={`flex justify-center items-center flex-col gap-y-4 w-[320px] h-[240px] rounded-[18px] md:rounded-[24px] overflow-hidden bg-white p-14 pb-10 mt-5`}>
                        <div className='flex items-end gap-x-1'>
                            <h1 className='text-[75px] leading-[80px] font-bold'>$4 </h1>
                            <span className='text-[30px] leading-[34px] font-semibold pb-3'>P/M</span>
                        </div>
                        <Core.Button greenIconicXs wider>Subscribe Now</Core.Button>
                    </div>
                }
                {activeScreen === "subscription" &&
                    <Core.Button invert onclick={addPaymentMethod} className={"mt-4"}>Add Payment Method</Core.Button>
                }
                {activeScreen === "payment" &&
                    <div className="w-[360px]">
                        <label className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <span className="relative w-[32px] md:w-[62px] h-[18px] md:h-[32px] bg-white rounded-full transition duration-300 ease-in-out">
                                <span
                                    className={`absolute w-[14px] md:w-[28px] h-[14px] md:h-[28px] rounded-full transform m-[2px] ${isChecked ? "bg-green translate-x-full" : "bg-gray-5 translate-x-0"
                                        } transition duration-300 ease-in-out`}
                                ></span>
                            </span>
                            <span className="text-gray-1 text-[11px] md:text-[14px] leading-[16px] md:leading-[23px] font-semibold pl-3">Mark Default</span>
                        </label>
                        <div className='flex justify-between w-[360px] mt-16'>
                            <h5 className='flex justify-between w-full text-dark-blue text-[22px] leading-[30px] font-bold'>
                                <span>Total Amount</span>
                                <span>$4</span>
                            </h5>
                        </div>
                        <Core.Button onclick={payNow} greenIconicSm className={"mt-6"} wider>Play Now</Core.Button>
                    </div>
                }
                {activeScreen === "thankYou" &&
                    <div className='flex flex-col gap-y-8'>
                        <h3 className='text-[22px] leading-[23px] font-semibold'>Thank You</h3>
                        <p className='text-[16px] leading-[18px] font-semibold'>We appreciate your payment for this services subscription. Thank you for choosing us!</p>
                        <p className='text-[16px] leading-[18px] font-semibold'>We look forward to serving you and making your financial journey smoother and more rewarding.</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Subscription