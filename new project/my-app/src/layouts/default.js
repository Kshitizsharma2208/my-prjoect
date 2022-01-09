import React from 'react';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

const  DefaultLayout = (props) => {
    return (
        <div className='container'>
            <Header />
            <div className='headerPrimary'>
                <Sidebar />
                {props.children}
            </div>
        </div>
    )
}
export default DefaultLayout;