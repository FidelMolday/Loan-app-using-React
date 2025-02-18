import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import tool from "../images/car.png";
import {MdArrowBackIosNew} from 'react-icons/md';
import secure from "../images/secure.png";
import Form from "react-bootstrap/form";
import Header from "./header";
import { useLocation } from "react-router-dom";
export default function Form18() {
  const location = useLocation();
  const { from } = location.state;
   console.log(from);
  return (
    <>
    <Header/>
      <div className="form-wrapper">
        <div className="row">
          <div className="col-xs-12">
            <span className="form2-top">Personal Info</span>
          </div>
          <div className="col-xs-12">
            <ProgressBar variant="progress-bar" now={66} />
          </div>
        </div>
        <div className="col-xs-12 my-3">
          <h3 className="text-uppercase form2-heading">DRIVER'S LICENSE OR STATE ID</h3>
        </div>
        <div className="col-xs-12 pb-4 d-flex">
          <div>
            <img className="tool-image mt-4" src={tool} alt="" />
          </div>
          <div className="tool-desc">
            <p>
                                        Your driver's license number is used to verify your identity and prevent fraud.
                                    </p></div>
        </div>
        <div className="name-input">
        <label className="form-label">License or id #</label> <br />
          <input className="form-control input-lg" type="text" />
          </div>
           <div className="name-input my-2">
          <label className="form-label">License State</label> <br />
          <Form.Select aria-label="Default select example">
            <option>Washington</option>
            <option value="1">Los Angeles</option>
            <option value="2">Vegas</option>
            <option value="3">London</option>
          </Form.Select>
        </div>
         <Link className="text-decoration-none" to={`/form19`} state={{ from:  ["Washington",from] }}>
          <button
          type="button"
          className="btn btn-block btn-lg btn-default my-4"
          id="manualLoanamt"
        >
          Continue
        </button>
        </Link>
       <Link className="text-decoration-none" to={`/form17`}>
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