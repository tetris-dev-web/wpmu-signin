import React from "react";

const Steps = (props:any) => {
  return (
    <>
      <div className = "steps-wrapper">
        <div className = "title">Step {props.current} of {props.total}</div>
        {[...Array(props.total)].map((x, i) =>
          <div className = "step-pointer"><div className = {"dot" + (props.current === (i + 1) ? " current" : "")}></div></div>
        )}
      </div>
    </>
  );
};

export default Steps;
