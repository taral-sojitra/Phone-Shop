import React from 'react';

import '../Components/style/Home.css';
import note10 from '../image/redmi-note-10s.png';


const Header = () => {
    return (
        <>
            <div className="header">
                {/* <Navbar /> */}
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <h1>Buy Your Best Electronic Friends</h1>
                        <p>with flat 15% discount</p>
                        <button className="btn">Explore Now</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-">
                        <img src={note10}></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;

