
import { Dropdown } from '../core';
import Icons from "../icons"

function Header({ toggleSidebar }) {
    return (
        <header className="relative flex items-center justify-between h-[72px] text-gray border-l-[1px] border-gray-5 bg-white shadow-md px-6 py-3">
            <div className='flex justify-start items-center gap-x-4'>
                <span className="block md:hidden text-[20px] cursor-pointer"
                    onClick={toggleSidebar}>
                    <Icons name="BurgerMenu" />
                </span>
                <h6 className='text-dark-blue text-[22px] leading-[20px] font-semibold'>Welcome, David Derrick</h6>
            </div>
            <div className='flex justify-end items-center gap-x-7'>
                ..
                {/* <span className='text-gray-6 text-[19px] cursor-pointer'>
                    <Icons name="Search" />
                </span>
                <div class="relative cursor-pointer">
                    <div class="top-[-11px] absolute left-[13px]">
                        <p class="flex h-1 min-w-1 items-center justify-center text-white text-[10px] rounded-full bg-red-500 px-[5px] py-2">3</p>
                    </div>
                    <span className='text-gray-6 text-[19px]'>
                        <Icons name="Bell2" />
                    </span>
                </div>
                <div class="relative cursor-pointer">
                    <div class="top-[-11px] absolute left-[13px]">
                        <p class="flex h-1 min-w-1 items-center justify-center text-white text-[10px] rounded-full bg-red-500 px-[5px] py-2">64</p>
                    </div>
                    <span className='text-gray-6 text-[19px]'>
                        <Icons name="Envelope" />
                    </span>
                </div>
                <span className='w-[1px] h-[40px] bg-gray-7'>
                </span> */}
            </div>
        </header>
    )
}

export default Header