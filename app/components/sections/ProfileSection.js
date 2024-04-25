// ProfileSection.js
import React from 'react';

const ProfileSection = ({ data }) => {
    const { name, email, imageUrl } = data;
  return (
    <div className='flex items-center'>
      <div class="mr-1 ">
        <div>
          <button
            type="button"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <img
              class="inline-block rounded-full ring ring-white w-9 h-9"
              src={imageUrl}
            />
          </button>
        </div>
      </div>
      <div>
        <h1 className="font-medium text-[#081225] text-base antialiased">
          {name}
        </h1>
        <h1 className="font-normal text-[#081225] text-sm antialiased opacity-55">
          {email}
        </h1>
      </div>
    </div>
  );
};

export default ProfileSection;
