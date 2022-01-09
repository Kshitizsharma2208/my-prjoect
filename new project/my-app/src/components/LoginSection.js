import React from "react";
import "./LoginSection.css";

const LoginSection = () => {
  return (
    <>
      <div className="loginSection">
        <div className="secondaryNavbar">
          <ul className="details">
            <li>
              <a className="listItems" href="">
                About
              </a>
            </li>
            <li>
              <a className="listItems" href="">
                ActivityLog
              </a>
            </li>
            <li>
              <a className="listItems Active" href="">
                Settings
              </a>
            </li>
            <li>
              <a className="listItems" href="">
                Change Password
              </a>
            </li>
            <hr />
          </ul>
        </div>
        <div className="footer">
            <div className="footerHeader">
                <p className="notification">Notifications</p>
                <p className="alert">Set Alerts</p>         
            </div>
            <hr />
            <div className="article">
                <p>Select what you want to be notified for:</p>
            </div> 
            <div className="contentFooter">
                <div className="buttonToogle">
                <input type="checkbox" id="switch" /><label className="label" for="switch">Toggle</label>
                </div>
                <div className="buttonTarget">
                    <p className="comments">Target Completion</p>
                    <p className="commentsBottom">Get notified when target due date is near or target is completed</p>
                </div>                
            </div>
            <div className="contentFooter">
                <div className="buttonToogle">
                <input type="checkbox" id="switch" /><label className="label" for="switch">Toggle</label>
                </div>
                <div className="buttonTarget">
                    <p className="comments">Status Update</p>
                    <p className="commentsBottom">Get notified when the status  of a lead/Proposal/Request/Complaints is changed</p>
                </div>               
            </div>
            <div className="checkBoxes">
                <div className="checkboxHolder">
                <input type="checkbox" className="checkbox" />
                <p className="boxComment" >Quotes</p>
                </div>
                <div className="checkboxHolder">
                <input type="checkbox" className="checkbox" />
                <p className="boxComment" >Proposal</p>
                </div>
                <div className="checkboxHolder">
                <input type="checkbox" className="checkbox" />
                <p className="boxComment" >Requests</p>
                </div>
                <div className="checkboxHolder">
                <input type="checkbox" className="checkbox" />
                <p className="boxComment" >Complains</p>
                </div>
                <div className="checkboxHolder">
                <input type="checkbox" className="checkbox" />
                <p className="boxComment" >Payments</p>
                </div>                                                      
            </div>
            <div className="contentFooter">
                <div className="buttonToogle">
                <input type="checkbox" id="switch" /><label className="label" for="switch">Toggle</label>
                </div>
                <div className="buttonTarget">
                    <p className="comments">Reminders</p>
                    <p className="commentsBottom">Get notified when a action is becoming state</p>
                </div>               
            </div> 
            <div className="contentFooter">
                <div className="buttonToogle">
                <input type="checkbox" id="switch" /><label className="label" for="switch">Toggle</label>
                </div>
                <div className="buttonTarget">
                    <p className="comments">Policy Renewals</p>
                    <p className="commentsBottom">Get notified when an a policy is lappsing soon</p>
                </div>               
            </div>
            <div className="contentFooter">
                <div className="buttonToogle">
                <input type="checkbox" id="switch" /><label className="label" for="switch">Toggle</label>
                </div>
                <div className="buttonTarget">
                    <p className="comments">Payment Requests</p>
                    <p className="commentsBottom">Get notified when you receive a new payment request</p>
                </div>               
            </div>
            <div className="contentFooter">
                <div className="buttonToogle">
                <input type="checkbox" id="switch" /><label className="label" for="switch">Toggle</label>
                </div>
                <div className="buttonTarget">
                    <p className="comments">Complaints</p>
                    <p className="commentsBottom">Get notified when you receive a new complaint</p>
                </div>               
            </div>
            <div className="contentFooter">
                <div className="buttonToogle">
                <input type="checkbox" id="switch" /><label className="label" for="switch">Toggle</label>
                </div>
                <div className="buttonTarget">
                    <p className="comments">Service Requests</p>
                    <p className="commentsBottom">Get notified when you receive a new service request</p>
                </div>               
            </div>
            <div className="contentFooter">
                <div className="buttonToogle">
                <input type="checkbox" id="switch" /><label className="label" for="switch">Toggle</label>
                </div>
                <div className="buttonTarget">
                    <p className="comments">Quote Generation</p>
                    <p className="commentsBottom">Get notified when a bank employee generates new quotes</p>
                </div>               
            </div>
            <div className="contentFooter">
                <div className="buttonToogle">
                <input type="checkbox" id="switch" /><label className="label" for="switch">Toggle</label>
                </div>
                <div className="buttonTarget">
                    <p className="comments">Proposal Generation</p>
                    <p className="commentsBottom">Get notified when a bank employee forwards a quote to you</p>
                </div>               
            </div>                      
        </div>
      </div>
    </>
  );
};
export default LoginSection;
