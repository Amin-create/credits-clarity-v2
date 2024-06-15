import React, { useState, useEffect } from 'react';
import { TiStarburst } from 'react-icons/ti';
import { Core } from '../../../components';

const FAQItem = ({ item, isOpen, onClick, index }) => ( 
    <div className={`flex justify-between items-center w-[auto ] lg:w-[564px] h-[40px] md:h-[70px] cursor-pointer rounded-[8px] ${isOpen && 'bg-dark-blue'} ${!isOpen && 'bg-gradient-to-b from-[#ffffffab] to-[#ffffff63] hover:bg-green transition-all duration-500'} px-3 md:px-5`} onClick={() => onClick(index)}>
        <h2 className={`${isOpen && 'text-[#fff]'} ${!isOpen && 'text-dark-blue'} text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] font-extrabold`}>{item.question}</h2>
        {isOpen && (
            <span className='text-[#09EC92] text-[20px] md:text-[30px]'>
                <TiStarburst />
            </span>
        )}
    </div>
);

const FAQ = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(Boolean);

    const handleToggle = (index) => {
        if (openIndex !== index) {
            setOpenIndex(index);
            setFadeIn(true);
        }
    };
    return (
        <div className='pt-8 sm:pt-14 md:pt-24 pb-10 sm:pb-20 md:pb-28'>
            <div className="flex justify-between items-center gap-x-10 gap-y-5">
                <h2 className="w-[50%] text-[28px] sm:text-[48px] leading-[34px] sm:leading-[56px] font-extrabold">
                    FAQs.
                </h2>
                <h2 className="hidden lg:block w-[50%] text-[48px] leading-[56px] font-extrabold">
                    Ans.
                </h2>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-5 md:gap-10 mt-4 sm:mt-8">
                <div className="questions-div flex flex-row lg:flex-col justify-start items-start gap-x-4 gap-y-2 md:gap-y-4 overflow-x-scroll lg-overflow-x-unset pb-3 lg:pb-0">
                    {data?.map((item, index) => (
                        <div key={index} className="flex justify-between items-center flex-wrap min-w-max md:w-full gap-x-5 md:gap-x-10">
                            <FAQItem item={item} isOpen={openIndex === index} onClick={handleToggle} index={index} />
                        </div>
                    ))}
                </div>
                <div data-aos="fade-up" className="w-full h-[auto] md:h-[615px] rounded-[16px] bg-[#09EC92] p-4 sm:p-6 md:p-10">
                    {openIndex !== null && (
                        <>
                            <span className='text-dark-blue text-[20px] md:text-[30px]'>
                                <TiStarburst />
                            </span>
                            <p className={`text-gray-700 text-[14px] sm:text-[18px] md:text-[24px] leading-[22px] sm:leading-[28px] md:leading-[36px] font-regular mt-2 sm:marker:mt-5 transition-all fade-in-keyframe ${fadeIn ? "show" : "hide"}`}>
                                {data[openIndex].answer}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};


function Faq({ data }) {
    return (
        <section className='w-full bg-[#E9F9F2]'>
            <Core.Container>
                <FAQ data={data} />
            </Core.Container>
        </section>
    );
}

export default Faq;
