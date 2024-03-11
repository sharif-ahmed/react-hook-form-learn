import React from 'react';
import logoutIcon from '../../assets/icons/logout.svg'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/login");
    }
    return (
        <button className="icon-btn" onClick={handleLogout}>
            <img src={logoutIcon} alt="Logout" />
        </button>
    );
};

export default Logout;