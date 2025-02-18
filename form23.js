import ProgressBar from "react-bootstrap/ProgressBar";
import tool from "../images/credit-score.png";
import {MdArrowBackIosNew} from 'react-icons/md';
import secure from "../images/secure.png";
import { Link } from "react-router-dom";
import Header from "./header";
import { useLocation } from "react-router-dom";
export default function Form23() {
    const location = useLocation();
  const { from } = location.state;
  console.log(from);
  return (
    <>
    <Header/>
      <div className="form-wrapper">
        <div className="row">
          <div className="col-xs-12">
            <span className="form2-top">Banking Info</span>
          </div>
          <div className="col-xs-12">
            <ProgressBar variant="progress-bar" now={86} />
          </div>
        </div>
        <div className="col-xs-12 my-3">
          <h3 className="text-uppercase form2-heading">CREDIT SCORE</h3>
        </div>
        <div className="col-xs-12 pb-4 d-flex">
          <div>
            <img className="tool-image mt-4" src={tool} alt="" />
          </div>
          <div className="tool-desc">
            <p>Please estimate your credit score or check your score below/</p>
          </div>
        </div>
        


 <Link className="text-decoration-none" to={`/form24`} state={{ from:  ["Great 700+",from] }}>
        <div className="col-xs-12 my-2 time-box">Great 700+</div>
        </Link>
       <Link className="text-decoration-none" to={`/form24`} state={{ from:  ["Good 600-700",from] }}>
        <div className="col-xs-12 my-2 time-box">Good 600-700</div>
        </Link>
         <Link className="text-decoration-none" to={`/form24`} state={{ from:  ["Fair 500-600",from] }}>
        <div className="col-xs-12 my-2 time-box">Fair 500-600</div>
        </Link>
       <Link className="text-decoration-none" to={`/form24`} state={{ from:  ["Poor-less than 500",from] }}>
        <div className="col-xs-12 my-2 time-box">Poor- less than 500 </div>
        </Link>
        <Link className="text-decoration-none" to={`/form24`} state={{ from:  ["not Sure",from] }}>
        <div className="col-xs-12 my-2 time-box">not sure</div>
        </Link>

       <Link className="text-decoration-none" to={`/form22`}>
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