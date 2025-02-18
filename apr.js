import apr from '../images/apr.png';
import '../styles/apr.css';
export default function Apr(){
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 apr-img-col d-none d-sm-block">
              <img className="apr-img " src={apr} alt="" />
            </div>
            <div className="col-lg-6 apr-desc">
              <h5 className='heading1'>What you need to know about ...</h5>
              <h2 className='heading2'>What is APR?</h2>
              <p className='faq-desc'>
                <small>
                  Annual Percentage Rate (APR) is a measure of the cost of
                  credit, expressed as a nominal yearly rate. It relates to the
                  amount and timing of value received by the consumer to the
                  amount and timing of payments made. GraceLoanAdvance cannot
                  guarantee any APR since we are not a lender ourselves. An APR
                  can generally run between 5.99% up to 35.99%. Loan products
                  general have a 61-day minimum repayment term and a 72-month
                  maximum repayment term. Before accepting a loan from a lender
                  within our network, please read the loan agreement carefully
                  as the APR and repayment terms may differ from what is listed
                  on this site.
                </small>
              </p>

              <a className='btn request-btn' href="">REQUEST LOAN TODAY</a>
            </div>
          </div>
        </div>
      </>
    );
}