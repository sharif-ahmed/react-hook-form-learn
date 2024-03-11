import React from 'react';
import logoutIcon from '../../assets/icons/logout.svg'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Logout = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        setAuth({});
        navigate("/login");
    }
    return (
        <button className="icon-btn" onClick={handleLogout}>
            <img src={logoutIcon} alt="Logout" />
        </button>
    );
};

export default Logout;