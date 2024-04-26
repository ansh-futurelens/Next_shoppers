// components/layout/AppLayout.js
import Topbar from '../components/Topbar';
import { Toaster } from 'react-hot-toast';
const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Toaster />
      <Topbar />
      <main >{children}</main>
    </div>
  );
};

export default MainLayout;
