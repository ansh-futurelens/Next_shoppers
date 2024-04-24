import React from 'react';
import AppLayout from '../../app/layouts/AppLayout';
import { toggleSidebar } from '../../app/redux/slices/centralSlice'; // Updated import
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();
  const isSidebarOpen = useSelector((state) => state.central.isSidebarOpen);
  const dispatch = useDispatch();
  const handleLogout = () => {
    // Remove token from cookies
    Cookies.remove('shoppersToken');
    router.push('/login');
  };
  return (
    <AppLayout>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        {/* Your page content goes here */}
        <button onClick={handleLogout}>Logout</button>
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="all-center text-gray-500 h-8 w-8 "
        >
          Toggle Sidebar
        </button>
        <h1 className="text-3xl font-bold">
          Welcome to Next.js with Sidebar Layout!
        </h1>
      </main>
    </AppLayout>
  );
}

export default Home;
