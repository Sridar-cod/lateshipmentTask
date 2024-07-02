import React from "react";

const Landing = () => {
  return (
    <div className="landing row w-100">
      <div className="landingLeft p-0 col-12 col-lg-7">
        <div className="landingLeft__top">
          <h1>
            How Branch drove post-purchase delight and reduced WISMO enquiries
            by 37%
          </h1>
        </div>
        <div className="landingRight__botton d-flex">
          <div className="landingRight__botton__left mt-4 mb-4 d-flex justify-content-center flex-column ps-5 pe-5">
            <b>2.5x</b>
            <p>increase in engagement per shipping notification</p>
          </div>
          <div className="landingRight__botton__right mt-4 mb-4 d-flex justify-content-center flex-column ps-5 pe-5">
            <b>85%</b>
            <p>
              reduction in returns processing time through smart automations
            </p>
          </div>
        </div>
      </div>
      <div className="landingRight p-0 col-12 col-lg-5">
        {/* <img src="assets/landing-img.svg" alt="Landing" /> */}
      </div>
    </div>
  );
};

export default Landing;
