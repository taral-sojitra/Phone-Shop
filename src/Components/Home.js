import React from 'react';
import '../Components/style/Home.css';
import Header from '../HomeComponent/Header';
import Feature_catagory from '../HomeComponent/Feature_catagory';
import Mobile from '../HomeComponent/Mobile';
import Band from '../HomeComponent/Band';
import Earphone from '../HomeComponent/Earphone';
import { Offers, Offers2, Offers3 } from '../HomeComponent/Offers';
import Brands from '../HomeComponent/Brands';
import Navbar from './Navbar';
import Futter from '../Components/Futter';

export const Home = () => {
    return (
        <>

            <Header />
            <Mobile start="0" end="4" />
            <Offers
                mobile_img="redmi-note-10s.png"
                offer_name="Coming Soon"
                mobile_name="Redmi Note 10s"
                offer_dis="48MP Quad Camara | &nbsp; MediaTek Helio G95 |  &nbsp; 6000 mAh Battety"
            />
            <Mobile start="4" end="8" />
            <Offers
                mobile_img="realme.png"
                offer_name="Exclusively Available"
                mobile_name="Realme Narzo 10"
                offer_dis="64MP Quad Camara | &nbsp; snapdragon 720g |  &nbsp; 5000 mAh Battety"
            />
            <Mobile start="8" end="12" />
            <Offers
                mobile_img="oneplus.png"
                offer_name="10% off on kotak Crdit / debit Cards"
                mobile_name="OnePlue 9 Pro"
                offer_dis="50 MP Ultra-Wide Camera | &nbsp; Snapdragon™ 888 |  &nbsp; 120 Hz Fluid AMOLED Display"
            />
            <Brands />
            <Futter />
        </>
    )
}

