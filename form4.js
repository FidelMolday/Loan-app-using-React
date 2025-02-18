import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import tool from "../images/birthday.png";
import {MdArrowBackIosNew} from 'react-icons/md';
import secure from "../images/secure.png";
import Form from "react-bootstrap/form";
import '../styles/form2.css'
import Header from "./header";
import { useLocation } from "react-router-dom";
export default function Form4() {
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
            <ProgressBar variant="progress-bar" now={10} />
          </div>
        </div>
        <div className="col-xs-12 my-3">
          <h3 className="text-uppercase form2-heading">BIRTHDAY</h3>
        </div>
        <div className="col-xs-12 pb-4 d-flex">
          <div>
            <img className="tool-image mt-4" src={tool} alt="" />
          </div>
          <div className="tool-desc">
            <p>Your date of birth is needed t verify your identity.</p>
          </div>
        </div>
        <div className="name-input">
          <label className="form-label">Month</label> <br />
          <Form.Select aria-label="Default select example">
            <option>Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="1">April</option>
            <option value="2">May</option>
            <option value="3">June</option>
            <option value="1">July</option>
            <option value="2">August</option>
            <option value="3">September</option>
            <option value="1">October</option>
            <option value="2">November</option>
            <option value="3">December</option>
          </Form.Select>
        </div>
        <div className="name-input my-2">
          <label className="form-label">Day</label> <br />
          <Form.Select aria-label="Default select example">
            <option>Day</option>
            <option value="1">1-10</option>
            <option value="2">11-20</option>
            <option value="3">21-31</option>
          </Form.Select>
        </div>
        <div className="name-input my-2">
          <label className="form-label">Year</label> <br />
          <Form.Select aria-label="Default select example">
            <option>Year</option>
            <option value="1">1950-75</option>
            <option value="2">1975-2000</option>
            <option value="3">2000-present</option>
          </Form.Select>
        </div>

        <Link className="text-decoration-none" to={`/form5`} state={{ from: ["Night", from] }}>
              <button
                type="button"
                class="btn btn-block btn-lg btn-default"
                id="manualLoanamt"
              >
                Continue
              </button>
            </Link>
<Link className="text-decoration-none" to={`/form3`}>
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
