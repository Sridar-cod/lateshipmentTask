import React from "react";

const Challenge1 = () => {
  return (
    <>
      <div className="container-lg container-xl container-xxl outter-chal">
        <div className="challenge mt-5 mb-5">
          <div className="p-4">
            <h2>Challenge 1: Tracking complexities with multi-shipment orders</h2>
            <p>
              Customers lacked information on the statuses of partially fulfilled orders and shipment statuses, leading to high volume of WISMO inquiries (Where Is My Order?). This impacted their customer satisfaction, besides straining their support teams when resolving such issues.
            </p>
          </div>

          <div className="challenge__box d-flex flex-column flex-md-row justify-content-between">
            <div className="w-75">
              <p className="challenge__box__p">
                When we initially launched a detailed tracking page with LateShipment.com, we had a 142% increase in traffic to that page which significantly reduced the WISMO enquiries. I think that was a huge win.
              </p>
              <div className="d-flex justify-content-end mt-5">
                <b className="challenge__name">- Keisha Bartrem, Director of Customer success</b>
              </div>
            </div>
            <div className="challenge__img  d-flex align-items-end ">
              <img src="assets/challenge-img.svg" alt="" />
            </div>
          </div>

          <div className="p-4">
            <h2>The Solution</h2>
            <p>
              Branch Furniture tackled the challenge of tracking complexities in multi-shipment orders by implementing LateShipment.com's Delivery Experience Management platform
            </p>
            <ul className="challenge__ul">
              <li>Unified Tracking for Multi-shipment Orders: Customers could easily track all shipments associated with a single order, eliminating confusion and frustration.</li>
              <li>Customized ‘Fulfillment Status’ updates in the tracking page to keep customers informed on partially fulfilled orders.</li>
              <li>Automated shipping notifications: Proactive email notifications through Klaviyo kept customers informed about real-time order status updates, significantly reducing WISMO enquiries.</li>
              <li>Branded Tracking Portal: A user-friendly, on-brand tracking page provided a central location for customers to view all shipment details, including assembly guides.</li>
            </ul>
          </div>

          <div className="p-4">
            <h2>The Impact</h2>
            <p>With LateShipment.com’s Delivery Experience Management platform, Branch was enabled to achieve the following:</p>
            <div className="challenge__button_box d-flex flex-column flex-md-row justify-content-around align-items-center p-4">
              <div className="challenge__button_box__item">
                <h5>37%</h5>
                <p>Reduction in WISMO enquiries</p>
              </div>
              <div className="challenge__button_box__item">
                <h5>2.5x</h5>
                <p>Engagement per shipping notification</p>
              </div>
              <div className="challenge__button_box__item">
                <h5>16%</h5>
                <p>Clicks on product recommendations</p>
              </div>
              <div>
                <div className="challenge__button">Book a Demo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Challenge1;
