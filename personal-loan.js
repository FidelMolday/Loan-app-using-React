import loan from '../images/personal-loan.png';
import '../styles/apr.css';
export default function PersonalLoan(){
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 apr-img-col d-none d-sm-block">
              <img className="apr-img" src={loan} alt="" />
            </div>
            <div className="col-lg-6 apr-desc">
              <h5 className='heading1'>Is a Personal Loan right for you ... lets find out.</h5>
              <h2 className='heading2'>What is a Personal Loan?</h2>
              <p className='faq-desc'>
                <small>
                People get personal loans to help with home repairs, unexpected expenses, holiday shopping, and more. A loan from one of our lenders can help you get the funds you need! Just fill out our Online Form. Follow the short process and if you are approved, receive your cash loan!


                </small>
              </p>

              <a className='btn request-btn' href="#">REQUEST LOAN TODAY</a>
            </div>
          </div>
        </div>
      </>
    );
}