import React from 'react'
import { Core } from '../../components';

function Help({ data }) {
    return (
        <section className='w-full relative'>
            <Core.Container>
                <div className="flex flex-col justify-center items-center gap-y-10 md:gap-y-16 pb-10 md:pb-16">
                    <div className='flex flex-col justify-center items-center'>
                        <h2 data-aos="fade-in" className='text-dark-blue text-[28px] sm:text-[35px] md:text-[48px] leading-[32px] sm:leading-[40px] md:leading-[70px] font-bold mx-auto mb-3 md:mb-0'>
                            How can we help?
                        </h2>
                        <p data-aos="fade-in" className='text-[#000000] text-[14px] md:text-[18px] text-center leading-[24px] md:leading-[36.5px] font-normal'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-[20px]'>
                        {data?.map((value) =>
                            <Core.Card key={value.id} cardNumber={1} data={value} />
                        )}
                    </div>
                    <div className=''>
                        <Core.Button greenIconicLg to="/signup">Sign up free</Core.Button>
                    </div>
                </div>
            </Core.Container>
        </section>
    )
}

export default Help