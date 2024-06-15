import React from 'react';
import { Core } from '../../components';

function Hero({ data }) {
    return (
        <section className='w-full relative overflow-hidden'>
            <div className='absolute z-[-1] w-full h-[310px] sm:h-[360px] md:h-[542px] 2xl:h-[572px] rounded-bl-[50px] sm:rounded-bl-[90px] md:rounded-bl-[140px] 2xl:rounded-bl-[300px] bg-gradient-to-r from-gr-a-1 to-gr-a-2'>
            </div>
            <Core.Container>
                <div className="flex justify-between items-start h-[340px] sm:h-[390px] md:h-[620px] 2xl:h-[720px] pt-[30px] sm:pt-[40px] xl:pt-[80px] 2xl:pt-[130px]">
                    <div>
                        <h1 className="max-w-full md:max-w-[620px] 2xl:max-w-[540px] text-[#fff] text-[30px] sm:text-[40px ] md:text-[52px] leading-[40px] sm:leading-[50px ] md:leading-[60px]  2xl:leading-[70px] font-bold ">
                            {data?.heading}
                        </h1>
                        <p className='max-w-[520px] text-[16px] sm:text-[20px ] text-[#fff] leading-[22px] sm:leading-[30px ] pt-4 pb-6'>
                            {data?.text}
                        </p>
                        <Core.Button greenIconicLg to="/signup">Sign up free</Core.Button>
                    </div>
                    <div data-aos="zoom-in" className='sm:w-[730px] lg:w-[auto] mr-[-120px] sm:mr-[-40px] lg:mr-[-120px] 2xl:mr-[-200px] hidden sm:block'>
                        <img className="scale-[0.75] md:scale-[0.8] 2xl:scale-[1] mt-[-100px] sm:mt-[30px] lg:mt-[-50px] 2xl:mt-[-60px]" src={data?.image} alt="logo" />
                    </div>
                </div>
            </Core.Container>
        </section>
    )
}

export default Hero