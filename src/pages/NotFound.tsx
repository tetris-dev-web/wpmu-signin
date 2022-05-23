import React from "react";
import { useNavigate  } from "react-router-dom";


const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div >
        Page not found.
        <br />
        <br />
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate('/')}>Home</button>
    </>
  );
};

export default NotFound;
