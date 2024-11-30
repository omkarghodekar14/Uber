import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      return;
    }

    axios.get(`${import.meta.env.VITE_API_URL}/user/logout`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    }).catch((error) => {
      console.error("Logout error:", error);
    });

  }, [navigate]); 

  return (
    <div>Logging out...</div>
  );
}

export default UserLogout;
