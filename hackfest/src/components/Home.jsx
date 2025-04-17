import React from 'react';
import './Home.css';
import SchemeUpdates from "./SchemeUpdates";
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
 
  const userId = location.state?.userId;

  const goToProfile = () => {
    navigate('/profile', { state: { userId } });
  };
  return (
    <div>
    
      <h1>Home </h1>
      

   
      <div className="scheme-hub">
      <SchemeUpdates />
      </div>
    </div>
  );
}

export default Home;
