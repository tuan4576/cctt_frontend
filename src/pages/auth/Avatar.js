import React, { useState, useEffect } from 'react';
import { IMG_URL } from '../../api/config';

const Avatar = () => {
  const [username, setUsername] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('user_username');
    const storedPhoto = sessionStorage.getItem('user_photo');
    if (storedUsername) {
      setUsername(storedUsername);
    }
    if (storedPhoto) {
      setAvatarUrl(`${IMG_URL}/image/${storedPhoto}`);
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full p-[3px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        <div className="bg-white rounded-full p-[1px]">
          <img 
            src={avatarUrl || `${IMG_URL}/image/defaultuser.jpg`}
            alt="User Avatar" 
            className="w-10 h-10 rounded-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `${IMG_URL}/image/defaultuser.jpg`;
            }}
          />
        </div>
      </div>
      <span className="mt-[-8px] text-xs font-medium text-red-600 bg-pink-50 px-1.5 py-0.5 rounded-[10px]">{username || 'User Name'}</span>
    </div>
  );
};

export default Avatar;
