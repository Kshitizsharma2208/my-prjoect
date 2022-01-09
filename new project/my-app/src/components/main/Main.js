import React from 'react'
import profilePic from "../../asserts/images/profilephoto2.jpg"
import search from "../../asserts/images/icon-search.png"
import "./Main.css"

const Main = () => {
    return (
    <>      
        <div className='mainContent'>
            <header className="headerSecondary">
                <div className="profileDetails">
                    <div className="profileImage">
                        <img className='profileImg' src={profilePic} alt="" />
                    </div>
                    <div className="profileDescription">
                        <p className='prfileName'>Varun Kashyap</p>
                        <p className='designation'>Designation: Bank Employee</p>
                        <p className="joining">Joined: 25 Nov 2008</p>
                    </div>
                </div>
                <div className="loginSection">
                    <div className="searchBar">
                        <input className='textImg' type="text" placeholder='Enter Keyword'/>
                        <div className="searchLogo"><img className='searchImg' src={search} alt="" /> </div>
                        <div className="logoutButton">
                         <button className="logout">Log out</button>
                        </div>
                        <div className="search">                            
                        </div>
                    </div>
                </div>              
            </header>           
        </div>        
    </>
    )
}
export default Main