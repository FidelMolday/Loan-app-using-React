import '../styles/information.css';

export default function Information(){
    return (
      <>
        <div className="information">
          <div className="container">
            <div className="col-xs-12 info-main-content">
              <h2 className="text-center information-heading">
                <span className="emphasis">Important </span> Information &amp;
                Disclosures
              </h2>
              <h4 className="information-sub-heading">
                APR Disclosure & Range Information
              </h4>
              <p className="information-desc">
                <small>
                  Annual Percentage Rate (APR) is a measure of the cost of
                  credit, expressed as a nominal yearly rate. It relates to the
                  amount and timing of value received by the consumer to the
                  amount and timing of payments made. FastLoanAdvance cannot
                  guarantee any APR since we are not a lender ourselves. Annual
                  Percentage Rates (APR) start from 5.99% up to a maximum of
                  35.99%. Personal loans have a 61-day minimum repayment period
                  and a 72-month maximum repayment period. Before accepting a
                  loan from a lender within our network, please read the loan
                  agreement carefully as the APR and repayment terms may differ
                  from what is listed on this site.
                </small>
              </p>
              <br />
              <hr />
              <br />
              <h5 className="info-table-heading">
                Representative Examples For APR, Total Loan Costs &amp; All
                Applicable Fees
              </h5>
              <div class="table-responsive">
                <table className="table table-striped table-bordered">
                  <tbody>
                    <tr className="text-center">
                      <td className="table-titles">Loan Amount</td>
                      <td>$1,000</td>
                      <td>$2,000</td>
                      <td>$5,000</td>
                      <td>$10,000</td>
                    </tr>
                    <tr className="text-center">
                      <td className="table-titles">Interest Rate</td>
                      <td>24%</td>
                      <td>19%</td>
                      <td>13%</td>
                      <td>8%</td>
                    </tr>
                    <tr className="text-center">
                      <td className="table-titles">Loan Term</td>
                      <td>12 Months</td>
                      <td>24 Months</td>
                      <td>48 Months</td>
                      <td>60 Months</td>
                    </tr>
                    <tr className="text-center">
                      <td className="table-titles">Fee</td>
                      <td>3%</td>
                      <td>5%</td>
                      <td>8%</td>
                      <td>10%</td>
                    </tr>
                    <tr className="text-center">
                      <td className="table-titles">Fee Cost</td>
                      <td>$30</td>
                      <td>$100</td>
                      <td>$400</td>
                      <td>$1,000</td>
                    </tr>
                    <tr className="text-center">
                      <td className="table-titles">Repayment</td>
                      <td>$94.56</td>
                      <td>$100.82</td>
                      <td>$131.67</td>
                      <td>$202.28</td>
                    </tr>
                    <tr className="text-center">
                      <td className="table-titles">APR</td>
                      <td>29.82%</td>
                      <td>24.12%</td>
                      <td>18.23%</td>
                      <td>9.20%</td>
                    </tr>
                    <tr className="text-center">
                      <td className="table-titles">Total Payments</td>
                      <td>$1,134.72</td>
                      <td>$2,419.68</td>
                      <td>$6,320.12</td>
                      <td>$12,136.80</td>
                    </tr>
                    <tr className="text-center">
                      <td className="table-titles">Total Costs</td>
                      <td>$164.72</td>
                      <td>$519.68</td>
                      <td>$1,720.12</td>
                      <td>$3,136.80</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4 className="info-table-subheading">Renewal Policy</h4>
              <p className="information-desc">
                <small>
                  Lenders have unique Renewal Policies. Some of them have
                  automatically renew or "roll-over" features. These
                  conveniences often come at an additional fee. Please ask the
                  lender you were connected with for their renewal policy.
                  Again, it is vital to read through the entire Loan Agreement
                  and Disclosures to make sure you are comfortable with their
                  terms before accepting the loan.
                </small>
              </p>
              <br />
              <h4 className="info-table-subheading">
                Late, Partial, or Non-Payments and Collections
              </h4>
              <p className="information-desc">
                <small>
                  Though each lender must operate within the state laws that
                  govern them, they have their respective approaches to handling
                  late payments. A loan is an agreement between you and the
                  lender to fully repay the loan by the time agreed. Depending
                  on your agreement with your lender, if you are late for the
                  agreed payment, a lender may add fees, send to a collections
                  agency, report your late, partial or non-payment to a consumer
                  reporting agency. These policies change per lender, so please
                  make sure to consult your lender to find their respective
                  policies.
                </small>
              </p>
            </div>
          </div>
        </div>
      </>
    );
}