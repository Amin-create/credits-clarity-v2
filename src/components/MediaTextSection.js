import React from 'react';
import DashedLines from "../assets/images/dashed-lines.png"

function MediaTextSection({ value, index, length }) {
    const isEvenIndex = index % 2 === 0;
    return (
        <>
            <div className={`flex  ${isEvenIndex === true ? 'flex-col': "flex-col-reverse"} md:flex-row justify-between pt-6 sm:pt-12 pb-2 sm:pb-3`}>
                {isEvenIndex === true ?
                    <>
                        <div className='relative flex justify-center items-center w-full md:w-[40%]'>
                            <div className={`absolute z-[-1] w-[250px] sm:w-full h-[250px] sm:h-full max-w-[356px] max-h-[356px] rounded-[300px] bg-gradient-to-br from-green to-[#ffffff00] opacity-[0.4] ${index === 0 && "left-8"}`}></div>
                            <img data-aos="fade-right" className="w-[60%] sm:w-[auto]" src={value.img} alt="App Screenshot" />
                        </div>
                        <div className='flex justify-start items-center w-full md:w-[60%] pr-0 md:pr-24'>
                            <div>
                                <h4 data-aos="fade-left" className="text-dark-blue text-[18px] sm:text-[22px] leading-[50px] sm:leading-[70px] tracking-[-1px] font-bold">{value?.heading}</h4>
                                {value?.texts.map((value) => <p data-aos="fade-left" className="text-dark-blue text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[30px] font-regular mb-4">{value}</p>)}
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className='flex justify-start items-center w-full md:w-[60%] pr-0 md:pr-24'>
                            <div>
                                <h4 data-aos="fade-right" className="text-dark-blue text-[18px] sm:text-[22px] leading-[50px] sm:leading-[70px] tracking-[-1px] font-bold">{value?.heading}</h4>
                                {value?.texts.map((value) => <p data-aos="fade-right" className="text-dark-blue text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[30px] font-regular mb-4">{value}</p>)}
                            </div>
                        </div>
                        <div className='relative flex justify-center items-center w-full md:w-[40%]'>
                            <div className='absolute z-[-1] w-[250px] sm:w-full h-[250px] sm:h-full max-w-[356px] max-h-[356px] rounded-[300px] bg-gradient-to-br from-green to-[#ffffff00] opacity-[0.4]'></div>
                            <img data-aos="fade-left" className="w-[60%] sm:w-[auto]" src={value.img} alt="App Screenshot" />
                        </div>
                    </>
                }
            </div>
            {index !== (length - 1) &&
                <img className="" src={DashedLines} alt="Separator Line" />
            }
        </>
    )
}

export default MediaTextSection