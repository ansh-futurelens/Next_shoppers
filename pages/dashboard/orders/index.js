import AppLayout from '@/app/layouts/AppLayout'
import React from 'react'
import Header from '@/app/components/Header';

const index = () => {
  return (
    <AppLayout>
    <Header/>
    <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <h1 className="text-3xl font-bold">Welcome to Orders Screen!</h1>
      </main>
    </AppLayout>
  )
}

export default index