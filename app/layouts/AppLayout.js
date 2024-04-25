// components/AppLayout.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import { setIsSidebarOpen, toggleSidebar } from '../redux/slices/centralSlice';
import { useDispatch, useSelector } from 'react-redux';
import Topbar from '../components/Topbar';

function AppLayout({ children }) {
  const isSidebarOpen = useSelector((state) => state.central.isSidebarOpen);
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleSetIsSidebarOpen = (isOpen) => {
    dispatch(setIsSidebarOpen(isOpen));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${isSidebarOpen ? 'overflow-hidden' : ''} h-screen`}
    >
      {/* backdrop */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => handleSetIsSidebarOpen(false)}
            className="bg-black/60 absolute top-0 left-0 md:hidden w-full h-screen z-20"
          />
        )}
      </AnimatePresence>
      {/* mobile sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, type: 'spring', bounce: 0.25 }}
            className="absolute md:hidden z-30 top-0 left-0 w-64"
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex h-screen overflow-hidden">
        <div className="hidden md:block w-64">
          <Sidebar />
        </div>
        <div className="flex-1 min-w-0 overflow-auto">{children}</div>
      </div>
    </motion.div>
  );
}

export default AppLayout;
