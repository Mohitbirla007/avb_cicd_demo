import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/Home.css';

const Home = React.memo(() => {
    const navigate = useNavigate();

    return (
        <div className="homeFrame1">
            <div className="homeFrame2">
                <p >Home page</p>
                <button className="logoutButton" onClick={() => navigate("/Login", { replace: true })}>Log out</button>
            </div>
        </div>
    );
});

export default Home;