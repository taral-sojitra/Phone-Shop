import React from 'react'
import '../Components/style/Comparison.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RemoveCompareItem } from '../Redux/Actions/ProductAction';
import { FaTimesCircle } from 'react-icons/fa';
const Comparison = () => {

    const dispatch = useDispatch()
    const fetch_wishlist_data = useSelector(state => state.DefaultReducer.Compare);

    const RemoveItem = (id) => {
        dispatch(RemoveCompareItem(id));
    }

    return (
        <>

            <div className="tabel">
                <h1>Product Comparison</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Features</th>
                            {fetch_wishlist_data &&

                                fetch_wishlist_data.map((data, id) => {

                                    return (

                                        <th>{data.mobile_name}</th>
                                    )
                                })
                            }

                        </tr>
                    </thead>
                    <tbody>


                        <tr>
                            <th>Image</th>
                            {fetch_wishlist_data &&

                                fetch_wishlist_data.map((data, id) => {

                                    return (

                                        <th>
                                            <button className="btn" onClick={() => RemoveItem(data.id)}><FaTimesCircle /></button><br />
                                            <img src={data.mobile_img_1} alt={data.alt}></img>

                                        </th>
                                    )
                                })
                            }

                        </tr>
                        <tr>
                            <th>Price</th>
                            {fetch_wishlist_data &&

                                fetch_wishlist_data.map((data, id) => {

                                    return (

                                        <th>{data.price} /-</th>
                                    )
                                })
                            }

                        </tr>
                        <tr>
                            <th>Processer</th>
                            {fetch_wishlist_data &&

                                fetch_wishlist_data.map((data, id) => {

                                    return (

                                        <th>{data.processer}</th>
                                    )
                                })
                            }

                        </tr>
                        <tr>
                            <th>Ram</th>
                            {fetch_wishlist_data &&

                                fetch_wishlist_data.map((data, id) => {

                                    return (

                                        <th>{data.ram}</th>
                                    )
                                })
                            }

                        </tr>
                        <tr>
                            <th>Rom</th>
                            {fetch_wishlist_data &&

                                fetch_wishlist_data.map((data, id) => {

                                    return (

                                        <th>{data.rom}</th>
                                    )
                                })
                            }

                        </tr>
                        <tr>
                            <th>DisPlay</th>
                            {fetch_wishlist_data &&

                                fetch_wishlist_data.map((data, id) => {

                                    return (

                                        <th>{data.display}</th>
                                    )
                                })
                            }

                        </tr>
                        <tr>
                            <th>Battery</th>
                            {fetch_wishlist_data &&

                                fetch_wishlist_data.map((data, id) => {

                                    return (

                                        <th>{data.battery}</th>
                                    )
                                })
                            }

                        </tr>
                        <tr>
                            <th>Camaras</th>
                            {fetch_wishlist_data &&

                                fetch_wishlist_data.map((data, id) => {

                                    return (

                                        <th>{data.camara}</th>
                                    )
                                })
                            }

                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Comparison
