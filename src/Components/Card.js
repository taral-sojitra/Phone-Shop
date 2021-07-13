import React, { useEffect, useState } from 'react';
import '../Components/style/Card.css';
import note10 from '../image/redmi-note-10s.png';
import { BiRupee } from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { increment, removeCardItem, decrement, gettotalitem } from '../Redux/Actions/ProductAction';
import { Link } from 'react-router-dom';
import { initialState } from '../Redux/Reducers/AllFolderReducers';
import { BiArrowBack } from 'react-icons/bi'



const Card = () => {

    const dispatch = useDispatch()
    const get_card_item = useSelector(state => state.DefaultReducer.Carditem)
    console.log(get_card_item);
    const get_total_amount = useSelector(state => state.DefaultReducer.totalAmount);
    console.log(get_total_amount);
    const get_texAmount = useSelector(state => state.DefaultReducer.TexAmount);


    const removeItem = (id) => {
        dispatch(removeCardItem(id));
    }

    const Increment = (id) => {
        dispatch(increment(id))

    }
    const Decrement = (id) => {
        dispatch(decrement(id))

    }
    useEffect(() => {
        dispatch(gettotalitem());
    }, [get_card_item]);
    return (
        <div className="card_item">
            <h1>Card Items </h1>
            <div className="row">
                <div className="col-lg-9">
                    <div className="card_heading">
                        <div className="row text-center">
                            <div className="col-lg-2">Image</div>
                            <div className="col-lg-2">Name</div>
                            <div className="col-lg-2">Price</div>
                            <div className="col-lg-2">Quntity</div>
                            <div className="col-lg-2">Total Price</div>
                            <div className="col-lg-2">Remove</div>
                        </div>
                    </div>
                    <div className="card_row">
                        {

                            get_card_item.map((data, id) => {
                                return (
                                    <>
                                        <div className="row">
                                            <div className="col-lg-2"><img src={data.mobile_img_1} alt={data.alt}></img></div>
                                            <div className="col-lg-2">{data.mobile_name}</div>
                                            <div className="col-lg-2">{data.price}</div>
                                            <div className="col-lg-2 inc_dec">
                                                <button className="btn" onClick={() => Decrement(data.id)}>-</button>
                                                <div className="quantity">{data.quantity}</div>
                                                <button className="btn" onClick={() => Increment(data.id)}>+</button>
                                            </div>
                                            <div className="col-lg-2">{data.price * data.quantity}</div>
                                            <div className="col-lg-2"><Link onClick={() => removeItem(data.id)}>Remove</Link></div>
                                        </div>
                                    </>

                                )
                            })

                        }

                    </div>
                </div>
                <div className="col-lg-3 summary">
                    <div className="card_summary">
                        Card Summary
                    </div>
                    <div className="card_price">
                        <p>Totol Amount :</p>
                        <p>{get_total_amount}</p>
                    </div>
                    <div className="tex_amount">
                        <p> 18% GST :</p>
                        <p>{Math.floor(get_texAmount)}</p>
                    </div>
                    <div className="total_amount">
                        <p>Totol Amount :</p>
                        <p>{Math.floor(get_total_amount + get_texAmount)}</p>
                    </div>
                    <Link className="btn">PLACE ORDER</Link>
                    <Link to="/" className="link"><BiArrowBack /> Continue Shopping</Link>
                </div>
            </div>
        </div >
    )
}

export default Card
