import React, { useState } from 'react';

function Profile() {
  const [profileImage, setProfileImage] = useState(null);
 

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  

  return (
    <div className="profile">
      <div className="profile-picture">
        {profileImage ? (
          <img 
            src={profileImage} 
            alt="Profile" 
            className="profile-image" 
          />
        ) : (
          <div className="circle">No Image</div>
        )}
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          id="imageUpload" 
          style={{ display: 'none' }} 
        />
        <button 
          className="edit-image-button" 
          onClick={() => document.getElementById('imageUpload').click()}
        >
          Edit Image
        </button>
      </div>
      <div className="profile-info">
      <h2>Name</h2>
        <p>Email: example@example.com</p>
        <p>Phone: 123-456-7890</p>
        <button>Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;




