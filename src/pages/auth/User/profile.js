import React, { useState, useEffect } from 'react';
import { IMG_URL } from '../../../api/config';
import { FaCamera, FaTimes } from 'react-icons/fa';
import apiUser from '../../../api/apiUser';

function Profile() {
  const [userImage, setUserImage] = useState('');
  const [previewProfileImage, setPreviewProfileImage] = useState(null);
  const [selectedProfileImage, setSelectedProfileImage] = useState(null);

  useEffect(() => {
    const storedPhoto = sessionStorage.getItem('user_photo');
    if (storedPhoto) {
      setUserImage(`${IMG_URL}/image/${storedPhoto}`);
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedProfileImage(file);
      setPreviewProfileImage(URL.createObjectURL(file));
    }
  };

  const handleRemovePreview = () => {
    setPreviewProfileImage(null);
    setSelectedProfileImage(null);
  };

  const handleUpdateProfileImage = async () => {
    if (selectedProfileImage) {
      try {
        const response = await apiUser.updateUserImage(selectedProfileImage);
        console.log('Profile image update response:', response);
        console.log('Bạn đã thay đổi ảnh đại diện thành công');
        if (response.data && response.data.photo) {
          sessionStorage.setItem('user_photo', response.data.photo);
          setUserImage(`${IMG_URL}/image/${response.data.photo}`);
        }
        
        setPreviewProfileImage(null);
        setSelectedProfileImage(null);
      } catch (error) {
        console.error('Error updating profile image:', error);
      }
    } else {
      console.log('Vui lòng chọn ảnh đại diện trước khi cập nhật');
    }
  };

  return (
    <div className="flex flex-col items-center mt-[100px]">
      <div className="relative">
        <img 
          src={previewProfileImage || userImage }
          alt="User Avatar" 
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <label htmlFor="avatar-upload" className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1.5 cursor-pointer transform translate-x-1/4 translate-y-1/4">
          <FaCamera className="text-white text-lg" />
        </label>
        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        {previewProfileImage && (
          <button
            onClick={handleRemovePreview}
            className="absolute top-0 right-0 bg-red-500 rounded-full p-1 cursor-pointer"
          >
            <FaTimes className="text-white text-sm" />
          </button>
        )}
      </div>
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleUpdateProfileImage}
      >
        Cập nhật
      </button>
    </div>
  );
}

export default Profile;
