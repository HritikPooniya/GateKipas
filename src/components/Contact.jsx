import React, { useState } from "react";

const Contact = () => {

    const countryCodes = [
        { code: "+1", flag: "🇺🇸", country: "US" },
        { code: "+91", flag: "🇮🇳", country: "IN" },
        { code: "+44", flag: "🇬🇧", country: "UK" },
        { code: "+61", flag: "🇦🇺", country: "AU" },
      ];


      const [selectedCode, setSelectedCode] = useState(countryCodes[0]);
      const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="features mt-5">
      {" "}
      {/* <img src="images/lowerLine.svg" alt="" style={{position:'absolute',left:'auto',right:'0',top:'10vh',zIndex:'1'}}/> */}

      <div className="globalGreenText text-center">Contact Us</div>
      <article className="questionFeature text-center">Get In Touch</article>
      <article className="m-auto w-75 contentMain text-center mt-3">
        We’re here to help! If you have any questions, concerns, or feedback
        about Gatekipas, feel free to reach out to us. We’ll get back to you as
        soon as possible.
      </article>{" "}
      <div className="row px-5 mx-3 mt-5">
        <div className="col-lg-5 mb-5">
          <div className="cardHeading">Email Us</div>
          <div className="planCardSubheading mt-3">
            {" "}
            For all inquiries, please contact us at:
          </div>

          <div className="cardHeading mt-3">Support@Gatekipass.com</div>
          <div className="planCardSubheading mt-3 w-75">
            {" "}
            Whether you're looking for product support, have questions about
            your subscription, or want to provide feedback, our team is ready to
            assist you.
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row mb-3">
            <div className="inputContainer col-6">
              <label htmlFor="name">First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="inputContainer col-6">
              <label htmlFor="name">Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="inputContainer mb-3">
            <label htmlFor="name">Phone</label>
            <div className="d-flex align-items-center phone-input-box">
            <div className="dropdown d-flex gap-3" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <button className="dropdown-btn">
            {selectedCode.flag} {selectedCode.country} ▼
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              {countryCodes.map((item, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedCode(item);
                    setDropdownOpen(false);
                  }}
                >
                  {item.flag} {item.country}
                </div>
              ))}
            </div>
          )}
        </div>
              <span className="divider">|</span>
              <input
                className="inputMobile"
                type="number"
                placeholder="Enter mobile number"
              />
               
            </div>
          </div>

          <div className="inputContainer mb-3">
            <label htmlFor="name">Email</label>
            <input type="email" placeholder="you@company.com" />
          </div>

          <div className="inputContainer mb-3">
            <label htmlFor="name">Message</label>
            <textarea typeof="text" rows={5} />
          </div>

          <label>
            <input className="me-2" type="checkbox" />
            You agree to our friendly privacy policy.
          </label>

          <button className="w-100 mt-4" style={{zIndex:'99',position:'relative'}}>Send Message</button>

          <label className="mt-3">
            We're here to help! Drop us an email at{" "}
            <span className="globalGreenText">Support@Gatekipass.com</span> and
            let us know how we can assist you.
          </label>
        </div>
      </div>
      {/* <img className="bgImage" src="images/rightLine.svg" alt="" /> */}

    </div>
  );
};

export default Contact;
