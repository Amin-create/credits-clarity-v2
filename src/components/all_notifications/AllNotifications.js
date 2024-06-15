import React from 'react'
import Accordion from '../accordion/Accordion';

function AllNotifications({ data }) {

    return (
        <section data-aos="fade- up" className={`w-full h-fit rounded-[18px] md:rounded-[24px] overflow-hidden bg-white bg-opacity-40 `}>
            <Accordion data={data} />
        </section>
    )
}

export default AllNotifications