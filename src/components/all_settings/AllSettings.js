import React, { useState } from 'react'
import MyProfile from './MyProfile';
import ChangePassword from './ChangePassword';
import Subscription from './Subscription';
import Faq from './Faq';

function AllSettings() {
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
                            <ul className="flex gap-3 text-gray-500 p-[5px] mb-4">
                                <li className="-mb-px">
                                    <a
                                        href="#_"
                                        className={`inline-block mx-3 py-1.5 text-[17px] leading-[22px] capitalize font-extrabold ${activeTab === 'tab1' ? 'text-green border-b-[4px] border-green' : 'text-black'}`}
                                        onClick={() => handleTabChange('tab1')}
                                    >
                                        My Profile
                                    </a>
                                </li>
                                <li className="-mb-px">
                                    <a
                                        href="#_"
                                        className={`inline-block mx-3 py-1.5 text-[17px] leading-[22px] capitalize font-extrabold ${activeTab === 'tab2' ? 'text-green border-b-[4px] border-green' : 'text-black'}`}
                                        onClick={() => handleTabChange('tab2')}
                                    >
                                        Change Password
                                    </a>
                                </li>
                                <li className="-mb-px">
                                    <a
                                        href="#_"
                                        className={`inline-block mx-3 py-1.5 text-[17px] leading-[22px] capitalize font-extrabold ${activeTab === 'tab3' ? 'text-green border-b-[4px] border-green' : 'text-black'}`}
                                        onClick={() => handleTabChange('tab3')}
                                    >
                                        Subscription
                                    </a>
                                </li>
                                <li className="-mb-px">
                                    <a
                                        href="#_"
                                        className={`inline-block mx-3 py-1.5 text-[17px] leading-[22px] capitalize font-extrabold ${activeTab === 'tab4' ? 'text-green border-b-[4px] border-green' : 'text-black'}`}
                                        onClick={() => handleTabChange('tab4')}
                                    >
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                            <div className="w-full">
                                <div className={`${activeTab === 'tab1' ? 'block' : 'hidden'}`}>
                                    <MyProfile />
                                </div>
                                <div className={`${activeTab === 'tab2' ? 'block' : 'hidden'}`}>
                                    <ChangePassword />
                                </div>
                                <div className={`${activeTab === 'tab3' ? 'block' : 'hidden'}`}>
                                    <Subscription />
                                </div>
                                <div className={`${activeTab === 'tab4' ? 'block' : 'hidden'}`}>
                                    <Faq />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllSettings