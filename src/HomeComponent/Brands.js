import React from 'react';
import milogo from '../image/logo_mi.png';
import samsunglogo from '../image/logo_samsung.png';
import onepluslogo from '../image/logo_oneplus.png';
import vivologo from '../image/logo_vivo.png';
import oppologo from '../image/logo_oppo.png';
import realmelogo from '../image/logo_realme.png';
import Boatlogo from '../image/Boat-Logo.png';


;
const Brands = () => {
    return (
        <>
            <div className="brand-logo">
                <div className="row">
                    <div className="col-lg-3 col-md-4 mt-3">
                        <img src={milogo}></img>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-3">
                        <img src={samsunglogo}></img>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-3">
                        <img src={onepluslogo}></img>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-3">
                        <img src={realmelogo}></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 c mt-3">
                        <img src={vivologo}></img>
                    </div>
                    <div className="col-lg-4  col-md-4 mt-3">
                        <img src={oppologo}></img>
                    </div>
                    <div className="col-lg-4 col-md-4 mt-3">
                        <img src={Boatlogo}></img>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Brands
