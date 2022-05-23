import React from "react";

const SideSection = (props:any) => {
  return (
    <>
      <div className = "side-wrapper">
        <div className = "side-content" >
          <h2>{props.heading}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default SideSection;
