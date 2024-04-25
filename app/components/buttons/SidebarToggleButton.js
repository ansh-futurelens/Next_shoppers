// SidebarToggleButton.js
import { toggleSidebar } from '@/app/redux/slices/centralSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

const SidebarToggleButton = () => {
  const dispatch = useDispatch();

  return (
    <button
    data-collapse-toggle="mobile-menu-2"
    type="button"
    onClick={() => dispatch(toggleSidebar())}
    class="inline-flex items-center p-2 ml-1 text-sm group text-gray-500 rounded-lg md:hidden border-opacity-20 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 border-[#242424] border-2"
  >
    <span class="sr-only">Open main menu</span>
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="group-hover:invert"
    >
      <path
        d="M12.7857 16.5999L7.35234 11.1666C6.71068 10.5249 6.71068 9.4749 7.35234 8.83324L12.7857 3.3999"
        stroke="#081225"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <svg
      class="hidden w-6 h-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </button>
  );
};

export default SidebarToggleButton;
