import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import tool from "../images/car.png";
import {MdArrowBackIosNew} from 'react-icons/md';
import Header from "./header";
import secure from "../images/secure.png";
import { useLocation } from "react-router-dom";
export default function Form8() {
  const location = useLocation();
  const { from } = location.state;
  console.log(from);
  return (
    <>
    <Header/>
      <div className="form-wrapper">
        <div className="row">
          <div className="col-xs-12">
            <span className="form2-top">Basic Info</span>
          </div>
          <div className="col-xs-12">
            <ProgressBar variant="progress-bar" now={26} />
          </div>
        </div>
        <div className="col-xs-12 my-3">
          <h3 className="text-uppercase form2-heading">DO YOU HAVE A CAR REGISTERED IN YOUR NAME?</h3>
        </div>
        <div className="col-xs-12 pb-4 d-flex">
          <div>
            <img className="tool-image mt-4" src={tool} alt="" />
          </div>
          <div className="tool-desc">
            <p>EXPAND your request to INCLUDE auto title loan options that may have better rates or terms.</p>
          </div>
        </div>
         <Link className="text-decoration-none" to={`/form9`} state={{ from: ["Yes", from] }}>
        <div className="col-xs-12 my-2 time-box">Yes</div>
        </Link>
       <Link className="text-decoration-none" to={`/form9`} state={{ from: ["No", from] }}>
        <div className="col-xs-12 my-2 time-box">No</div>
        </Link>
       <Link className="text-decoration-none" to={`/form7`}>
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