import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import tool from "../images/money.png";
import {MdArrowBackIosNew} from 'react-icons/md';
import secure from "../images/secure.png";
import Header from "./header";
import { useLocation } from "react-router-dom";
export default function Form11() {
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
            <ProgressBar variant="progress-bar" now={38} />
          </div>
        </div>
        <div className="col-xs-12 my-3">
          <h3 className="text-uppercase form2-heading">MONTHLY GROSS INCOME</h3>
        </div>
        <div className="col-xs-12 pb-4 d-flex">
          <div>
            <img className="tool-image mt-4" src={tool} alt="" />
          </div>
          <div className="tool-desc">
            <p>
              Approximately how much do you make each month{" "}
              <strong>before taxes</strong>?
            </p>
          </div>
        </div>
     

 <Link className="text-decoration-none" to={`/form12`} state={{ from: ["$5000 or more", from] }} >
        <div className="col-xs-12 my-2 time-box">$5000 or more</div>
        </Link>
       <Link className="text-decoration-none" to={`/form12`} state={{ from: ["$4000-$5000", from] }}>
        <div className="col-xs-12 my-2 time-box">$4000-$5000</div>
        </Link>
         <Link className="text-decoration-none" to={`/form12`} state={{ from: ["$3500-$4000", from] }}>
        <div className="col-xs-12 my-2 time-box">$3500-$4000</div>
        </Link>
       
        <Link className="text-decoration-none" to={`/form12`} state={{ from: ["$3000-$3500", from] }}>
        <div className="col-xs-12 my-2 time-box">$3000-$3500</div>
        </Link>
         <Link className="text-decoration-none" to={`/form12`} state={{ from: ["$2500-$3500", from] }}>
        <div className="col-xs-12 my-2 time-box">$2500-$3500</div>
        </Link>
       <Link className="text-decoration-none" to={`/form12`} state={{ from: ["$2000-$2500", from] }}>
        <div className="col-xs-12 my-2 time-box">$2000-$2500</div>
        </Link>
        <Link className="text-decoration-none" to={`/form12`} state={{ from: ["$1500-$2000", from] }}>
        <div className="col-xs-12 my-2 time-box">$1500-$2000</div>
        </Link>
           <Link className="text-decoration-none" to={`/form12`} state={{ from: ["Below $1500", from] }}>
        <div className="col-xs-12 my-2 time-box">Below $1500</div>
        </Link>

       <Link className="text-decoration-none" to={`/form10`}>
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