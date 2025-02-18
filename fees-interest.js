import fees from '../images/fees-interest.png';
import '../styles/apr.css';
export default function FeesInterest(){
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 apr-img-col d-none d-sm-block">
              <img className="apr-img" src={fees} alt="" />
            </div>
            <div className="col-lg-6 apr-desc">
              <h5 className='heading1'>What you need to know about ...</h5>
              <h2 className='heading2'>Any Fees or Interest?</h2>
              <p className='faq-desc'>
                <small>
                 GraceLoanAdvance services will always be provided free of charge, but that is not to say that the lender will give you a loan for free. Your lender will charge you fees and/or interest and must provide you with full disclosure of their loan terms upon approval. It is then your responsibility to read through the terms before signing your loan agreement.
                </small>
              </p>

              <a className='btn request-btn' href="">REQUEST LOAN TODAY</a>
            </div>
          </div>
        </div>
      </>
    );
}