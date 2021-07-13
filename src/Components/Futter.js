import React from 'react';
import '../Components/style/Futter.css';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const Futter = () => {
    return (
        <>
            <div className="futter">
                <div className="row">
                    <div className="col-lg-4">
                        <ul>
                            <h1 className="title">About Us</h1>
                            <li>Take the visitors on your website to a trip down memory lane,
                                and give them an insight to the history behind your store. Here,
                                you can show them where, how, and when you started.</li>
                        </ul>

                    </div>
                    <div className="col-lg-4">
                        <ul>
                            <h1 className="title">Links</h1>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Term & Condition</a></li>
                            <li><a href="#">disclaimer</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Pricaty Policy</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <ul>
                            <h1 className="title">Contact Us</h1>
                            <li className="title">Address :</li>
                            <li>815, JB Tower, Sal hospital Cross road, Drive In Road, Thaltej, Ahmedabad, Gujarat 380061</li>
                            <li className="title">Mobile : </li>
                            <li>1234567890</li>
                            <li className="title">Gmail : </li>
                            <li>phonewala@gmail.com </li>
                        </ul>
                    </div>
                </div>
                <div className="social-icon">
                    <h1 className="title">Follow Us</h1>
                    <ul>
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><AiFillInstagram /></a></li>
                        <li><a href="#"><AiFillTwitterCircle /></a></li>
                        <li><a href="#"><AiFillLinkedin /></a></li>
                        <li><a href="#"><AiFillYoutube /></a></li>
                    </ul>
                </div>
                <div className="copy-rights">
                    <p>© 2021 phonwale. All Rights Reserved. Created By Avadh Patel</p>
                </div>
            </div>
        </>


    )
}

export default Futter


{/* <ul>
                            <h1>Follow Us</h1>
                            <li><a href="#"><FaFacebook /></a></li>
                            <li><a href="#"><AiFillInstagram /></a></li>
                            <li><a href="#"><AiFillTwitterCircle /></a></li>
                            <li><a href="#"><AiFillLinkedin /></a></li>
                            <li><a href="#"><AiFillYoutube /></a></li>
                        </ul> */}