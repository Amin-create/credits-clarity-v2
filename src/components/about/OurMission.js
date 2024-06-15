import React, { useState, useEffect } from 'react';
import { Core } from '..';

function OurMission({ data }) {
    const [firstCount, setFirstCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0);

    const handleScroll = () => {
        const section = document.getElementById('counting_section');

        // Check if the section element exists before accessing its properties
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition > sectionTop - windowHeight + sectionHeight / 2) {
                animateCount(250, setFirstCount);
                animateCount(68, setSecondCount);

                // Remove scroll event listener once the animation is triggered
                window.removeEventListener('scroll', handleScroll);
            }
        }
    };
    const animateCount = (endValue, setStateFunction) => {
        let startValue = 0;
        const duration = 2000; // Adjust the duration in milliseconds
        const startTime = performance.now();

        const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = elapsed / duration;

            if (progress < 1) {
                const value = Math.ceil(easeInOut(progress) * endValue);
                setStateFunction(value);
                requestAnimationFrame(updateCount);
            } else {
                setStateFunction(endValue);
            }
        };

        updateCount(startTime);
    };

    const easeInOut = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    useEffect(() => {
        // Attach scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Detach scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <section className='w-full relative'>
            <Core.Container>
                <div className="flex flex-col md:flex-row justify-between items-start gap-x-16 pt-8 md:pt-14 pb-10 md:pb-20">
                    <div className='relative flex justify-center items-center w-full md:w-[45%] pr-0 md:pr-14 pb-8'>
                        <div className='absolute bottom-[10px] md:bottom-0 z-[-1] w-[90%] md:w-full h-[250px] md:h-[42%] rounded-bl-[80px] sm:rounded-bl-[110px] bg-gradient-to-r from-gr-a-1 to-gr-a-2'>
                        </div>
                        <img data-aos="fade-up" className="w-[76%] md:w-full" src={data?.image} alt="logo" />
                    </div>
                    <div className='flex flex-col gap-y-4 sm:gap-y-8 w-full md:w-[55%]'>
                        <h6 data-aos="fade-left" className="text-gray-1 text-[16px] sm:text-[18px] leading-[] font-bold mt-5"
                        >{data?.subTitle}
                        </h6>
                        <h1 data-aos="fade-left" className="text-[20px] sm:text-[26px] md:text-[36px] leading-[25px] sm:leading-[30px] md:leading-[40px] font-bold pr-0 md:pr-5">
                            {data?.heading}
                        </h1>
                        <p data-aos="fade-left" className='text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-regular'>
                            {data?.text}
                        </p>
                        <div id="counting_section" className='flex justify-start'>
                            <div className='w-[50%]'>
                                <h2 data-aos="fade-left" className="text-green text-[40px] md:text-[52px] leading-[] font-bold">{firstCount}+</h2>
                                <p data-aos="fade-left" className='text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-regular'>
                                    {data?.firstCountText}
                                </p>
                            </div>
                            <div className='w-[50%]'>
                                <h2 data-aos="fade-left" className="text-green text-[40px] md:text-[52px] leading-[] font-bold">{secondCount}+</h2>
                                <p data-aos="fade-left" className='text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-regular'>
                                    {data?.secondCountText}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Core.Container>
        </section>
    )
}

export default OurMission