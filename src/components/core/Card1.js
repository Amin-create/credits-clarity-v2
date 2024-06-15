
import { useState } from 'react';
import styles from '../../style';
import { Core } from '..';
import Icon from '../icons';
import Slider from './Slider';
import { Link } from 'react-router-dom';
import Chart from './Chart';

// function Card({ data, card1, card2, card3, card4, card5, card6 }) {
function Card1({ data, cardNumber }) {
    const [active, setActive] = useState(1); // State to track the active span
    const handleSpanClick = (index) => {
        setActive(index); // Set the clicked span as active
    };
    const renderCard = () => {
        switch (cardNumber) {
            case 1:
                return (
                    <div data-aos="fade- up" className={`w-full ld:w-[33%] text-center rounded-[26px] bg-gradient-to-r from-white-2 to-white-2 gr-b-1 b2 pt-4 md:pt-8 pb-7 md:pb-14 px-3 md:px-6 ${styles.cardHover}`}>
                        <h3 className='text-[22px] leading-[70px] font-bold'>
                            {data?.title}
                        </h3>
                        <p className='text-[14px] md:text-[18px] leading-[20px] md:leading-[25px] font-regular'>
                            {data?.description}
                        </p>
                    </div>
                );
            case 2:
                return (
                    <div data-aos="fade- up" className={`w-full ld:w-[33%] rounded-tr-[35px] md:rounded-tr-[60px] rounded-bl-[35px] md:rounded-bl-[60px] bg-white-1 py-10 md:py-16 px-6 md:px-10 ${styles.cardHover}`}>
                        <p className='text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] font-regular'>
                            {data?.description}
                        </p>
                    </div>
                );
            case 3:
                return (
                    <div data-aos="fade- up" className={`w-full ld:w-[33%] rounded-[6px] md:rounded-[6px] bg-white-1 pt-10 md:pt-[30px] pb-10 md:pb-[50px] px-6 md:px-[65px] ${styles.cardHover}`}>
                        <h3 className='text-[32px] leading-[70px] font-bold'>
                            {data?.title}
                        </h3>
                        <p className='text-[14px] md:text-[16px] leading-[24px] md:leading-[28px] font-regular'>
                            {data?.description}
                        </p>
                    </div>
                );
            case 4:
                return (
                    <div data-aos="fade- up" className={`flex justify-between items-center w-full ld:w-[33%] rounded-[6px] md:rounded-[6px] bg-white-1 pt-3 md:pt-[10px] pb-8 md:pb-[40px] px-6 md:px-[65px] $ {styles.cardHover}`}>
                        <div className='flex flex-col items-start gap-y-1 w-[35%]'>
                            <h3 className='text-[32px] leading-[70px] font-bold'>
                                {data?.title}
                            </h3>
                            <Core.Button greenIconicXs to={`${data?.title.toLowerCase()}/details`} >View Detail</Core.Button>
                        </div>
                        <div className='flex flex-col items-center gap-y-1 w-[32%]'>
                            <Core.Chart data={data?.creditHealth} type="Meter" />
                            <h6 className='text-[14px] leading-[16px] font-medium'>Credit Health</h6>
                        </div>
                        <div className='flex flex-col items-center gap-y-1 w-[32%] border-l-[2px] border-gray-3'>
                            <Core.Chart data={data?.creditScore} type="Doughnut" />
                            <h6 className='text-[14px] leading-[16px] font-medium'>Credit Score</h6>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div data-aos="fade- up" className={`w-full h-fit rounded-[18px] md:rounded-[24px] bg-white bg-opacity-40 pt-10 md:pt-[45px] pb-10 md:pb-[35px] pl-6 md:pl-[55px] pr-4 md:pr-[35px] $ {styles.cardHover}`}>
                        <div className='flex justify-between gap-x-2'>
                            <div className='flex flex-col gap-y-4'>
                                <h3 className='text-[32px] leading-[40px] font-bold'>
                                    {data?.title}
                                </h3>
                                <div className=''>
                                    <span className='text-black text-[31px] leading-[36px] font-bold'>{data?.score}</span>
                                    <span className='text-black text-[16px] leading-[19px] font-medium ml-1'>out of 900</span>
                                </div>

                                <div>
                                    <span className='text-green text-[16px] leading-[19px] font-medium ml-1'><span className='text-[22px]'>▲</span>{data?.points} Points </span>
                                    <span className='text-black text-[16px] leading-[19px] font-medium ml-1'>Check daily</span>
                                </div>
                            </div>
                            <Core.Button link >Refresh Score</Core.Button>
                        </div>
                        <Core.Chart data={data?.creditScore} type="line" />
                        <div className="flex justify-between w-full pt-5">
                            <span
                                className={`text-[14px] leading-[16px] cursor-pointer rounded-full px-3.5 py-1 ${active === 1 && 'bg-green text-white'}`}
                                onClick={() => handleSpanClick(1)}
                            >
                                1 M
                            </span>
                            <span
                                className={`text-[14px] leading-[16px] cursor-pointer rounded-full px-3.5 py-1 ${active === 2 && 'bg-green text-white'}`}
                                onClick={() => handleSpanClick(2)}
                            >
                                3 M
                            </span>
                            <span
                                className={`text-[14px] leading-[16px] cursor-pointer rounded-full px-3.5 py-1 ${active === 3 && 'bg-green text-white'}`}
                                onClick={() => handleSpanClick(3)}
                            >
                                6 M
                            </span>
                            <span
                                className={`text-[14px] leading-[16px] cursor-pointer rounded-full px-3.5 py-1 ${active === 4 && 'bg-green text-white'}`}
                                onClick={() => handleSpanClick(4)}
                            >
                                9 M
                            </span>
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div data-aos="fade- up" className={`w-full h-fit rounded-[18px] md:rounded-[24px] bg-white bg-opacity-40 pt-10 md:pt-[45px] pb-10 md:pb-[30px] pl-6 md:pl-[55px] pr-4 md:pr-[35px] $ {styles.cardHover}`}>

                        <h3 className='text-[22px] leading-[25px] font-bold'>
                            {data?.title}
                        </h3>
                        <p className='text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] font-medium mt-3 mb-1'>
                            {data?.description}
                        </p>

                        {data?.factors?.map(value => {
                            const containsVeryGood = value?.status && value.status.includes('Very Good');
                            const containsGood = value?.status && value.status.includes('Good');
                            const containsExcellent = value?.status && value.status.includes('Excellent');

                            return (
                                <div className='flex justify-between items-start border-b-[1px] border-gray-6 pt-[10px] pb-[13px] md:pt-[18px] md:pb-[22px]'>
                                    <div className='flex flex-col gap-y-1'>
                                        <span className='text-black text-[17px] leading-[28px] font-bold'>{value?.title}</span>
                                        <span className={`
                                        relative text-black text-[13px] leading-[15px] font-medium ml-3.5
                                        before:absolute 
                                        before:left-[-12px] 
                                        before:bottom-[2px] 
                                        before:w-[7px] 
                                        before:h-[7px]                                          
                                        ${containsVeryGood && "before:bg-green-3"}
                                        ${containsGood && "before:bg-green"}
                                        ${containsExcellent && "before:bg-orange"}
                                        before:rounded-full
                                        `}>{value?.status}</span>
                                    </div>
                                    <span className='text-black text-[16px] leading-[26px] font-medium'>{value?.value}</span>
                                </div>
                            )
                        })}
                        <Core.Button greenIconicXl className="mt-7 mx-auto">View Full Credit Report</Core.Button>
                    </div>
                );
            case 7:
                return (
                    <div data-aos="fade- up" className={`w-full h-fit rounded-[18px] md:rounded-[24px] bg-white bg-opacity-40 pt-10 md:pt-[40px] pb-10 md:pb-[50px] px-6 md:px-[55px]   $ {styles.cardHover}`}>
                        <h3 className='text-[22px] leading-[25px] font-bold'>
                            {data?.title}
                        </h3>
                        <div className='flex justify-between items-center gap-x-6 pt-4'>
                            <div className=''>
                                <span className='text-black text-[31px] leading-[36px] font-bold'>{data?.score}</span>
                            </div>
                            <div className='flex items-center gap-x-3 w-[5 0%]'>
                                <span className='text-black text-[12px] leading-[14px] font-semibold'>08-10-2023</span>
                                <div className='flex justify-center items-center min-w-[60px] min-h-[60px] text-green rounded-full bg-white'>
                                    <Icon name={"Calender2"} size="29px" />
                                </div>
                            </div>
                        </div>
                        <Slider min={300} max={850} sliderNumber={1} value={data?.score} />

                        {/* <div className='bg-white rounded-[5px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] px-8 pt-10 pb-7 mt-6'>
                            <div className="relative font-medium">
                                <label className='text-[16px] leading-[19px] font-bold'>
                                    Poor
                                </label>
                                <input
                                    id="labels-range-input"
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                    type="range"
                                    min="300"
                                    max="850"
                                    value={sliderValue}
                                    onChange={handleSliderChange}
                                />
                                <div className='flex justify-between pt-3'>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">300</span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">850</span>
                                </div>
                                <div id="slider-tooltip"
                                    className="absolute bg-green text-white text-[16px] leading-[15px] font-bold px-3 py-2 rounded-full -top-4  min-w-[54px] text-center transform -translate-x-1/2 pointer-events-none
                                        before:absolute before:z-[-1] before:w-[12px] before:h-[12px] before:bg-green before:top-[24px] before:left-[40%] before:rotate-45
                                    ">
                                    {sliderValue}
                                </div>
                            </div>

                        </div> */}
                    </div>
                );
            case 8:
                return (
                    <div data-aos="fade- up" className={`w-full h-fit rounded-[18px] md:rounded-[24px] bg-white bg-opacity-40 pt-10 md:pt-[40px] pb-10 md:pb-[30px] pl-6 md:pl-[55px] pr-4 md:pr-[35px] $ {styles.cardHover}`}>
                        <h3 className='text-[22px] leading-[25px] font-bold mb-5'>
                            Personal Information
                        </h3>
                        <div className='flex justify-start items-start border-b-[1px] border-gray-6 pt-[10px] pb-[13px] md:pt-[15px] md:pb-[15px]'>
                            <span className={`w-[50%] text-black text-[14px] leading-[23px] font-medium`}>Full Name</span>
                            <span className='w-[50%] text-black text-[15px] leading-[22px] font-bold'>{data?.fullName}</span>
                        </div>
                        <div className='flex justify-start items-start border-b-[1px] border-gray-6 pt-[10px] pb-[13px] md:pt-[15px] md:pb-[15px]'>
                            <span className={`w-[50%] text-black text-[14px] leading-[23px] font-medium`}>Date of Birth</span>
                            <span className='w-[50%] text-black text-[15px] leading-[22px] font-bold'>{data?.dob}</span>
                        </div>
                        <div className='flex justify-start items-start border-b-[1px] border-gray-6 pt-[10px] pb-[13px] md:pt-[15px] md:pb-[15px]'>
                            <span className={`w-[50%] text-black text-[14px] leading-[23px] font-medium`}>Address</span>
                            <span className='w-[50%] text-black text-[15px] leading-[22px] font-bold'>{data?.address}</span>
                        </div>
                        <div className='flex justify-start items-start border-b-[1px] border-gray-6 pt-[10px] pb-[13px] md:pt-[15px] md:pb-[15px]'>
                            <span className={`w-[50%] text-black text-[14px] leading-[23px] font-medium`}>You have {data?.openAccounts} open accounts</span>
                            <span className='w-[50%] text-black text-[15px] leading-[22px] font-bold'>Total Balance: {data?.totalBalance}</span>
                        </div>
                        <h3 className='text-[26px] leading-[30px] font-bold mt-6'>
                            Credit Cards or Credit Lines
                        </h3>
                        <div className='mt-2'>
                            <span className='text-black text-[26px] leading-[30px] font-bold'>{data?.creditUsage}%</span>
                            <span className='text-black text-[16px] leading-[19px] font-semibold ml-1'>Credit Usage</span>
                        </div>
                        <Slider min={0} max={100000} sliderNumber={2} value={data?.amount} amount />
                        <div className='flex flex-col gap-y-2'>
                            {data?.accountsBalance?.map(value => {
                                let bankName;

                                if (value?.title === "Bank of America") {
                                    bankName = "bank-of-america";
                                } else if (value?.title === "Capital One") {
                                    bankName = "capital-one";
                                } else if (value?.title === "U.S. Bancorp") {
                                    bankName = "us-bancorp";
                                }


                                return (
                                    <div className='relative flex justify-between items-center rounded-full overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] pl-6 pr-1 py-1'>
                                        <div class="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-gr-d-1 to-gr-d-2"></div>
                                        <div className='relative z-1 flex flex-col gap-y-1'>
                                            <span className='flex justify-start items-center gap-x-3 text-black text-[17px] leading-[20px] font-bold'>
                                                <Link to={`${bankName}/details`}>
                                                    {value?.title}</Link>
                                                <span className="text-green"><Icon name="ChevronRight" size="12px" /></span>
                                            </span>
                                            <span className='text-dark-blue text-[14px] leading-[16px] font-medium'>{value?.date}</span>
                                        </div>
                                        <div className='relative flex justify-between items-center w-[160px] rounded-full overflow-hidden text-white pl-5 pr-4 py-4'>
                                            <div class="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-gr-a-1 to-gr-a-2"></div>
                                            <span className='relative z-[1]'>
                                                <Icon name="LineCard" />
                                            </span>
                                            <div className='relative z-[1] flex flex-col justify-center items-end'>
                                                <span className='text-[14px] leading-[16px] font-medium'>Balance</span>
                                                <span className='text-[20px] leading-[25px] font-medium'>${value?.amount}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <Core.Button greenIconicXl className="mt-7 mx-auto">Print Report</Core.Button>
                    </div>
                );
            case 9:
                return (
                    <div data-aos="fade- up" className={`w-full h-fit rounded-[18px] md:rounded-[24px] bg-white bg-opacity-40 pt-10 md:pt-[35px] pb-10 md:pb-[40px] px-6 md:px-[55px]   $ {styles.cardHover}`}>
                        <div className='flex justify-between items-end gap-x-2'>
                            <div className='flex flex-col gap-y-2'>
                                <h3 className='text-[22px] leading-[25px] font-bold'>
                                    {data?.title}
                                </h3>
                                <span className='text-[red] text-[16px] leading-[22px] font-medium'>
                                    {data?.status}
                                </span>
                                <div className=''>
                                    <span className='text-black text-[31px] leading-[36px] font-bold'>{data?.percentage}</span>
                                </div>
                            </div>
                        </div>

                        <Slider min={0} max={100000} sliderNumber={2} value={data?.amount} amount />

                        <div className='flex justify-between gap-x-2'>
                            <div className='flex flex-col gap-y-8 w-full bg-white rounded-[25px] p-4 pt-5'>
                                <span className='text-green'>
                                    <Icon name="Wallet" size="37" />
                                </span>
                                <div className='flex flex-col justify-center items-start'>
                                    <span className='text-[14px] leading-[16px] font-medium'>Balance</span>
                                    <span className='text-[20px] leading-[23px] font-semibold'>${data?.amount}</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-8 w-full bg-white rounded-[25px] p-4 pt-5'>
                                <span className='text-green'>
                                    <Icon name="Wallet" size="37" />
                                </span>
                                <div className='flex flex-col justify-center items-start'>
                                    <span className='text-[14px] leading-[16px] font-medium'>Balance</span>
                                    <span className='text-[20px] leading-[23px] font-semibold'>${data?.amount}</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-8 w-full bg-white rounded-[25px] p-4 pt-5'>
                                <span className='text-green'>
                                    <Icon name="Wallet" size="37" />
                                </span>
                                <div className='flex flex-col justify-center items-start'>
                                    <span className='text-[14px] leading-[16px] font-medium'>Balance</span>
                                    <span className='text-[20px] leading-[23px] font-semibold'>${data?.amount}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                );
            case 10:
                return (
                    <div data-aos="fade- up" className={`w-full h-fit rounded-[18px] md:rounded-[24px] bg-white bg-opacity-40 pt-10 md:pt-[35px] pb-10 md:pb-[45px] px-3 md:px-[45px] $ {styles.cardHover}`}>
                        <h3 className='text-[22px] leading-[25px] font-bold mb-5'>
                            {data.title}
                        </h3>
                        {data.dataList?.map((value, index) => {
                            return (
                                <div key={index * 5} className='flex justify-start items-start border-b-[1px] border-gray-6 pt-[8px] pb-[8px]'>
                                    <span className={`w-[50%] text-black text-[14px] leading-[23px] font-medium`}>{value?.title}</span>
                                    <span className='w-[50%] text-black text-[15px] leading-[22px] font-bold'>{value?.value}</span>
                                </div>
                            )
                        })}
                    </div>
                );

            default:
                return null;
        }
    };

    return <>{renderCard()}</>;



}

export default Card1