import React from 'react';
import { useDispatch } from 'react-redux';
import { IoIosNotificationsOutline } from 'react-icons/io';
import SearchBar from './SearchBar';
import SidebarToggleButton from './buttons/SidebarToggleButton';
import ProfileSection from './sections/ProfileSection';

const Topbar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <header class="bg-[#FFFFFF] shadow ">
        <div class="relative flex justify-between h-16 ">
          <div class="relative z-0 flex items-center flex-1 px-2 sm:absolute sm:inset-0 ">
            {/* SearchBar */}
            <SearchBar />
            {/* Toogle button for mobile screen */}
            <SidebarToggleButton />

            <div className="absolute right-10 flex ml-5  items-center space-x-2">
              <button type="button" class="relative p-1  ">
                <IoIosNotificationsOutline className="text-3xl ml-2 opacity-50 " />
              </button>
              <ProfileSection
                data={{
                  name: 'Salvatore Weber',
                  email: 'salvatore_weber@yahoo.com',
                  imageUrl:
                    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww',
                }}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Topbar;
