import React from 'react'
import { FiChevronRight } from 'react-icons/fi';
import { Core } from '../../components';

function ContentImage({ data }) {
    return (
        <section className='w-full bg-[#f8ffff7a]'>
            <Core.Container>
                <div className="flex flex-col lg:flex-row justify-between items-start gap-y-20 pt-[50px] md:pt-[160px] pb-10 md:pb-20">
                    <div>
                        <h1 data-aos="fade-right" className="max-w-[540px] text-[28px] sm:text-[36px] md:text-[48px] leading-[32px] sm:leading-[40px] md:leading-[56px] font-bold">
                            {data?.heading}
                        </h1>
                        <p data-aos="fade-right" className='max-w-[455px] text-[14px] md:text-[18px] leading-[20px] md:leading-[24px] font-regular pt-4 pb-6'>
                            {data?.text}
                        </p>
                        <ul className='text-[14px] md:text-[20px] leading-[22px] md:leading-[33px] font-medium list-disc pl-8 mb-8'>
                            {data?.ul.map((value) => {
                                return (
                                    <li key={value * 4} data-aos="fade-right">
                                        {value}
                                    </li>
                                )
                            })}
                        </ul>                      
                        <Core.Button greenIconicSm to="/signup">Sign up free</Core.Button>
                    </div>
                    <div className='pr-14 pb-8'>
                        <img data-aos="fade-left" className=" scale-[1] mt-[-60px]" src={data?.image} alt="logo" />
                    </div>
                </div>
            </Core.Container>
        </section>
    )
}

export default ContentImage