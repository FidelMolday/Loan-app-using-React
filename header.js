
import '../styles/header.css';
import logo from "../images/logo-image.png";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className=" header-image">
              <img className="logo-image" src={logo} alt="" />
            </div>
            <div className=" disclosures">
              <span className="">Disclosures</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;