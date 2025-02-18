import "../styles/helpful-info.css";
import slide1 from "../images/slide-image1.jpg";
import slide2 from "../images/slide-image3.jpg";
import slide3 from "../images/slide-image2.jpg";
import { AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";
import {RxDividerVertical} from "react-icons/rx";
import { useState } from "react";

export default function HelpfulInfo() {

const [slide, setSlide] = useState(0);
function handleClickprev() {
  if (slide === 0) {
    setSlide(2);
  } else {
    setSlide(slide - 1);
  }
}
function handleClicknext() {
  if (slide === 2) {
    setSlide(0);
  } else {
    setSlide(slide + 1);
  }
}

  return (
    <>
      <div className="slide-container">
        <div className="col-sm-12 slide-top-heading text-center">
          <h5 class="text-uppercase helpful-heading">
            Requesting a loan is fast, easy, and secure
          </h5>
          <h2 className="helpful-subheading">
            Helpful Information You <span class="emphasis">Should Know</span>
          </h2>
        </div>
        <div className="container my-4">
          <div className="row gx-0">
            <div style={{ background: "white" }} className="col-sm-6">
              {slide === 0 ? (
                <>
                  <h1 className="slide-heading">Basic Loan Requirements:</h1>
                  <p className="slide-desc">
                    Must be at least 18 years old. Must be a U.S. citizen or
                    Permanent Resident. <br /> Currently employed or receive
                    steady income. Have a bank account to <br /> receive the
                    funds, ideally with direct deposit.
                  </p>
                </>
              ) : (
                ""
              )}
              {slide === 1 ? (
                <>
                  <h1 className="slide-heading">
                    What is a Personal Loan For?
                  </h1>
                  <p className="slide-desc">
                    People get personal loans to help with home repairs, luxury
                    purchases, holiday <br /> shopping, and more. A loan from
                    one of our lenders can help you get the funds you <br />
                    need! Just fill out our simple online form. Follow the short
                    process and, if you <br /> are approved, you may receive
                    your funds as soon as the next business day!
                  </p>
                </>
              ) : (
                ""
              )}
              {slide === 2 ? (
                <>
                  <h1 className="slide-heading">Privacy and information?</h1>
                  <p className="slide-desc">
                    We take privacy seriously, so we use industry-standard
                    encryption on our website so <br /> that third parties
                    cannot intercept your data. You can also look at our privacy{" "}
                    <br /> policy for more details on this.
                  </p>
                </>
              ) : (
                ""
              )}
            </div>
            <div style={{ background: "white" }} className="col-sm-6 d-none d-md-block">
              {slide === 0 ? (
                <img className="slide-image" src={slide1} alt="" />
              ) : (
                ""
              )}
              {slide === 1 ? (
                <img className="slide-image" src={slide2} alt="" />
              ) : (
                ""
              )}
              {slide === 2 ? (
                <img className="slide-image" src={slide3} alt="" />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="slide-button d-flex">
            <div onClick={handleClickprev} className="mx-2">
              <AiOutlineArrowLeft />
            </div>
            <div className="mx-2">
              <RxDividerVertical />
            </div>
            <div onClick={handleClicknext} className="mx-2">
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
