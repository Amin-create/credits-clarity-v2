import { useState } from 'react';

function Slider({ min, max, sliderNumber, value,amount }) {
    let _value = parseInt(value)

    const percentage = ((_value - min) / (max - min)) * 100;



    const renderSlider = () => {
        switch (sliderNumber) {
            case 1:
                return (
                    <div className='bg-white rounded-[5px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] px-8 pt-10 pb-9 mt-6'>
                    <div className="relative font-medium">




                    <label className='text-[16px] leading-[19px] font-bold'>
                                    Poor
                                </label>
                    <div className='w-full h-[8px] pt-[13px] pb-[40px]'>
                        <div className="flex  w-full h-[8px] relative bg-g radient-to-br fr om-gr-a-1 to-g r-a-2 rounded-full">
                            <div className={`h-full bg-gradient-to-br from-gr-a-1 to-gr-a-2  rounded-full`} style={{ width: `${percentage}%` }}></div>
                            <div
                                className="absolute top-[-7px] flex justify-center items-center w-[20px] h-[20px] bg-green border-[3px] border-white rounded-full shadow-md cursor-pointer "
                                style={{ left: `calc(${percentage}% - 0.5rem)` }}
                            >
                                <div className="
                        absolute h-[30px] bg-green text-white text-[16px] leading-[15px] font-bold px-3 py-2 rounded-full    min-w-[54px] text-center -top-12 pointer-events-none
                        before:absolute before:w-[1px] before:h-[1px] before:border-r-[10px] before:border-r-[transparent] before:border-l-[transparent] before:border-l-[10px] before:border-b-[11px] before:border-green before:top-[29px] before:left-[40%] before:rotate-180
                        ">
                                    {amount && "$"}{value.toLocaleString()}
                                </div>
                            </div>
                            <div className={`h-full bg-gray-7  rounded-full`}
                                style={{ width: `${100 - percentage}%` }}
                            >
                            </div>
                        </div>
                        <div className="flex justify-between pt-5">
                            <span className="text-[14px] leading-[16px] text-dark-blue opacity-50 font-medium">{parseInt(min).toLocaleString()}</span>
                            <span className="text-[14px] leading-[16px] text-dark-blue opacity-50 font-medium">{amount && "$"}{parseInt(max).toLocaleString()}</span>
                        </div>
                    </div>





                    </div>
                    </div>
                );
            case 2:
                return (
                    <div className='w-full h-[8px] mt-[75px] mb-[50px]'>
                        <div className="flex  w-full h-[8px] relative bg-g radient-to-br fr om-gr-a-1 to-g r-a-2 rounded-full">
                            <div className={`h-full bg-gradient-to-br from-gr-a-1 to-gr-a-2  rounded-full`} style={{ width: `${percentage}%` }}></div>
                            <div
                                className="absolute top-[-7px] flex justify-center items-center w-[20px] h-[20px] bg-green border-[3px] border-white rounded-full shadow-md cursor-pointer "
                                style={{ left: `calc(${percentage}% - 0.5rem)` }}
                            >
                                <div className="
                        absolute h-[30px] bg-green text-white text-[16px] leading-[15px] font-bold px-3 py-2 rounded-full    min-w-[54px] text-center -top-12 pointer-events-none
                        before:absolute before:w-[1px] before:h-[1px] before:border-r-[10px] before:border-r-[transparent] before:border-l-[transparent] before:border-l-[10px] before:border-b-[11px] before:border-green before:top-[29px] before:left-[40%] before:rotate-180
                        ">
                                    {amount && "$"}{value.toLocaleString()}
                                </div>
                            </div>
                            <div className={`h-full bg-green-5  rounded-full`}
                                style={{ width: `${100 - percentage}%` }}
                            >
                            </div>
                        </div>
                        <div className="flex justify-between pt-3">
                            <span className="text-[14px] leading-[16px] text-dark-blue opacity-50 font-medium">{parseInt(min).toLocaleString()}</span>
                            <span className="text-[14px] leading-[16px] text-dark-blue opacity-50 font-medium">{amount && "$"}{parseInt(max).toLocaleString()}</span>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };
    return <>{renderSlider()}</>;
}

export default Slider;
