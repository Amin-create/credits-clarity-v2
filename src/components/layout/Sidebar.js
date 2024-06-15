import logo from "../../assets/images/logo/logo-white.png"
import { NavLink, useLocation } from 'react-router-dom';
import Icons from '../../components/icons';

const NavItem = ({ value, slug }) => {
    const pathParts = slug.split('/');
    const _slug = pathParts[pathParts.length - 1]; 
    let path = value?.path; // Assuming value is an object

    if (path && path.startsWith('/')) {
        path = path.substring(1); // Remove the first character if it's '/'
    }
    return (
        <li className='pb-2'>
            <NavLink
                to={value?.path}
                className={`flex justify-start items-center gap-x-2  ${path === _slug ? "text-green bg-dark-blue border-r-[5px] border-green" : "text-dark-blue border-[transparent]"} text-[16px] border-r-[5px]
                 hover:text-green hover:bg-dark-blue hover:border-r-[5px] hover:border-green
                 font-medium
                   transition-all rounded-tl-[12px] rounded-bl-[12px] rounded-tr-none rounded-br-none px-7 py-[16px]`}
            >
                <span className='text-[18px]'>{value?.icon}</span>
                <span className='leading-[19px]'>{value?.name}</span>
            </NavLink>
        </li >
    );
};
function Sidebar({ isSidebarOpen, toggleSidebar, menu }) {


    const location = useLocation();

    return (
        <aside
            className={`${isSidebarOpen ? 'translate-x-0' : ''} 
                fixed md:sticky top-0 z-50 min-w-[264px] max-w-[264px] h-screen
                text-black bg-white 
                -translate-x-full md:translate-x-0 transition-all shadow-md
                flex flex-col justify-between 
            `}
        >
            <div className="flex flex-col justify-start h-[86%]">
                <div className="relative flex justify-center items-center h-[124px] pt-6 pb-6 px-2">
                    <div class="absolute  left-0 top-0 w-full h-full bg-gradient-to-b from-blue-500 to-gr-a-2 contrast-75"></div>
                    <img src={logo} className='relative max-w-[200px]' alt="logo" />
                    <span className={`absolute top-[18px] right-[15px] ${isSidebarOpen ? 'block' : 'hidden'}  md:hidden text-white text-[20px] cursor-pointer bg-purple-1`}
                        onClick={toggleSidebar}>
                        {/* <Icons.GoChevronLeft /> */}
                        <Icons name="BurgerMenu" />

                    </span>
                </div>
                <ul className="max-h-[610px] overflow-y-scrol l scrollba r p-4 pr-0 pt-10">
                    {menu.map((value) => {
                        return (
                            <NavItem key={value * 2} value={value} slug={location?.pathname} />
                        )
                    })}
                </ul>
            </div>
            <a className='px-5 pb-3'>
                <NavLink
                    to={'/login'}
                    className='flex justify-start items-center gap-x-2 text-dark-black hover:opacity-80 text-[14px] font-semibold hover:bg-gray-100 transition-all rounded-[8px] px-3 py-[10px]'
                >
                    <span className='text-[18px]'>
                        <Icons name="Logout" />
                    </span>
                    <span>Logout</span>
                </NavLink>
            </a>
            <p className='text-gray-1 px-8 pb-10'>© 2023 Credit Clarity </p>
        </aside>
    )
}

export default Sidebar