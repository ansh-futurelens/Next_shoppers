import React from 'react';
import AppLayout from '../../app/layouts/AppLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Header from '@/app/components/Header';

function Home() {
  const router = useRouter();
  const isSidebarOpen = useSelector((state) => state.central.isSidebarOpen);
  const dispatch = useDispatch();

  return (
    <AppLayout>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <h1 className="text-3xl font-bold">Welcome to Dashboard!</h1>
      </main>
    </AppLayout>
  );
}

export default Home;
