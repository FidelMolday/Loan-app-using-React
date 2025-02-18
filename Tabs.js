import { useState } from "react";
import "../styles/tabs.css";
import Apr from "./apr";
import CustomerInfo from "./customer-information";
import FeesInterest from "./fees-interest";
import LatePayment from "./late-payment";
import PersonalLoan from "./personal-loan";
import RepayLoan from "./repay-loan";
export default function Tab() {

  const [tab, setTab] = useState("arp");
  return (
    <>
      <div className="tab-main-content">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="text-center tabs-heading">
                <strong className="emphasis">Questions</strong> We Are
                Frequently Asked
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 nav-list-head">
              <ul className="nav d-md-flex d-sm-block ">
                <li className={` nav-tab-list`} style={tab =="arp" ? { color:"black", borderBottom:"2px solid black"}:{}} onClick={() => setTab("arp")}>
                  APR INFORMATION
                </li>
                <li className="nav-tab-list" style={tab =="personal" ? { color:"black", borderBottom:"2px solid black"}:{}} onClick={() => setTab("personal")}>
                  WHAT'S A PERSONAL LOAN
                </li>
                <li className="nav-tab-list" style={tab =="cust" ? { color:"black", borderBottom:"2px solid black"}:{}} onClick={() => setTab("cust")}>
                  CUSTOMER INFORMATION
                </li>
                <li className="nav-tab-list" style={tab =="repay" ? { color:"black", borderBottom:"2px solid black"}:{}} onClick={() => setTab("repay")}>
                  WHEN TO REPAY LOAN
                </li>
                <li className="nav-tab-list" style={tab =="fees" ? { color:"black", borderBottom:"2px solid black"}:{}} onClick={() => setTab("fees")}>
                  FEES & INTEREST
                </li>
                <li className="nav-tab-list" style={tab =="late" ? { color:"black", borderBottom:"2px solid black"}:{}} onClick={() => setTab("late")}>
                  LATE PAYMENT
                </li>
              </ul>
            </div>

            {tab === "arp" ? <Apr /> : ""}
            {tab === "cust" ? <CustomerInfo /> : ""}
            {tab === "personal" ? <PersonalLoan /> : ""}
            {tab === "repay" ? <RepayLoan /> : ""}
            {tab === "fees" ? <FeesInterest /> : ""}
            {tab === "late" ? <LatePayment /> : ""}
          </div>
        </div>
      </div>
    </>
  );
}
