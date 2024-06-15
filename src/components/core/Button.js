import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

function Button({
    children,
    wider,
    disabled,
    blackText,
    // button types
    simpleGreen,
    greenIconicXs,
    greenIconicSm,
    greenIconicMd,
    greenIconicXl,
    greenIconicLg,invert,
    link,

    simpleGreenSq,

    // button types
    to,
    onclick,
    className,
}) {
    const buttonTag =
        <button type="button" className={`
                        ${greenIconicXl && 'w-[150px] sm:w-[180px] md:w-[420px] text-[14px] sm:text-[18px] leading-[16px] sm:leading-[20px] md:text-[25px] md:leading-[32px] font-bold pl-6 md:pl-12 pr-1 py-[3px] bg-green hover:bg-green-2 active:bg-green-3 disabled:bg-green  flex justify-between items-center text-[#fff] whitespace-nowrap rounded-full  disabled:opacity-[0.6] transition-all group'}
                        ${greenIconicLg && 'w-[150px] sm:w-[180px] md:w-[311px] text-[14px] sm:text-[18px] leading-[16px] sm:leading-[20px] md:text-[25px] md:leading-[32px] font-bold pl-6 md:pl-12 pr-1 py-[3px] bg-green hover:bg-green-2 active:bg-green-3 disabled:bg-green  flex justify-between items-center text-[#fff] whitespace-nowrap rounded-full  disabled:opacity-[0.6] transition-all group'}
                        ${greenIconicMd && 'w-[140px] sm:w-[170px] md:w-[250px] text-[14px] sm:text-[18px] leading-[16px] sm:leading-[20px] md:text-[25px] md:leading-[32px] font-bold pl-6 md:pl-12 pr-1 py-[3px] bg-green hover:bg-green-2 active:bg-green-3 disabled:bg-green  flex justify-between items-center text-[#fff] whitespace-nowrap rounded-full  disabled:opacity-[0.6] transition-all group'}
                        ${greenIconicSm && 'w-[130px ] md:w-[226px ] text-[12px] sm:text-[16px] leading-[14px] sm:leading-[18px] md:text-[20px] md:leading-[26px] font-bold pl-5 md:pl-8 pr-1 py-1 bg-green hover:bg-green-2 active:bg-green-3 disabled:bg-green  flex justify-between items-center text-[#fff] whitespace-nowrap rounded-full  disabled:opacity-[0.6] transition-all group'}
                        ${invert && 'w-[130px ] md:w-[226px ] text-green text-[12px] sm:text-[16px] leading-[14px] sm:leading-[18px] md:text-[20px] md:leading-[26px] font-bold pl-5 md:pl-8 pr-1 py-1 bg-transparent hover:bg-green-2 active:bg-green-3 disabled:bg-green border-[1px] border-green hover:border-green-2 hover:text-white  flex justify-between items-center text-[#fff] whitespace-nowrap rounded-full  disabled:opacity-[0.6] transition-all group'}
                        ${greenIconicXs && 'w-[130px] md:w-[164px] text-[12px] sm:text-[14px] leading-[14px] sm:leading-[18px] md:text-[16px] md:leading-[19px] font-bold pl-5 md:pl-6 pr-1 py-1 bg-green hover:bg-green-2 active:bg-green-3 disabled:bg-green  flex justify-between items-center text-[#fff] whitespace-nowrap rounded-full  disabled:opacity-[0.6] transition-all group'}
                        ${wider && 'w-full md:w-full  flex justify-between items-center text-[#fff] whitespace-nowrap rounded-full  disabled:opacity-[0.6] transition-all group'}
                        ${simpleGreen && 'text-[12px] md:text-[16px] font-medium px-3 md:px-6 py-1.5 md:py-3 bg-green hover:bg-green-2 active:bg-green-3 disabled:bg-green  flex justify-between items-center text-[#fff] whitespace-nowrap rounded-full  disabled:opacity-[0.6] transition-all group'}
                        ${link && 'text-gray-1 text-[12px] md:text-[15px] leading-[14px] md:leading-[20px] text-center font-bold bg-[transparent] hover:bg-gray-4 active:bg-gray-3 border-[1px] border-gray-1 px-3 md:px-[33px] py-1.5 md:py-[8px]  flex justify-between items-center text-[#fff] whitespace-nowrap rounded-full  disabled:opacity-[0.6] transition-all group'}
                        
                      
                        
                        ${    simpleGreenSq && 'text-[12px] md:text-[16px] font-medium px-3 md:px-6 py-1.5 md:py-3 bg-green hover:bg-green-2 active:bg-green-3 disabled:bg-green  text-[#fff] whitespace-nowrap rounded-[5px]  disabled:opacity-[0.6] transition-all group'}
                        
                        
                        ${className}
                        `}
            disabled={disabled}
        >
            {children}
            {(!simpleGreen && !link && !simpleGreenSq) &&
                <div className={`
                                ${greenIconicXl && 'w-[26px] sm:w-[40px] md:w-[60px] h-[26px] sm:h-[40px] md:h-[60px] group-hover:scale-90 transition-all'}
                                ${greenIconicLg && 'w-[26px] sm:w-[40px] md:w-[60px] h-[26px] sm:h-[40px] md:h-[60px] group-hover:scale-90 transition-all'}
                                ${greenIconicMd && 'w-[26px] sm:w-[40px] md:w-[60px] h-[26px] sm:h-[40px] md:h-[60px]'}
                                ${greenIconicSm && 'w-[20px] sm:w-[30px] md:w-[48px] h-[20px] sm:h-[30px] md:h-[48px]'}
                                ${invert && 'w-[20px] sm:w-[30px] md:w-[48px] h-[20px] sm:h-[30px] md:h-[48px]'}
                                ${greenIconicXs && 'w-[17px] sm:w-[32px] md:w-[38px] h-[17px] sm:h-[32px] md:h-[38px]'}
                                flex justify-center items-center  rounded-full bg-[#fff]
                                ml-4
                            `}>
                    <span className='text-[#09EC92] text-[18px] sm:text-[28px] pl-[3px] md:pl-[5px]'>
                        <FiChevronRight />
                    </span>
                </div>}
        </button>
    return (
        <>
            {blackText &&
                <NavLink to={to ? to : "/"}>
                    <button type="button" className="w-full text-[12px] md:text-[16px] font-bold whitespace-nowrap rounded-md px-4 py-2 ">
                        {children}
                    </button>
                </NavLink>
            }
            {(greenIconicLg || greenIconicXs || greenIconicSm || greenIconicMd || greenIconicXl || simpleGreen ||simpleGreenSq|| link||invert) &&
                (to ? (
                    <NavLink to={to}>{buttonTag}</NavLink>
                ) : (
                    onclick ?
                        <a onClick={() => onclick(true)}>{buttonTag}</a>
                        :
                        <a className='w-full'>{buttonTag}</a>
                ))

            }
        </>
    )
}

export default Button