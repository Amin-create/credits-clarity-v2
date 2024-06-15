import React from 'react'
import { Core } from '..';

function BigImage({ img }) {
    return (
        <section className='w-full relative'>
            <Core.Container wider>
                <div className="flex justify-center items-center py-0 sm:py-2 md:py-10">
                    <img data-aos="zoom-in" className="w-full" src={img} alt="big image" />
                </div>
            </Core.Container>
        </section>
    )
}

export default BigImage