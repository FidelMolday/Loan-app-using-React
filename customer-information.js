import info from '../images/customer-info.png';
import '../styles/apr.css';
export default function CustomerInfo(){
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 apr-img-col d-none d-sm-block">
              <img className="apr-img" src={info} alt="" />
            </div>
            <div className="col-lg-6 apr-desc">
              <h5 className='heading1'>What you need to know about ...</h5>
              <h2 className='heading2'>Customer Information?</h2>
              <p className='faq-desc'>
                <small>
               Personal loans differ from other types of loans, such as home mortgages or automobile loans. Specifically, personal loans allow you to spend your money in a number of different ways, whether it's to help pay off medical expenses, make home improvements, repairs to your vehicle or consolidate your debts. A personal loan is paid back to the lender over a set period of time. Fill out the form and see just how much money you can borrow from the comfort of your own home. It's as easy as that!
                </small>
              </p>

              <a className='btn request-btn' href="">REQUEST LOAN TODAY</a>
            </div>
          </div>
        </div>
      </>
    );
}