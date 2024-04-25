import React from 'react';
import { setIsSidebarOpen } from '../redux/slices/centralSlice';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  MainSidebar,
  SettingsSidebar,
  BottomSidebar,
} from '../utils/constance/constants';
import Cookies from 'js-cookie';
function Sidebar() {
  const isSidebarOpen = useSelector((state) => state.central.isSidebarOpen);
  const dispatch = useDispatch();
  const router = useRouter();
  const { pathname } = router;

  const toggleSidebar = () => {
    dispatch(setIsSidebarOpen(!isSidebarOpen));
  };
  const handleLogout = () => {
    Cookies.remove('shoppersToken');
    router.push('/login');
  };
  return (
    <div
      className={`sidebar bg-[#ffffff] text-white h-screen w-64 flex flex-col border-r-2 border-[#f5f6f6]`}
    >
      <header className="bg-[#ffffff]  border-b-2 border-[#f5f6f6]">
        <div className="flex justify-center h-16  items-center ">
          <Image
            src="/assets/logo.png"
            alt="Company Logo"
            width={130}
            height={100}
          />
        </div>
      </header>

      <aside
        id="default-sidebar"
        className="w-64 border-r-2 border-[#f5f6f6]"
        aria-label="Sidebar"
      >
        <div className="px-3 py-4 overflow-y-auto bg-[#ffffff]">
          <ul className="space-y-2 font-medium">
            <h1 className="font-semibold text-[#88898A] text-xs antialiased px-2  uppercase">
              Main
            </h1>
            {MainSidebar.map((item, index) => (
              <li
                key={index}
                className={`group rounded-lg hover:bg-[#4256C6] ${
                  pathname === item.path
                    ? 'bg-[#4256C6] text-white group-hover:invert'
                    : ''
                }`}
              >
                <Link href={item.path}>
                  <div
                    className="flex items-center p-2 text-gray-900 rounded-lg group-hover:text-white "
                    onClick={toggleSidebar}
                  >
                    <Image
                      src={item.svg}
                      alt="Company Logo"
                      width={15}
                      height={15}
                      className={`group-hover:invert ${
                        pathname === item.path ? 'invert' : ''
                      }`}
                    />
                    <span
                      className={`ms-3 font-medium  text-sm antialiased ${
                        pathname === item.path ? 'text-white' : 'text-[#565D6A]' // Add conditional class here
                      } group-hover:text-white`}
                    >
                      {item.title}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-3  overflow-y-auto bg-[#ffffff]">
          <ul className="space-y-2 font-medium">
            <h1 className="font-semibold text-[#88898A] text-xs antialiased px-2  uppercase">
              Settings
            </h1>
            {SettingsSidebar.map((item, index) => (
              <li
                key={index}
                className={`group rounded-lg hover:bg-[#4256C6] ${
                  pathname === item.path
                    ? 'bg-[#4256C6] text-white group-hover:invert'
                    : ''
                }`}
              >
                <Link href={item.path}>
                  <div
                    className="flex items-center p-2 text-gray-900 rounded-lg group-hover:text-white "
                    onClick={toggleSidebar}
                  >
                    <Image
                      src={item.svg}
                      alt="Company Logo"
                      width={15}
                      height={15}
                      className={`group-hover:invert ${
                        pathname === item.path ? 'invert' : ''
                      }`}
                    />
                    <span
                      className={`ms-3 font-medium  text-sm antialiased ${
                        pathname === item.path ? 'text-white' : 'text-[#565D6A]'
                      } group-hover:text-white`}
                    >
                      {item.title}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Additional Bottom Sidebar */}
      <div className="px-3 py-4 overflow-y-auto bg-[#ffffff] mt-">
        <ul className="space-y-2 font-medium">
          {BottomSidebar.map((item, index) => (
            <li
              key={index}
              className={`group rounded-lg hover:bg-[#4256C6] ${
                pathname === item.path
                  ? 'bg-[#4256C6] text-white group-hover:invert'
                  : ''
              }`}
            >
              <div
                className="flex items-center p-2 text-gray-900 rounded-lg group-hover:text-white"
                onClick={handleLogout}
              >
                <Image
                  src={item.svg}
                  alt="Logout Icon"
                  width={15}
                  height={15}
                  className={`group-hover:invert ${
                    pathname === item.path ? 'invert' : ''
                  }`}
                />
                <span
                  className={`ms-3 font-medium  text-sm antialiased ${
                    pathname === item.path ? 'text-white' : 'text-[#565D6A]'
                  } group-hover:text-white`}
                >
                  {item.title}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
