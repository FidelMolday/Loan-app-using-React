import repayLoan from '../images/repay-loan.png';
import '../styles/apr.css';
export default function RepayLoan(){
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 apr-img-col d-none d-sm-block">
              <img className="apr-img" src={repayLoan} alt="" />
            </div>
            <div className="col-lg-6 apr-desc">
              <h5 className='heading1'>What you need to know about ...</h5>
              <h2 className='heading2'>When Do You Repay Your Loan?</h2>
              <p className='faq-desc'>
                <small>
                 Loan repayment terms differ by lender. Thus, it is important to check the loan agreement from your lender for information on the lender's repayment terms.
                </small>
              </p>

              <a className='btn request-btn' href="">REQUEST LOAN TODAY</a>
            </div>
          </div>
        </div>
      </>
    );
}