import React, { useState } from 'react'

function Accordion({ data }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            {data.map((value, index) => {
                const isLastItem = index === data.length - 1;

                return (
                    <div className={`${activeIndex === index ? 'bg-white' : ''}`}>
                        {/* -------- */}
                        {/* these two conditions are temporary just for frontend */}
                        {index === 0 &&
                            <h4 className='text-[20px] leading-[23px] font-extrabold px-[70px] pt-8'>
                                Today
                            </h4>
                        }
                        {index === 2 &&
                            <h4 className='text-[20px] leading-[23px] font-extrabold px-[70px] pt-8'>
                                Yesterday
                            </h4>
                        }
                        {/* -------- */}
                        <div className={`hs-accordion ${activeIndex === index ? 'active' : ''} px-[70px] py-7 ${isLastItem ? '' : 'border-b-[1px]'}`} key={value.id}>
                            <button
                                className="text-[16px] leading-[24px] font-bold mb-4"
                                aria-controls={`hs-basic-collapse-${index + 1}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                {value.title}
                            </button>
                            <div
                                id={`hs-basic-collapse-${index + 1}`}
                                className={`hs-accordion-content transition-all duration-300  ${activeIndex === index ? 'w-full' : 'max-h-0'}`}
                                aria-labelledby={`hs-basic-heading-${index + 1}`}
                            >
                                <div className="">
                                    <p className="text-[16px] leading-[24px] font-regular">{value.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default Accordion