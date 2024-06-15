import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../icons';

function Breadcrumb({
    heading,
    breadcrumb
}) {
    return (
        <div className='mt-3 mb-5'>
            <h5 className='text-black-2 text-[32px] leading-[40px] font-bold'>{heading}</h5>
            <ol className="flex items-center whitespace-nowrap mt-2" aria-label="Breadcrumb">
                {breadcrumb.map((value, index) => {
                    return (
                        <>
                            {value?.link &&
                                <li className="inline-flex items-center">
                                    <a className={`flex items-center ${index + 1 !== breadcrumb.length && 'text-green'} hover:text-green-2 text-[14px] leading-[20px] font-semibold`} >
                                        <NavLink to={value?.link}>{value?.label}</NavLink>
                                    </a>
                                    <span className="text-gray-1 mx-3" >
                                        <Icon name="ChevronRight" size="10px" />
                                    </span>
                                    {/* <svg className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg> */}
                                </li>
                            }
                            {!value?.link &&
                                <li className={`inline-flex items-center ${index + 1 !== breadcrumb.length && 'text-green'} text-gray-1 text-[14px] leading-[20px] font-semibold select-none`}>
                                    {value?.label}
                                    {index + 1 !== breadcrumb.length &&
                                        <>
                                            {/* <svg className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg> */}
                                            <span className="text-gray-1 mx-3" >
                                                <Icon name="ChevronRight" size="10px" />
                                            </span>
                                        </>
                                    }
                                </li>
                            }
                        </>
                    )
                })}
            </ol>
        </div>
    );
}

export default Breadcrumb;
