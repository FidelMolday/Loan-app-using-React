import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import tool from "../images/security.png";
import {MdArrowBackIosNew} from 'react-icons/md';
import secure from "../images/secure.png";
import Form from "react-bootstrap/form";
import Header from "./header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function Form19() {
   const location = useLocation();
  const { from } = location.state;
   const [Name,setName]=useState()
    function handleChange(event){
    setName(event.target.value);
    console.log(Name);
  }

  console.log(from);
  return (
    <>
      <Header />
      <div className="form-wrapper">
        <div className="row">
          <div className="col-xs-12">
            <span className="form2-top">Personal Info</span>
          </div>
          <div className="col-xs-12">
            <ProgressBar variant="progress-bar" now={70} />
          </div>
        </div>
        <div className="col-xs-12 my-3">
          <h3 className="text-uppercase form2-heading">
            SOCIAL SECURITY NUMBER
          </h3>
        </div>
        <div className="col-xs-12 pb-4 d-flex">
          <div>
            <img className="tool-image mt-4" src={tool} alt="" />
          </div>
          <div className="tool-desc">
            <p>
              Lenders use your social security number to verify your identity.
              It is vital that you enter your valid social security number.
              Lenders will reject applicants whose information they cannot
              verify.
            </p>
          </div>
        </div>
        <div className="name-input">
          <input
            onChange={handleChange}
            className="form-control input-lg"
            type="text"
          />
          <p className="form-footer-text mb-0 text-center">
            <small>
              providing your SSN will <strong>NOT</strong> affect your credit.
            </small>
          </p>
        </div>

        <Link
          className="text-decoration-none"
          to={`/form20`}
          state={{ from: { Name, from } }}
        >
          <button
            type="button"
            className="btn btn-block btn-lg btn-default my-4"
            id="manualLoanamt"
          >
            Continue
          </button>
        </Link>
        <Link className="text-decoration-none" to={`/form18`}>
          <div className="mt-5">
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
      </div>
    </>
  );
}


// yes then show something else