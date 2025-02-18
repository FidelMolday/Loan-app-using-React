import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import tool from "../images/EMPLOYER.png";
import {MdArrowBackIosNew} from 'react-icons/md';
import secure from "../images/secure.png";
import Header from "./header";
import {useState} from 'react';
import { useLocation } from "react-router-dom";
export default function Form15() {
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
    <Header/>
      <div className="form-wrapper">
        <div className="row">
          <div className="col-xs-12">
            <span className="form2-top">Employment Info</span>
          </div>
          <div className="col-xs-12">
            <ProgressBar variant="progress-bar" now={54} />
          </div>
        </div>
        <div className="col-xs-12 my-3">
          <h3 className="text-uppercase form2-heading">EMPLOYER NAME</h3>
        </div>
        <div className="col-xs-12 pb-4 d-flex">
          <div>
            <img className="tool-image mt-4" src={tool} alt="" />
          </div>
          <div className="tool-desc">
            <p>
              
                                            Lenders want to know that you're secure in your employment because after all, the money you make is how you're going to be able to repay them.
                                        
            </p>
          </div>
        </div>
          <input onChange={handleChange} className="form-control input-lg" type="text" />
          <Link className="text-decoration-none" to={`/form16`} state={{ from:  {Name,from} }}>
          <button
          type="button"
          className="btn btn-block btn-lg btn-default my-4"
          id="manualLoanamt"
        >
          Continue
        </button>
        </Link>
       <Link className="text-decoration-none" to={`/form14`}>
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