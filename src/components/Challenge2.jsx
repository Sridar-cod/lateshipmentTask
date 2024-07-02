import React from "react";

const Challenge2 = () => {
  return (
    <>
      <div className="container-lg container-xl container-xxl outter-chal">
        <div className="challenge mt-5 mb-5">
          <div className="p-4">
            <h2>Challenge 2: Suboptimal returns process </h2>
            <p>
              Inefficiencies from manually managing returns caused an increase
              in operational costs and often led to subpar customer experiences.
              Customers would print return labels but never return products, and
              manual label generation was time-consuming and prone to errors.
            </p>
          </div>

          <div className="challenge__box d-flex flex-column flex-md-row justify-content-between">
            <div className="w-75">
              <p className="challenge__box__p">
                Our return process was very manual. We would use Shopify to
                print or create a return and send that email to the customer. It
                was a lot of like back and forth before the customer was even
                able to receive their label. It’s difficult to have a
                relationship with customers when there’s too much complication
                involved
              </p>
              <div className="d-flex justify-content-end mt-5">
                <b className="challenge__name">
                  - Linda Chi, Senior Lead in Customer Success{" "}
                </b>
              </div>
            </div>
            <div className="challenge__img  d-flex align-items-end">
              <img src="assets/challanage2-img.svg" alt="" />
            </div>
          </div>

          <div className="p-4">
            <h2>The Solution</h2>
            <p>
              Automated Return Workflows: Automated Multiple label generation,
              return approvals, label expiration notifications and
              auto-canceling expired labels saved significant time and resources
              compared to the manual process.
            </p>
            <ul className="challenge__ul">
              <li>Automated Return Workflows: Automated Multiple label generation, return approvals, label expiration notifications
     and auto-canceling expired labels saved significant time and resources compared to the manual process.
</li>
              <li>
                Customized Return Portal: Customers could easily initiate and
                track returns through a branded portal with clear instructions,
                packaging information, and assembly guides.
              </li>
              <li>
                Routing Rules: Returns were automatically directed to the
                appropriate warehouse, streamlining processing and reducing
                handling time.
              </li>
              <li>
                Return Insights Dashboard: Branch Furniture gained valuable data
                like common return reasons and frequently returned items,
                allowing for product and process optimization. This data also
                helped track return initiation and resolution times, providing
                further insights into efficiency.
              </li>
            </ul>
          </div>

          <div className="p-4">
            <h2>The Impact</h2>
            <p>
            Branch deployed LateShipment.com’s Returns Management platform to automate their returns and achieved the following
            </p>
            <div className="d-flex justify-content-center">
            <div className="challenge__button_box d-flex flex-column flex-md-row justify-content-around align-items-center p-4 challenge__button_box__small">
              <div className="challenge__button_box__item ">
                <h5>85%</h5>
                <p> reduction in returns processing time</p>
              </div>
              <div className="challenge__button_box__item">
                <h5>11 hours</h5>
                <p>of support time saved per week by automating returns</p>
              </div>
              <div className="">
                <div className="challenge__button">Book a Demo</div>
              </div>
              </div>
              </div>
          </div>
        </div>
      </div>
      <div className="challenage__border"></div>
    </>
  );
};

export default Challenge2;
