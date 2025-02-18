import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import tool from "../images/military.png";
import {MdArrowBackIosNew} from 'react-icons/md';
import secure from "../images/secure.png";
import Header from "./header";
import { useLocation } from "react-router-dom";
export default function Form13() {
     const location = useLocation();
  const { from } = location.state;
  console.log(from);
  return (
    <>
    <Header/>
      <div className="form-wrapper">
        <div className="row">
          <div className="col-xs-12">
            <span className="form2-top">Employment Info</span>
          </div>
          <div className="col-xs-12">
            <ProgressBar variant="progress-bar" now={46} />
          </div>
        </div>
        <div className="col-xs-12 my-3">
          <h3 className="text-uppercase form2-heading">ARE YOU AN ACTIVE-DUTY MILITARY MEMBER?</h3>
        </div>
        <div className="col-xs-12 pb-4 d-flex">
          <div>
            <img className="tool-image mt-4" src={tool} alt="" />
          </div>
          <div className="tool-desc">
            <p>
              Only click yes if you are an active-duty service member.
            </p>
          </div>
        </div>
        <Link className="text-decoration-none" to={`/form14`} state={{ from: ["Yes", from] }}>
        <div className="col-xs-12 my-2 time-box">Yes</div>
        </Link>
        <Link className="text-decoration-none" to={`/form14`} state={{ from: ["No", from] }}>
        <div className="col-xs-12 my-2 time-box">No</div>
        </Link>

        

        <Link className="text-decoration-none" to={`/form12`}>
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