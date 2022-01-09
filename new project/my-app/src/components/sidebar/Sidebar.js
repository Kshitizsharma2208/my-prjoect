import React from "react";
import "./Sidebar.css";
import home from "../../asserts/images/icon-home.png";
import leads from "../../asserts/images/icon-leads.png";
import policies from "../../asserts/images/icon-policies.png";
import payment from "../../asserts/images/icon-payment.png";
import complains from "../../asserts/images/icon-complains.png";
import request from "../../asserts/images/icon-request.png";
import analytics from "../../asserts/images/icon-analytics.png";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarContent">
        <ul className="sidebarItems">
          <li className="sidebarList"> 
          <div className="sidebarImgBox">
           <img className="sidebarImg" src={home} alt="" />
            </div>                     
            <a className="sidebarText" href="">Home</a>
          </li>
        
          <li className="sidebarList"> 
          <div className="sidebarImgBox">
          <img className="sidebarImg" src={leads} alt="" />              
              </div>                                   
            <a className="sidebarText" href="">Leads</a>
          </li>
          
          <li className="sidebarList">
          <div className="sidebarImgBox">
          <img className="sidebarImg" src={policies} alt="" />
          </div>                     
            <a className="sidebarText" href="">Policies</a>
          </li>

          <li className="sidebarList">                     
            <div className="sidebarImgBox">
            <img className="sidebarImg" src={payment} alt="" />
            </div>
            <a className="sidebarText" href="">Payments</a>
          </li>

          <li className="sidebarList"> 
           <div className="sidebarImgBox">        
            <img className="sidebarImg" src={complains} alt="" />
            </div>
            <a className="sidebarText" href="">Complains</a>
          </li>

          <li className="sidebarList"> 
          <div className="sidebarImgBox">             
            <img className="sidebarImg" src={request} alt="" />
            </div>
            <a className="sidebarText" href="">Requests</a>
          </li>

          <li className="sidebarList">
          <div className="sidebarImgBox">  
          <img className="sidebarImg" src={analytics} alt="" />
          </div>                     
            <a  className="sidebarText" href="">Analytics</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
