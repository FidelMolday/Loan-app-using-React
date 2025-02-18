import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import tool from "../images/pay.png";
import {MdArrowBackIosNew} from 'react-icons/md';
import secure from "../images/secure.png";
import Header from "./header";
import { useLocation } from "react-router-dom";
export default function Form7() {
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
            <ProgressBar variant="progress-bar" now={22} />
          </div>
        </div>
        <div className="col-xs-12 my-3">
          <h3 className="text-uppercase form2-heading">CAN YOU AFFORD AN AGGREGATED MONTHLY PAYMENT OF $250?</h3>
        </div>
        <div className="col-xs-12 pb-4 d-flex">
          <div>
            <img className="tool-image mt-4" src={tool} alt="" />
          </div>
          <div className="tool-desc">
            <p>Would you be able to make payments of at least $250 a month?</p>
          </div>
        </div>
        <Link className="text-decoration-none" to={`/form8`} state={{ from: ["Yes", from] }}>
        <div className="col-xs-12 my-2 time-box">Yes</div>
        </Link>
       <Link className="text-decoration-none" to={`/form8`} state={{ from: ["No", from] }}>
        <div className="col-xs-12 my-2 time-box">No</div>
        </Link>
       <Link className="text-decoration-none" to={`/form6`}>
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
