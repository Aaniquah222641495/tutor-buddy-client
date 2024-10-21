import React, { useState, useEffect } from 'react';
import { TutorApi } from 'student_tutor_booking_management_system'; // Adjust the import path as needed

function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedProfileData, setEditedProfileData] = useState({});
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    try {
      const tutorData = localStorage.getItem('tutor');
      if (tutorData) {
        const tutor = JSON.parse(tutorData);
        console.log("Stored tutor data:", tutor);
        setProfileData(tutor);
      } else {
        console.error("No tutor data found in sessionStorage");
      }
    } catch (error) {
      console.error("Error fetching student data", error);
    }
  }, []);

  const openModal = () => {
    setEditedProfileData({ ...profileData });
    setIsModalOpen(true);
    console.log("Modal opened, isModalOpen:", true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProfileData({ ...editedProfileData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting data:", editedProfileData);

    const tutorApi = new TutorApi();
    tutorApi.updateTutor(editedProfileData, profileData.tutorId)
      .then(response => {
        console.log("Profile updated successfully", response);
        setProfileData(editedProfileData);
        closeModal();
      })
      .catch(error => {
        console.error("Error updating profile", error);
      });

    setProfileData(editedProfileData);
    closeModal();
  };

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

  console.log("Current isModalOpen state:", isModalOpen);

  return (
    <div className="tutor-profile">
      <div className="tutor-profile-picture">
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="tutor-profile-image"
          />
        ) : (
          <div className="tutor-circle">No Image</div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          id="tutor-imageUpload"
          style={{ display: 'none' }}
        />
        <button
          className="tutor-edit-image-button"
          onClick={() => document.getElementById('tutor-imageUpload').click()}
        >
          Edit Image
        </button>
      </div>
      <div className="tutor-profile-info">
        {profileData ? (
          <>
            <h2>{`${profileData.name} ${profileData.lastName}`}</h2>
            <p>Email: {profileData.email}</p>
            <p>Phone: {profileData.phoneNumber}</p>
            <button onClick={openModal}>Edit Profile</button>
          </>
        ) : (
          <p>Loading profile data...</p>
        )}
      </div>

      {isModalOpen && (
        <div className="tutor-modal" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div className="tutor-modal-content" style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '5px',
            maxWidth: '500px',
            width: '100%'
          }}>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={editedProfileData.name || ''}
                onChange={handleInputChange}
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                value={editedProfileData.lastName || ''}
                onChange={handleInputChange}
                placeholder="Last Name"
              />
              <input
                type="email"
                name="email"
                value={editedProfileData.email || ''}
                onChange={handleInputChange}
                placeholder="Email"
              />
              <input
                type="tel"
                name="phoneNumber"
                value={editedProfileData.phoneNumber || ''}
                onChange={handleInputChange}
                placeholder="Phone Number"
              />
              <button type="submit">Save Changes</button>
              <button type="button" onClick={closeModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
