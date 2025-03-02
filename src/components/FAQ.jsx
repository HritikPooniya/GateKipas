import React, { useState } from "react";
import faq from "../utils/faq";

const FAQ = () => {
  const [openFaqs, setOpenFaqs] = useState([]);

  const toggleFaq = (id) => {
    if (openFaqs.includes(id)) {
      setOpenFaqs(openFaqs.filter((faqId) => faqId !== id));
    } else {
      setOpenFaqs([...openFaqs, id]);
    }
  };

  return (
    <div className="features my-5">
      <div className="globalGreenText text-center">FAQs</div>
      <article className="questionFeature text-center">
        Frequently Asked Questions
      </article>
      <article className="m-auto w-75 contentMain text-center mt-3">
        Everything you could possibly want to know about this amazing product is
        right here!
      </article>{" "}
      <div className="mt-5">
        {faq.length > 0 &&
          faq.map((item, index) => {
            return (
              <div className="m-auto w-75" key={index} style={{zIndex:'999999',position:'relative'}}>
                <div className="faq-item mb-4">
                  <div
                    className="d-flex justify-content-between align-items-center cursor-pointer"
                    onClick={() => toggleFaq(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="question">{item.ques}</div>
                    {openFaqs.includes(item.id) ? (
                      <i
                        className="fa fa-minus"
                        style={{
                          color: "#4A9D9F",
                          border: "2px solid #4A9D9F",
                          borderRadius: "50%",
                          height: "24px",
                          width: "24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      ></i>
                    ) : (
                      <i
                        className="fa fa-plus"
                        style={{
                          color: "#4A9D9F",
                          border: "2px solid #4A9D9F",
                          borderRadius: "50%",
                          height: "24px",
                          width: "24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      ></i>
                    )}
                  </div>
                  <div
                    className={`${
                      openFaqs.includes(item.id) ? "active-faq" : "des"
                    }`}
                  >
                    <p>{item.ans}</p>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
      </div>

      <div className="faqLowerContainer text-center mb-5" style={{zIndex:'999999',position:'relative'}}>
        <img className="mt-4" src="images/avatar.svg" alt="" />

        <article className="cardHeadings mt-3">
        Still have questions?
      </article>
      <article className="m-auto w-75 contentMain text-center mt-3">
      Can’t find the answer you’re looking for? Please chat to our friendly team.
      </article>{" "}

      <button className="mt-3" style={{width:'135px'}}>Ask Question</button>

      </div>

      <img className="faqBgImgLeft"  src="images/rightLine.svg" alt=""  />

      <img className="faqBgImgRight" src="images/rightLine.svg" alt="" />

    </div>
  );
};

export default FAQ;
