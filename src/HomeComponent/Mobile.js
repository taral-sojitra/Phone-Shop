import React from 'react'
import { useSelector } from 'react-redux';
import iphone from '../image/Apple-iPhone-12.png';
import { BiRupee } from 'react-icons/bi'
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Mobile = (props) => {
    const get_mobile_data = useSelector(state => state.DefaultReducer.item.slice(props.start, props.end));
    console.log(get_mobile_data);
    return (
        <>
            <div className="mobile container">
                <div className="row mt-4">
                    {

                        get_mobile_data.map((data, id) => {
                            return (

                                <div className="col-lg-3 col-md-6 col-sm-6 mt-3 " key={id}>
                                    <div className="card text-center">
                                        <div className="card-img">
                                            <Link to={`/ProductDetails/${data.id}`}><img src={data.mobile_img_1} alt="mobile"></img></Link>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{data.mobile_name}</h5>
                                            <p className="card-text"><BiRupee />{data.price}</p>
                                        </div>
                                    </div>
                                </div>

                            )

                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Mobile;
