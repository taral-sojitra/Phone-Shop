import React from 'react'
import MiBand2 from '../image/mi.png';
import earephone from '../image/earphone.png';
import iphone from '../image/Apple-iPhone-12.png';
const Feature_catagory = () => {
    return (
        <>
            <div className="feature_product container">
                <h1 className="heading text-center">FEATURED CATEGORIES</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <img src={iphone}></img>
                        <h1>Smart Phones</h1>
                        <p>this are your Smart friends</p>

                    </div>
                    <div className="col-lg-6">
                        <div className="frist">
                            <img src={MiBand2}></img>
                            <h1>Fitness Band</h1>
                            <p>this are your Fisness friends</p>
                        </div>
                        <div className="frist">
                            <img src={MiBand2}></img>
                            <h1>Fitness Band</h1>
                            <p>this are your Fisness friends</p>
                        </div>
                    </div>
                    {/* <div className="col-lg-4 col-md-4 mt-3">
                        
                    </div>
                    <div className="col-lg-4 col-md-4 mt-3">
                        <div className="card">
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mt-3">
                        <div className="card">
                            <img src={earephone}></img>
                            <h1>EarPhones</h1>
                            <p>this are your Audio friends</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Feature_catagory