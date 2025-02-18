export default function Nablasol1(){
    return (
      <>
        <div className="main-container">
          <div className="container">
            <div className="row d-flex">
              <div className="col-sm-4">1 My profile</div>
              <div className="col-sm-4">2 Business Information</div>
              <div className="col-sm-4">3 Additional Users</div>
            </div>
            <div className="col-xs-12">Step1</div>
            <div className="col-xs-12">Your profile</div>
            <div className="col-xs-12">
              Enter the login information for your account. You will be able to
              create additional users after registering.
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="">First Name*</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Input Your First Name "
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="">Last Name*</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Input Your Last Name "
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="">Email*</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Input Your Email "
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="">Phone Number*</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Input Your Phone Number "
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="">Password*</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Create Password "
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="">Confirm Password*</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Confirm Your Password"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}