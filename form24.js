import ProgressBar from "react-bootstrap/ProgressBar";
import tool from "../images/question-mark.png";
import {MdArrowBackIosNew} from 'react-icons/md';
import secure from "../images/secure.png";
import Header from "./header";
import { json, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Form24() {
     const location = useLocation();
  const { from } = location.state;
  const myJSON = JSON.stringify(from);
  console.log(typeof(myJSON));
  console.log(myJSON);

 

  return (
    <>
    <Header/>
      <div className="form-wrapper">
        <div className="row">
          <div className="col-xs-12">
            <span className="form2-top">Banking Info</span>
          </div>
          <div className="col-xs-12">
            <ProgressBar variant="progress-bar" now={90} />
          </div>
        </div>
        <div className="col-xs-12 my-3">
          <h3 className="text-uppercase form2-heading">LOAN REASON</h3>
        </div>
        <div className="col-xs-12 pb-4 d-flex">
          <div>
            <img className="tool-image mt-4" src={tool} alt="" />
          </div>
          <div className="tool-desc">
            <p>To point you in the right direction, tell us the reason for your loan.</p>
          </div>
        </div>
        <div className="col-xs-12 my-2 time-box">Credit Card Debt Relief</div>
        <div className="col-xs-12 my-2 time-box">Student Loan Relief</div>
        <div className="col-xs-12 my-2 time-box">Debt Consolidation</div>
        <div className="col-xs-12 my-2 time-box">Other</div>
   
        <Link className="text-decoration-none" to={`/form23`}>
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