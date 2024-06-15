

function Slider({ data, sliderNumber }) {

    
    const getTooltipPosition = (value) => {
        // Calculate the position of the tooltip based on the value of the slider
        // Implement your logic to calculate the position here
        // For example, adjust top and left based on the slider value

        // Sample logic to position the tooltip
        const topPosition = 30 + value * 0.1; // Adjust these values as per your requirement
        const leftPosition = 20 + value * 0.05; // Adjust these values as per your requirement

        return {
            top: `${topPosition}px`,
            left: `${leftPosition}%`,
        };
    };



    const renderSlider = () => {
        switch (sliderNumber) {
            case 1:
                return (
                    <div className='bg-white rounded-[5px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] px-8 pt-10 pb-7 mt-6'>
                        <div className="relative font-medium">
                            <label className='text-[16px] leading-[19px] font-bold'>
                                Poor
                            </label>
                            <input
                                id="labels-range-input7"
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                type="range"
                                min="300"
                                max="850"
                                value={data}
                            />
                            <div className='flex justify-between pt-3'>
                                <span className="text-sm text-gray-500 dark:text-gray-400">300</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">850</span>
                            </div>
                            <div id={`slider-tooltip${sliderNumber}`} className="absolute bg-green text-white text-[16px] leading-[15px] font-bold px-3 py-2 rounded-full pointer-events-none">
                                {data}
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="relative font-medium mt-12 mb-4">
                        <input
                            id="labels-range-input8"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                            type="range"
                            min="0"
                            max="100000"
                            value={data}
                        />
                        <div className='flex justify-between pt-3'>
                            <span className="text-sm text-gray-500 dark:text-gray-400">0</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">$100,000</span>
                        </div>
                        <div id="slider-tooltip8"
                            className="absolute h-[30px] bg-green text-white text-[16px] leading-[15px] font-bold px-3 py-2 rounded-full -top-4  min-w-[54px] text-center transform -translate-x-1/2 pointer-events-none
                                    before:absolute before:z-[-1] before:w-[12px] before:h-[12px] before:bg-green before:top-[24px] before:left-[40%] before:rotate-45
                                ">
                            {data}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };
    return <>{renderSlider()}</>;
}

export default Slider; 