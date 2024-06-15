import React from 'react'
import { Core } from '..';

function BigImage({ data }) {
    return (
        <section className='w-full relative'>
            <Core.Container>
                <div className="flex flex-col justify-center items-left gap-y-4 sm:gap-y-8 md:gap-y-16 pt-6 md:pt-12 pb-16 md:pb-28">
                    {data?.map((value) =>
                        <>
                            {value.type === "bold-text" &&
                                <h3 data-aos="fade-up" className="max-w-[866px] text-blue text-[18px] sm:text-[28px] md:text-[36px] leading-[22px] sm:leading-[30px] md:leading-[40px] font-bold">
                                    We are the next generation productivity software helping sales and revenue teams navigate their daily work with ebb and flow.
                                </h3>
                            }
                            {value.type === "descriptions" &&
                                <div className='flex justify-between gap-x-1 sm:gap-x-4 md:gap-x-16'>
                                    <div className='w-[50%]'>
                                        <div className='flex flex-col justify-start gap-y-0 md:gap-y-6 pr-0 md:pr-8'>
                                            {value.leftBlock.map((value) =>
                                                <p data-aos="fade-right" className="text-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-regular">
                                                    {value}
                                                </p>)}
                                        </div>
                                    </div>
                                    <div className='w-[50%]'>
                                        <div className='flex flex-col justify-start gap-y-0 md:gap-y-6 pl-2 md:pl-8'>
                                            {value.rightBlock.map((value) =>
                                                <p data-aos="fade-left" className="text-blue text-[14px] md:text-[18px] leading-[20px] md:leading-[30px] font-regular">
                                                    {value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            }



                        </>
                    )}
                </div>
            </Core.Container>
        </section>
    )
}

export default BigImage