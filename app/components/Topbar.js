import Image from 'next/image';
import React from 'react';

const Topbar = () => {
  return (
    <div>
    <header class="bg-[#f9f9f9] shadow">
        <div class="px-2 mx-auto max-w-7xl sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
          <div class="relative flex justify-between h-16">
            <div class="relative z-0 flex items-center justify-center flex-1 px-2 sm:absolute sm:inset-0">
              <Image
                src="/assets/logo.png"
                alt="Company Logo"
                width={140}
                height={100}
              />
            </div>
          </div>
        </div>
        <nav
          x-data="{ open: false }"
          class="bg-white lg:hidden"
          aria-label="Global"
          id="mobile-menu"
        ></nav>
      </header>
    </div>
  );
};

export default Topbar;
