import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex justify-content-between container-xl container-xxl nav">
        <div className="nav__icon">
          <p className="nav__icon pt-3">
            <span className="pe-3">
              <svg
                width="35"
                height="33"
                viewBox="0 0 35 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M5.38281 22.3055V7.15234L16.9471 11.5388V27.0907L5.38281 22.3055Z"
                  fill="#0D0D0D"
                />
                <path
                  opacity="0.4"
                  d="M22.9141 16.9236V14.7304L34.4783 10.1445V12.3377L22.9141 16.9236Z"
                  fill="#0D0D0D"
                />
                <path
                  opacity="0.4"
                  d="M17.7344 27.2926V24.9L29.498 20.3906V22.5838L17.7344 27.2926Z"
                  fill="#0D0D0D"
                />
                <path
                  d="M0.195068 25.4972V4.96072L4.5815 6.75517V22.9052L16.9433 28.2886V32.4756L0.195068 25.4972Z"
                  fill="#0D0D0D"
                />
                <path
                  d="M17.7422 32.4757V28.2886L30.104 23.1047V19.3164L17.7422 23.9022V11.5404L34.4904 5.16016V9.34721L22.1286 14.1324V18.1201L34.4904 13.3349V25.6966L17.7422 32.4757Z"
                  fill="#0D0D0D"
                />
                <path
                  opacity="0.2"
                  d="M17.3416 10.7426L0.992188 4.36234L17.7404 0.773438L34.0898 4.36234L17.3416 10.7426Z"
                  fill="#0D0D0D"
                />
              </svg>
            </span>
            LATE<span className="nav__span">SHIPMENT.COM</span>
          </p>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" collapse navbar-collapse  mar-l" id="navbarNav">
          <ul className="navbar-nav nav__ul me-5">
            <li className="nav-item active d-flex">
              <a className="nav-link" href="#">
                Products{" "}
                <span className="sr-only ms-1">
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L5 5.5L9 1.5"
                      stroke="#0D0D0D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Integrations
                <span className="sr-only ms-1">
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L5 5.5L9 1.5"
                      stroke="#0D0D0D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Use Cases
                <span className="sr-only ms-1">
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L5 5.5L9 1.5"
                      stroke="#0D0D0D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resources
                <span className="sr-only ms-1">
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L5 5.5L9 1.5"
                      stroke="#0D0D0D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Pricing
                <span className="sr-only ms-1">
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L5 5.5L9 1.5"
                      stroke="#0D0D0D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
          <div className="d-flex gap-3">
            <div className="nav__getStarted">Get Started</div>
            <div className="nav__productTour">Product Tour</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
