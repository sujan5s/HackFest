import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const userId = location.state?.userId; 

  const [user, setUser] = useState({
    username: '',
    name: '',
    email: ''
  });

  useEffect(() => {
    console.log("User ID received in profile:", userId);
    if (!userId) {
      alert("User ID not provided");
      return;
    }

    fetch(`http://localhost:3001/profile?id=${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser({
          username: data.username,
          name: data.name,
          email: data.email
        });
      })
      .catch(err => {
        console.error('Error fetching profile:', err);
      });
  }, [userId]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Profile</h2>
      <div style={styles.infoBox}>
        <p><strong>Name:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
}

export default Profile;

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '500px',
    margin: '0 auto',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1rem'
  },
  infoBox: {
    fontSize: '1.1rem',
    lineHeight: '1.8'
  }
};
