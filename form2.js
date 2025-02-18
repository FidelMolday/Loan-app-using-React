import "../styles/form2.css";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import tool from "../images/toolkit-img.png";
import {MdArrowBackIosNew} from 'react-icons/md';
import secure from "../images/secure.png";
import Header from "./header";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Form2() {
  const location = useLocation();
  const { from } = location.state;
  // console.log(from); 
   const [fName,setfName]= useState();
  function handleChangef(event){
    setfName(event.target.value);
    console.log(fName);
  }
   const [lName,setlName]= useState();
   function handleChangel(event){
    setlName(event.target.value);
    console.log(lName);
  }
   const [email,setEmail]= useState();
  function handleChangeEmail(event){
    setEmail("Email"+event.target.value);
    console.log(email);
  }
   const [number,setNumber]= useState();
  function handleChangeNumber(event){
    setNumber(event.target.value);
    console.log(number);
  }
   const [address,setAddress]= useState();
  function handleChangeAddress(event){
    setAddress(event.target.value);
    console.log(address);
  }
   const [zip,setZip]= useState();
  function handleChangeZip(event){
    setZip(event.target.value);
    console.log(zip);
  }

 

  return (
    <>
    <Header/>
      <div className="form2-wrapper">
        <div className="row">
          <div className="col-xs-12">
            <span className="form2-top">Next, a few details about you</span>
          </div>
          <div className="col-xs-12">
            <ProgressBar variant="progress-bar" now={2} />
          </div>
        </div>
        <div className="col-xs-12 my-3">
          <h3 className="text-uppercase form2-heading">
            See if you qualify in minutes!
          </h3>
        </div>
        <div className="col-xs-12 pb-4 d-flex">
          <div>
            <img className="tool-image" src={tool} alt="" />
          </div>
          <div className="tool-desc">
            <p>
              No commitment — get your rate and monthly payment with no impact
              to your credit score.
            </p>
          </div>
        </div>
        <div className="col-xs-12 d-flex">
          <div className="name-input mx-2 col-xs-6">
            {" "}
            <label className="form-label">First name</label> <br />{" "}
            <input onChange={handleChangef} className="form-control input-lg" type="text" />
          </div>
          <div className="name-input mx-2 col-xs-6">
            {" "}
            <label className="form-label">Last name</label> <br />{" "}
            <input onChange={handleChangel} className="form-control input-lg" type="text" />
          </div>
        </div>
        <div className="name-input mx-2 my-1 col-xs-12">
          {" "}
          <label className="form-label">Email</label> <br />{" "}
          <input onChange={handleChangeEmail} className="form-control input-lg" type="text" />
        </div>
        <div className="name-input mx-2 my-1 col-xs-12">
          {" "}
          <label className="form-label">Cell Phone Number</label> <br />{" "}
          <input onChange={handleChangeNumber} className="form-control input-lg" type="text" />
        </div>
        <div className="name-input mx-2 my-1 col-xs-12">
          {" "}
          <label className="form-label text-green">Zip Code</label> <br />{" "}
          <input onChange={handleChangeZip} className="form-control input-lg" type="text" />
        </div>
        <div className="name-input mx-2 my-1 col-xs-12">
          {" "}
          <label className="form-label text-green">
            Home Address
          </label> <br />{" "}
          <input onChange={handleChangeAddress} className="form-control input-lg" type="text" />
          <p className="form2-below-desc">providence, NC</p>
        </div>
        <div className="col-xs-12 mx-2">
          <p className="form2-below-desc">
            By providing your phone number you consent to receive calls, texts
            and pre-recorded messages from GraceLoanAdvance, its Lending
            Partners and/or Network Partners.**
          </p>
        </div>
        <div className="col-xs-12 mx-2">
          <p class="form2-below-desc">
            By clicking "Continue", you agree to our{" "}
            <a href="#" className="text-decoration-none">
              Terms &amp; Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-decoration-none">
              Privacy Policy
            </a>{" "}
            and to receive important notices and other communications
            electronically.
          </p>
        </div>
        <Link className="text-decoration-none" to={`/form3`} state={{ from: [from,fName,lName,email,zip,address,number] }}>
        <button
          type="button"
          class="btn btn-block btn-lg btn-default"
          id="manualLoanamt"
        >
          Continue
        </button>
        </Link>
         <Link className="text-decoration-none" to={`/form2`}>
        <div className="mt-3">
          <a href="" className=" back-btn">
            <MdArrowBackIosNew />
          </a>
        </div>
        </Link>
        <div className="form-footer">
          <p className="form-footer-text">
            <small>We use 256 bit SSL technology to encrypt your data.</small>
          </p>
          <div>
            <img src={secure} alt="" />
          </div>
        </div>
        <div className="col-xs-12 mx-2 my-3">
          <p className="form2-below-desc">
            ** You are providing your express written consent to share your
            information with up to five (5) of GraceLoanAdvance's Network
            Partners, and for those Network Partners, GraceLoanAdvance, and
            authorized third parties calling on their behalf, to contact you via
            telephone calls or text messages, including for marketing purposes,
            using an automatic telephone dialing system or an artificial or
            pre-recorded voice to the phone number I have provided. I understand
            that I am providing this consent to receive such telephone calls
            even if my telephone number is currently listed on any federal,
            state, local, internal, or corporate Do-Not-Call (“DNC”) Lists. I
            understand that consent is not required as a condition of purchasing
            any services or products, and that I may choose to be contacted by
            an individual customer care representative at 1-747-247-0087.
          </p>
        </div>
      </div>
    </>
  );
}
