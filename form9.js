import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import tool from "../images/home.png";
import {MdArrowBackIosNew} from 'react-icons/md';
import secure from "../images/secure.png";
import Header from "./header";
import { useLocation } from "react-router-dom";
export default function Form9() {
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
            <ProgressBar variant="progress-bar" now={30} />
          </div>
        </div>
        <div className="col-xs-12 my-3">
          <h3 className="text-uppercase form2-heading">
            HOW LONG HAVE YOU LIVED AT YOUR HOME
          </h3>
        </div>
        <div className="col-xs-12 pb-4 d-flex">
          <div>
            <img className="tool-image mt-4" src={tool} alt="" />
          </div>
          <div className="tool-desc">
            <p>
              Tell us how long you have lived at your <strong>current</strong>{" "}
              residence.
            </p>
          </div>
        </div>
     


         <Link className="text-decoration-none" to={`/form10`} state={{ from: ["1 Year or less", from] }}>
        <div className="col-xs-12 my-2 time-box">1 Year or less</div>
        </Link>
       <Link className="text-decoration-none" to={`/form10`} state={{ from: ["2 Years", from] }}>
        <div className="col-xs-12 my-2 time-box">2 Years</div>
        </Link>
         <Link className="text-decoration-none" to={`/form10`} state={{ from: ["3 Years", from] }}>
        <div className="col-xs-12 my-2 time-box">3 Years</div>
        </Link>
       <Link className="text-decoration-none" to={`/form10`} state={{ from: ["4 Years", from] }}>
        <div className="col-xs-12 my-2 time-box">4 Years</div>
        </Link>
        <Link className="text-decoration-none" to={`/form10`} state={{ from: ["5 Years or more", from] }}>
        <div className="col-xs-12 my-2 time-box">5 Years or more</div>
        </Link>

       <Link className="text-decoration-none" to={`/form8`} >
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


