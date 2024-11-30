import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CaptainLogout() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            return;
        }

        axios.get(`${import.meta.env.VITE_API_URL}/captain/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            console.log(response);
            if (response.status === 200) {
                localStorage.removeItem('token');
                navigate('/captain-login');
            }
        }).catch((error) => {
            console.error("Logout error:", error);
        });

    }, [navigate]);

    return (
        <div>Logging out...</div>
    );
}

export default CaptainLogout