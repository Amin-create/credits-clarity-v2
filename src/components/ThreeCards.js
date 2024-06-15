import React from 'react'
import { Core } from '../components';


function ThreeCards({ data }) {
    return (
        <section className='w-full relative'>
            <Core.Container>
                <div className="flex flex-col justify-center items-center gap-y-16 pt-4 sm:pt-8 pb-8 sm:pb-16">
                    <div className='flex flex-col md:flex-row justify-between items-center gap-[10px] sm:gap-[20px]'>
                        {data?.map((value) =>
                            <Core.Card key={value.id} cardNumber={2} data={value} />
                        )}
                    </div>
                </div>
            </Core.Container>
        </section>
    )
}

export default ThreeCards