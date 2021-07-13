import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import '../Components/style/ProductDetails.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdCompareArrows } from 'react-icons/md';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
// import Swiper core and required modules
import SwiperCore, {
    Navigation
} from 'swiper/core';
import { BiRupee } from 'react-icons/bi'
import { useParams } from 'react-router-dom';
import { AddToWishList, setCardItem, setOneProduct, setWishListItem, compareProduct } from '../Redux/Actions/ProductAction';
import { Link } from 'react-router-dom';
import Mobile from '../HomeComponent/Mobile';


// install Swiper modules
SwiperCore.use([Navigation]);

const ProductDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const mobile_data = useSelector(state => state.DefaultReducer.item);
    console.log(mobile_data)
    const getProduct = () => {
        const get_mobile_data = mobile_data.find(data => data.id === id);
        console.log(get_mobile_data);
        dispatch(setOneProduct(get_mobile_data));


    }
    useEffect(() => {

        getProduct();
    }, [])
    const fatch_mobile_data = useSelector(state => state.DefaultReducer.oneProduct);
    console.log(fatch_mobile_data);

    const AddToCard = (id) => {
        const find_card_item = mobile_data.find(card_item => card_item.id === id);
        console.log(find_card_item);
        dispatch(setCardItem(find_card_item));



    }
    const AddToWishList = (id) => {
        const find_wishlist_item = mobile_data.find(card_item => card_item.id === id);
        console.log(find_wishlist_item);
        dispatch(setWishListItem(find_wishlist_item));
    }
    const AddToCompare = (id) => {
        const find_compate_product = mobile_data.find(card_item => card_item.id === id);
        dispatch(compareProduct(find_compate_product));
    }
    return (
        <>

            <div className="pro_details">
                <div className="row">
                    {
                        fatch_mobile_data.map((data, id) => {
                            return (

                                <>
                                    <div className="col-lg-6 product_slider" key={id}>
                                        <Swiper navigation={true} className="mySwiper">
                                            <SwiperSlide><img src={data.mobile_img_1} alt={data.alt}></img></SwiperSlide>
                                            <SwiperSlide><img src={data.mobile_img_2} alt={data.alt}></img></SwiperSlide>
                                            <SwiperSlide><img src={data.mobile_img_3} alt={data.alt}></img></SwiperSlide>
                                            <SwiperSlide><img src={data.mobile_img_4} alt={data.alt}></img></SwiperSlide>
                                            <SwiperSlide><img src={data.mobile_img_5} alt={data.alt}></img></SwiperSlide>
                                        </Swiper>
                                    </div>
                                    <div className="col-lg-6 product_details">
                                        <h1 className="pro_title">{data.mobile_name}</h1>
                                        <p className="pro_price"><BiRupee />{data.price}</p>
                                        <p className="pro_dis">You Save :<BiRupee />2500</p>
                                        <div className="pro_feature">
                                            <h3>Features : </h3>
                                            <ul>
                                                <li>{data.ram} | {data.rom}</li>
                                                <li>{data.display}</li>
                                                <li>{data.battery}</li>
                                                <li>{data.camara}</li>
                                            </ul>
                                        </div>
                                        <div className="button">
                                            <Link to="/card" className="btn" onClick={() => AddToCard(data.id)}>Add To Card</Link>
                                            <Link to="/wishlist" className="btn" onClick={() => AddToWishList(data.id)}>< AiOutlineHeart /></Link>
                                            <Link to="/compare_product" className="btn" onClick={() => { AddToCompare(data.id) }}>< MdCompareArrows /></Link>
                                        </div>
                                    </div>
                                </>


                            )
                        })
                    }


                </div>

            </div>
        </>
    )
}

export default ProductDetails
