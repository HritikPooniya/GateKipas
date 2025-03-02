import Header from "./components/Header";
import "../src/assets/styles/global.css";
import leftLine from "../src/assets/images/leftLine.svg";
import rightLine from "../src/assets/images/rightLine.svg";
import tab from "../src/assets/images/tab.svg";
import Features from "./components/features";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App w-100">
      {/* <img className="img" src={rightLine} style={{right:'0',left:'15%',objectFit:'contain'}} alt="" /> */}
      <Header />
      {/* <img className="img" src={leftLine} alt="" style={{objectFit:'contain'}}/> */}

      <div className="landingContent mt-5">
        <div className="mainHeading">
          Simplify <strong>Visitor</strong> and <br />{" "}
          <strong className="bgCircleImage"> Employee Management</strong> with{" "}
          <br /> <strong>Gatekipas</strong>
        </div>

        <article className="text-center lowerContent mt-4 mx-3">
          Gatekipas provides secure, efficient, and scalable solutions for
          managing visitors, employees, and operations.
          <br />
          Streamline your processes and focus on what truly matters—your
          business.
        </article>

        <button
          className="d-flex mx-auto my-5 text-center w-25"
          style={{ cursor: "pointer",minWidth:'280px' }}
        >
          Get Started
        </button>
      </div>

      <div className="tabImageContainer">
        <img src={tab} alt="Tablet" />
      </div>

      {/* features */}

      <Features />

      {/* Pricing */}

      <Pricing />

      <FAQ />

      <Contact />

      <Footer />

      {/* <img className="fixedIcon" src="images/icon.svg" /> */}
    </div>
  );
}

export default App;
