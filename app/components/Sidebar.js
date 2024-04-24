import React from 'react';
import { setIsSidebarOpen, toggleSidebar } from '../redux/slices/centralSlice';
import { useDispatch, useSelector } from 'react-redux';
function Sidebar() {
  const isSidebarOpen = useSelector((state) => state.central.isSidebarOpen);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`sidebar  bg-gray-800 text-white h-screen w-64 flex flex-col justify-center items-center`}
    >
      <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
    </div>
  );
}

export default Sidebar;
