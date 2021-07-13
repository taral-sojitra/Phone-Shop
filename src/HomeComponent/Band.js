import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import miband from '../image/mi-band.png';
import { BiRupee } from 'react-icons/bi'
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Band = () => {
    return (
        <>
            <div className="mobile container">
                <h1 className="heading text-center mb-3">Fitness Friedns</h1>
                <div className="row">
                    <div className="col-lg-3 mt-3 col-md-6 col-sm-12">
                        <div className="card text-center">
                            <div className="card-img">
                                <img src={miband}></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Apple IPhone 12</h5>
                                <p className="card-text"><BiRupee /> 999/-</p>
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
                                <img src={miband}></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Apple IPhone 12</h5>
                                <p className="card-text"><BiRupee /> 999/-</p>
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
                                <img src={miband}></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Apple IPhone 12</h5>
                                <p className="card-text"><BiRupee /> 999/-</p>
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
                                <img src={miband}></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Apple IPhone 12</h5>
                                <p className="card-text"><BiRupee /> 999/-</p>
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

export default Band;
