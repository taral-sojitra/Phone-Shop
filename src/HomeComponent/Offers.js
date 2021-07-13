import React from 'react'
// import Redminote10s from '../image/redmi-note-10s.png';
// import miband5 from '../image/mi-bands-5.png';
// import boatbasic from '../image/BoatBasic.png';
import '../Components/style/offer.css';

export const Offers = (props) => {
    return (
        <div className="offer">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <img src={`/images/${props.mobile_img}`} alt="redminote7" />
                </div>
                <div className="col-lg-6 col-md-6">
                    <h3>{props.offer_name}</h3>
                    <h1>{props.mobile_name}</h1>
                    <p>{`${props.offer_dis}`}</p>
                    <button className="btn btn-offer">Know More</button>
                </div>
            </div>
        </div>
    )
}

// export const Offers2 = () => {
//     return (
//         <div className="offer offer2">
//             <div className="row">
//                 <div className="col-lg-6 col-md-6">
//                     <h3>Exclusive Offer On Card Payment </h3>
//                     <h1>Mi Band 5</h1>
//                     <p><FaWater />&nbsp; 50 m water resistance* |  <FaHeartbeat />&nbsp; 24-hour Heart rate & Sleep monitoring | <GiBattery100 /> &nbsp; 2-weeks long battery life</p>
//                     <button className="btn btn-offer2">Know More</button>
//                 </div>
//                 <div className="col-lg-6 col-md-6">
//                     <img src={miband5} />
//                 </div>

//             </div>
//         </div>
//     )
// }

// export const Offers3 = () => {
//     return (
//         <div className="offer offer3">
//             <div className="row">
//                 <div className="col-lg-6 col-md-6">
//                     <h3>New Audio Friend </h3>
//                     <h1>Mi Band 5</h1>
//                     <p><FaWater />&nbsp; 50 m water resistance* |  <FaHeartbeat />&nbsp; 24-hour Heart rate & Sleep monitoring | <GiBattery100 /> &nbsp; 2-weeks long battery life</p>
//                     <button className="btn btn-offer3">Know More</button>
//                 </div>
//                 <div className="col-lg-6 col-md-6">
//                     <img src={boatbasic} />
//                 </div>

//             </div>
//         </div>
//     )
// }
