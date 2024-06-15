import React from 'react';
import { Core } from '../../components';

function Cta({ data }) {
    return (
        <section className='cta-section w-full bg-[#f8ffff7a]'>
            <Core.Container>
                <div className="flex flex-col justify-start items-start gap-y-6 md:gap-y-10 pt-8 sm:pt-[50px] md:pt-[110px] pb-8 sm:pb-[50px] md:pb-[70px] px-0 md:px-5">
                    <h1 data-aos="fade-right" className="max-w-[230px] sm:max-w-[450px] text-[#fff] text-[24px] sm:text-[36px] md:text-[48px] leading-[28px] sm:leading-[40px] md:leading-[56px] font-bold">
                        {data?.heading}
                    </h1>
                    <Core.Button greenIconicLg to="/signup">Sign up free</Core.Button>
                </div>
            </Core.Container>
        </section>
    )
}

export default Cta