import React, { useState } from 'react'
import { Core } from '..';
import { EquifaxCreditReports, ExperianCreditReports, TransUnionCreditReports, TransunionReportDetails } from '../../data';

function CreditReports({ data }) {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section>
            <div className="items-center mx-auto max-full">
                <div className="justify-center w-full max-auto">
                    <div className="justify-start w-full text-left">
                        <div className='flex flex-col justify-center items-center'>
                            <ul className="flex gap-3 text-gray-500 bg-white bg-opacity-40 rounded-full p-[5px] mb-6">
                                <li className="-mb-px">
                                    <a
                                        href="#_"
                                        className={`inline-block px-10 py-2.5 text-[17px] leading-[22px] uppercase rounded-full ${activeTab === 'tab1' ? 'text-white bg-green font-bold' : 'font-semibold'}`}
                                        onClick={() => handleTabChange('tab1')}
                                    >
                                        TransUnion
                                    </a>
                                </li>
                                <li className="-mb-px">
                                    <a
                                        href="#_"
                                        className={`inline-block px-10 py-2.5 text-[17px] leading-[22px] uppercase rounded-full ${activeTab === 'tab2' ? 'text-white bg-green font-bold' : 'font-semibold'}`}
                                        onClick={() => handleTabChange('tab2')}
                                    >
                                        Equifax
                                    </a>
                                </li>
                                <li className="-mb-px">
                                    <a
                                        href="#_"
                                        className={`inline-block px-10 py-2.5 text-[17px] leading-[22px] uppercase rounded-full ${activeTab === 'tab3' ? 'text-white bg-green font-bold' : 'font-semibold'}`}
                                        onClick={() => handleTabChange('tab3')}
                                    >
                                        Experian
                                    </a>
                                </li>
                            </ul>
                            <div className="w-full">
                                <div className={`${activeTab === 'tab1' ? 'block' : 'hidden'}`}>
                                    <div className='flex gap-x-5'>
                                        <Core.Card cardNumber={7} data={TransUnionCreditReports.creditReport} />
                                        <Core.Card cardNumber={8} data={TransUnionCreditReports.personalInformation} />
                                    </div>
                                </div>
                                <div className={`${activeTab === 'tab2' ? 'block' : 'hidden'}`}>
                                    <div className='flex gap-x-5'>
                                        <Core.Card cardNumber={7} data={EquifaxCreditReports.creditReport} />
                                        <Core.Card cardNumber={8} data={EquifaxCreditReports.personalInformation} />
                                    </div>
                                </div>
                                <div className={`${activeTab === 'tab3' ? 'block' : 'hidden'}`}>
                                    <div className='flex gap-x-5'>
                                        <Core.Card cardNumber={7} data={ExperianCreditReports.creditReport} />
                                        <Core.Card cardNumber={8} data={ExperianCreditReports.personalInformation} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreditReports