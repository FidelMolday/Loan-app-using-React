import { useState } from 'react';
import {IoLogoInstagram} from 'react-icons/io';
import '../styles/faq.css';
import faqImage1 from '../images/faq-img1.jpg';
import info from "../images/customer-info.png";
import slide1 from "../images/slide-image1.jpg";

export default function Faq(){
    const[step1,setStep1]=useState(true);
     const [step2, setStep2] = useState(false);
      const [step3, setStep3] = useState(false);
      function handleClick1(){
        setStep1(true);
        setStep2(false);
        setStep3(false);
      }
      function handleClick2() {
        setStep2(true);
        setStep1(false);
        setStep3(false)
      }
      function handleClick3() {
        setStep3(true);
        setStep1(false);
        setStep2(false);
      }
    return (
      <>
        <div className="faq-main-content">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h5 class="text-uppercase helpful-heading">
                  Requesting a loan is fast, easy, and secure
                </h5>
                <h2 className='faq-main-h2'>
                  See Online Offers from Lenders
                  <br />
                  in Just <span class="emphasis">3 Easy Steps</span>
                </h2>
              </div>
            </div>
            <div className="d-flex faq-tabs">
              <div className="col-sm-12 col-md-6 faq-steps">
                <div className="faq-tab">
                  <div className="d-flex" onClick={handleClick1}>
                    <div class="icon">
                      <div class="block">
                        <div class="circle"></div>
                      </div>
                    </div>
                    <div className="faq-title">Step 01</div>
                    <div className="faq-subtitle">
                      - Quick and easy online form
                    </div>
                  </div>
                  {step1 ? (
                    <div className="faq-step-desc">
                      We make the process of getting a loan fast and easy. We
                      simplify the process through our quick and secure online
                      form.
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <hr />
                <div className="faq-tab">
                  <div className="d-flex" onClick={handleClick2}>
                    <div class="icon">
                      <div class="block">
                        <div class="circle"></div>
                      </div>
                    </div>
                    <div className="faq-title">Step 02</div>
                    <div className="faq-subtitle">
                      - Funds direct to your bank
                    </div>
                  </div>
                  {step2 ? (
                    <div className="faq-step-desc">
                      There are no checks to deposit and no trips to the bank.
                      If approved, money is sent to your account as soon as the
                      next business day.
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <hr />
                <div className="faq-tab">
                  <div className="d-flex" onClick={handleClick3}>
                    <div class="icon">
                      <div class="block">
                        <div class="circle"></div>
                      </div>
                    </div>
                    <div className="faq-title">Step 03</div>
                    <div className="faq-subtitle">- Loan offers in minutes</div>
                  </div>
                  {step3 ? (
                    <div className="faq-step-desc">
                      Your request is sent to our lender network. If approved,
                      you will see an offer in minutes. You can choose the loan
                      that works best for you.
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="col-sm-6 d-none d-sm-block">
                {step1 ? (
                  <img className="faq-image" src={faqImage1} alt="" />
                ) : (
                  ""
                )}
                {step2 ? <img className="faq-image" src={info} alt="" /> : ""}
                {step3 ? <img className="faq-image" src={slide1} alt="" /> : ""}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}