import { useState } from 'react';

function Slider({ min, max, step, value }) {   
    let _value = parseInt(value)
    const getTooltipStyle = () => {
        const percentage = ((_value - min) / (max - min)) * 100;
        return { left: `calc(${percentage}%)` };
    };
    return (
        <div className="relative w-full mt-14 pb-4">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={_value}
                className="slider  tooltip w-full h-2 rounded appearance-none bg-gray-300 outline-none"
            />
            <div className='flex justify-between pt-1'>
                <span className="text-sm text-gray-500 dark:text-gray-400">0</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">$100,000</span>
            </div>
            <div
                className=" absolute    -translate-y-full 
                  h-[30px] bg-green text-white text-[16px] leading-[15px] font-bold px-3 py-2 rounded-full -top-4  min-w-[54px] text-center transform -translate-x-1/2 pointer-events-none
                before:absolute before:z-[-1] before:w-[12px] before:h-[12px] before:bg-green before:top-[24px] before:left-[40%] before:rotate-45"
                style={getTooltipStyle()}
            >
                ${parseInt(_value).toLocaleString()}
            </div>
        </div>
    );
}

export default Slider;
