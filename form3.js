import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import tool from "../images/clock-image.png";
import {MdArrowBackIosNew} from 'react-icons/md';
import secure from "../images/secure.png";
import Header from "./header";
import { useLocation } from "react-router-dom";
export default function Form3() {
   const location = useLocation();
  const { from } = location.state;
  // console.log(from);
  return (
    
    <>
    <Header/>
      <div className="form-wrapper">
        <div className="row">
          <div className="col-xs-12">
            <span className="form2-top">Basic Info</span>
          </div>
          <div className="col-xs-12">
            <ProgressBar variant="progress-bar" now={6} />
          </div>
        </div>
        <div className="col-xs-12 my-3">
          <h3 className="text-uppercase form2-heading">CONTACT TIME</h3>
        </div>
        <div className="col-xs-12 pb-4 d-flex">
          <div>
            <img className="tool-image mt-4" src={tool} alt="" />
          </div>
          <div className="tool-desc">
            <p>If we need to contact you, what is the best time?</p>
          </div>
        </div>
         <Link className="text-decoration-none" to={`/form4`} state={{ from: ["Morning", from] }}>
        <div className="col-xs-12 my-2 time-box ">Morning</div></Link>

        <Link className="text-decoration-none" to={`/form4`} state={{ from: ["Noon", from] }}>
        <div className="col-xs-12 my-2 time-box">Noon</div></Link>
        <Link className="text-decoration-none" to={`/form4`} state={{ from: ["Night", from] }}>
        <div className="col-xs-12 my-2 time-box">Night</div></Link>
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
      </div>
    </>
  );
}
