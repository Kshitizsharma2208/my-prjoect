import React from 'react'
import Main from "./main/Main";
import LoginSection from "./LoginSection"

export default function landing() {
    return (
        <>
            <div className="landing">
            {/* <Sidebar/> */}
            <Main/>   
            <LoginSection/>  
                </div>
            
        </>
    )
}