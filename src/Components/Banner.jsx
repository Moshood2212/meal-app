import React from "react";

const Banner = () => {
  return (
    <div
      className="banner container d-md-flex p-4 justify-content-center justify-content-md-start align-items-center"
      
    >
      <div className="text-start my-3">
        <p className="display-5">Healthy Foods</p>
        <h1 className="text-dark">Explore Different Meals</h1>
        <button className="btn bg-success text-white">See More Below</button>
      </div>
    
    </div>
  );
};

export default Banner;
