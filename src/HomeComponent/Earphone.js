import React from 'react'
import Earphone from '../image/earphone.png';
import { BiRupee } from 'react-icons/bi'
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Mobile = () => {
    return (
        <>
            <div className="mobile container">
                <h1 className="heading text-center mb-3">Audio Friedns</h1>
                <div className="row">
                    <div className="col-lg-3 mt-3 col-md-6 col-sm-12">
                        <div className="card text-center">
                            <div className="card-img">
                                <img src={Earphone}></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Boat Earphone Basic</h5>
                                <p className="card-text"><BiRupee /> 1299/-</p>
                                <div className="links">
                                    <Link to="/" className="link-item"><AiOutlineEye /></Link>
                                    <Link to="/" className="link-item"><AiOutlineHeart /></Link>
                                    <Link to="/" className="link-item"><HiShoppingCart /></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-3">
                        <div className="card text-center">
                            <div className="card-img">
                                <img src={Earphone}></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Boat Earphone Basic</h5>
                                <p className="card-text"><BiRupee /> 1299/-</p>
                                <div className="links">
                                    <Link to="/" className="link-item"><AiOutlineEye /></Link>
                                    <Link to="/" className="link-item"><AiOutlineHeart /></Link>
                                    <Link to="/" className="link-item"><HiShoppingCart /></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6  mt-3">
                        <div className="card text-center">
                            <div className="card-img">
                                <img src={Earphone}></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Boat Earphone Basic</h5>
                                <p className="card-text"><BiRupee /> 1299/-</p>
                                <div className="links">
                                    <Link to="/" className="link-item"><AiOutlineEye /></Link>
                                    <Link to="/" className="link-item"><AiOutlineHeart /></Link>
                                    <Link to="/" className="link-item"><HiShoppingCart /></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-3">
                        <div className="card text-center">
                            <div className="card-img">
                                <img src={Earphone}></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Boat Earphone Basic</h5>
                                <p className="card-text"><BiRupee /> 1299/-</p>
                                <div className="links">
                                    <Link to="/" className="link-item"><AiOutlineEye /></Link>
                                    <Link to="/" className="link-item"><AiOutlineHeart /></Link>
                                    <Link to="/" className="link-item"><HiShoppingCart /></Link>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Mobile;
