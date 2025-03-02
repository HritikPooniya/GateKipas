import React from "react";
import "../assets/styles/features.css";

const Pricing = () => {
  return (
    <div className="features mt-5">
      <img src="images/lowerLine.svg" alt="" style={{position:'absolute',left:'auto',right:'0',top:'29vh',zIndex:'1'}}/>

      <img className="bgImage" src="images/rightLine.svg" alt="" />
      <div className="globalGreenText text-center">Pricing</div>
      <article className="questionFeature text-center">Pricing Plans</article>

      <article className="m-auto w-75 contentMain text-center mt-3">
        Choose the perfect plan for your business. Whether you're a small office
        or a large organization, Gatekipas has a solution tailored to your
        needs.
      </article>

      <div className="d-flex flex-wrap gap-5 mt-5 justify-content-center">
        <div className="planCard mx-3" style={{zIndex:'99'}}>
          <div className="row d-flex align-items-center px-4 mt-3">
            <div className="col-7">
              <div className="planCardHeading">Basic Plan</div>
              <div className="planCardSubheading">
                For Small Teams & Offices
              </div>
            </div>
            <div className="col-5 price d-flex align-items-center">
              $20 <span className="ms-2">/Month</span>
            </div>
          </div>

          <div className="row px-4">
            <ul className="priceCardListItemUpper ms-2">
              <div className="d-flex flex-wrap">
                <div className="col-6">
                  <li>Visitor Management</li>
                </div>
                <div className="col-6">
                  <li>Basic Admin Dashboard</li>
                </div>
                <div className="col-6">
                  <li>Basic Reporting</li>
                </div>
                <div className="col-6">
                  <li>Email Support</li>
                </div>
              </div>
            </ul>
          </div>

          <div className="bg-white d-block pt-3 mt-4">
            <button className="w-75 d-flex  m-auto" style={{background:'#FFF',color:'#000',border:'1px solid '}}>Get Started</button>

            <ul className="priceCardListItem mt-3 d-flex flex-column gap-3">
              <li> <img className="me-3" src="images/check.svg" alt="" /> Quick Check-In/Check Out</li>
              <li> <img className="me-3" src="images/check.svg" alt="" /> Digital Records</li>
              <li className="priceCardListItemDeactive"> <img className="me-3" src="images/cancel.svg" alt="" />  Host Notifications</li>
              <li><img className="me-3" src="images/check.svg" alt="" /> Employee Notifications</li>
              <li className="priceCardListItemDeactive"><img className="me-3" src="images/cancel.svg" alt="" /> Shift Scheduling</li>
              <li className="priceCardListItemDeactive"><img className="me-3" src="images/cancel.svg" alt="" /> Payroll Integration</li>
              <li><img className="me-3" src="images/check.svg" alt="" /> Reporting (Basic)</li>
              <li><img className="me-3" src="images/check.svg" alt="" /> Emergency List</li>
              <li><img className="me-3" src="images/check.svg" alt="" /> Support (Email)</li>
            </ul>
          </div>
        </div>
        <div className="planCard mx-3" style={{zIndex:'99'}}>
          <div className="row d-flex align-items-center px-4 mt-3">
            <div className="col-7">
              <div className="planCardHeading">Standard Plan</div>
              <div className="planCardSubheading">
              Best for Growing Businesses
              </div>
            </div>
            <div className="col-5 price d-flex align-items-center">
              $50 <span className="ms-2">/Month</span>
            </div>
          </div>

          <div className="row px-4">
            <ul className="priceCardListItemUpper ms-2">
              <div className="d-flex flex-wrap">
                <div className="col-6">
                  <li>Visitor & Employee Management</li>
                </div>
                <div className="col-6">
                  <li>Shift Scheduling & Payroll Integration</li>
                </div>
                <div className="col-6">
                  <li>Advanced Reporting</li>
                </div>
                <div className="col-6">
                  <li>Email Support</li>
                </div>
              </div>
            </ul>
          </div>

          <div className="bg-white d-block pt-3">
            <button className="w-75 d-flex  m-auto">Get Started</button>

            <ul className="priceCardListItem mt-3 d-flex flex-column gap-3">
              <li> <img className="me-3" src="images/check.svg" alt="" /> Quick Check-In/Check Out</li>
              <li> <img className="me-3" src="images/check.svg" alt="" /> Digital Records</li>
              <li className=""> <img className="me-3" src="images/check.svg" alt="" />  Host Notifications (Emails Only)</li>
              <li><img className="me-3" src="images/check.svg" alt="" /> Employee Notifications</li>
              <li className=""><img className="me-3" src="images/check.svg" alt="" /> Shift Scheduling</li>
              <li className=""><img className="me-3" src="images/check.svg" alt="" /> Payroll Integration</li>
              <li><img className="me-3" src="images/check.svg" alt="" /> Reporting (Advanced)</li>
              <li><img className="me-3" src="images/check.svg" alt="" /> Emergency List</li>
              <li><img className="me-3" src="images/check.svg" alt="" /> Support (Email)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
