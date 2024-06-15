import React from 'react'
import { Core } from '.';


function HorizontalContents({ data }) {
    return (
        <section className='w-full relative'>
            <Core.Container>
                <div className="flex flex-col justify-center items-center gap-y-0 md:gap-y-2 pt-0 sm:pt-4 md:pt-8 pb-0 sm:pb-3 md:pb-6">
                    {data?.heading && <h1 data-aos="fade-up" className="text-[20px] sm:text-[28px] md:text-[36px] leading-[20px] sm:leading-[30px] md:leading-[40px] font-bold text-center pb-1 sm:pb-4">
                        {data?.heading}
                    </h1>}
                    {data?.texts.map((value) =>
                        <p data-aos="fade-up" key={value * 2} className='text-dark-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-regular text-center pt-4 sm:pt-6'>
                            {value}
                        </p>
                    )}
                </div>
            </Core.Container>
        </section>
    )
}

export default HorizontalContents