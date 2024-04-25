// components/layout/AppLayout.js
import Topbar from '../components/Topbar';
import { Toaster } from 'react-hot-toast';
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster />
      <Topbar />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default MainLayout;
