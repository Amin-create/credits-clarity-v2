import React from 'react'
import person from "../../assets/images//person.png"
import { Core, MediaTextSection } from '..';

function AppFeaturesDescription({ data }) {
    return (
        <section className='w-full relative'>
            <Core.Container>
                <div className="flex flex-col justify-between items-start gap-x-8 md:gap-x-16 pt-4 sm:pt-8 md:pt-14 pb-5 sm:pb-10 md:pb-20">
                    {data?.map((value, index) =>
                        <MediaTextSection key={value * 2} value={value} index={index} length={data?.length} />
                    )}
                </div>
            </Core.Container>
        </section>
    )
}

export default AppFeaturesDescription