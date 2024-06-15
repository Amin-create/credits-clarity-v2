import { NavLink, useLocation } from "react-router-dom";
import { Container, Dropdown } from "../core";
import Icons from "../icons";
import logo from "../../assets/images/logo/logo.png";

const menu = [
  {
    icon: <Icons name="Home" />,
    path: "/dashboard",
    name: "Home",
  },
  {
    icon: <Icons name="Graph" />,
    path: "credit-reports",
    name: "Credit Reports",
  },
  {
    icon: <Icons name="Bell3" />,
    path: "notification",
    name: "Notification",
  },
  {
    icon: <Icons name="Setting2" />,
    path: "setting",
    name: "Setting",
  },
];

function Header() {
  const location = useLocation();
  let slug = location.pathname;
  const pathParts = slug.split("/");
  const _slug = pathParts[pathParts.length - 1];
  let path = menu?.path;

  const NavItem = ({ value, slug }) => {
    const pathParts = slug.split("/");
    const _slug = pathParts[pathParts.length - 1];
    let path = value?.path; // Assuming value is an object

    if (path && path.startsWith("/")) {
      path = path.substring(1); // Remove the first character if it's '/'
    }
    return (
      <li className="">
        <NavLink
          to={value?.path}
          className={`flex justify-start items-center gap-x-2  ${
            path === _slug ? "text-green" : "text-dark-blue "
          } text-[18px] 
                 hover:text-green 
                 font-bold
                   transition-all px-3 py-[5px]`}
        >
          <span className="text-[18px]">{value?.icon}</span>
          <span className="leading-[19px]">{value?.name}</span>
        </NavLink>
      </li>
    );
  };

  return (
    <header className="border-l-[1px] border-gray-5 bg-white shadow-md">
      <Container className="relative flex items-center justify-between w-full h-[98px] text-gray px- 6 py- 3">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            {/* Logo */}
            <img src={logo} alt="Logo" className="w-[86px] mr-4" />
          </div>

          <div className="flex justify-end items-center gap-x-20">
            <nav className=" w-full">
              <ul className="flex items-center space-x-4">
                {menu.map((value) => {
                  return (
                    <NavItem
                      key={value * 2}
                      value={value}
                      slug={location?.pathname}
                    />
                  );
                })}
              </ul>
            </nav>

            {/* Sign In Button */}
            <a>
              <NavLink
                to={"/login"}
                // className="flex justify-start items-center gap-x-2 text-dark-black hover:opacity-80 text-[18px] font-semibold hover:bg-gray-100 transition-all rounded-[8px] px-3 py-[10px]"
                className={`flex justify-start items-center gap-x-2 
                 text-dark-blue 
                   text-[18px] 
                         hover:text-green 
                         font-bold
                           transition-all rounded-tl-[12px] rounded-bl-[12px] rounded-tr-none rounded-br-none px-3 py-[5px]`}
              >
                <span className="">
                  <Icons name="Login" />
                </span>
                <span className="overflow-hidden whitespace-nowrap">
                  Sign In
                </span>
              </NavLink>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
