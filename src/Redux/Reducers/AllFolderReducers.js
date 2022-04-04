import { mobiledata } from "./InitialState";
import { setAction } from "../Actions/ProductAction";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export const initialState = {
    item: mobiledata,
    oneProduct: [],
    Carditem: [],
    totalItem: 0,
    totalAmount: 0,
    TexAmount: 0,
    WishList: [],
    Compare: []

}
    

export const defaultReducer = (state = initialState, action) => {
    switch (action.type) {
        case setAction.SET_MOBILE_DATA:
            return [...state, action.payload];
        case setAction.SET_ONE_PRODUCT:
            return { ...state, oneProduct: [action.payload] };
        case setAction.SET_CARD_ITEMS:
            return { ...state, Carditem: [action.payload, ...state.Carditem] };
        case setAction.REMOVE_CARD_ITEM:
            console.log(action.payload);
            const filter_item = state.Carditem.filter((cure_id) => {
                return cure_id.id !== action.payload
            })
            console.log(filter_item);
            return { ...state, Carditem: filter_item };
        case setAction.INCREMENT:
            const incre = state.Carditem.map(item => {
                if (item.id === action.payload) {
                    item.quantity += 1;

                }
                return item;
            })
            return { ...state, Carditem: incre };
        case setAction.DECREMENT:
            const decre = state.Carditem.map(item => {
                if (item.id === action.payload) {
                    if (item.quantity == 1) {
                        item.quantity -= 1;
                        toast.warning("invalid Quantity");
                        item.quantity = 0;
                    }
                    else {
                        item.quantity -= 1;
                    }
                }
                return item;

            })
            return { ...state, Carditem: decre }
        case setAction.GET_TOTAL_ITEM:
            let { totalItem, totalAmount, TexAmount } = state.Carditem.reduce((accum, curval) => {
                let { quantity, price } = curval;
                console.log(price);
                let calc_totalamount = quantity * price;
                console.log(calc_totalamount);
                accum.totalAmount += calc_totalamount;
                accum.totalItem += quantity;
                let calc_texAmount = (calc_totalamount * 18) / 100;
                console.log(calc_texAmount);
                accum.TexAmount += calc_texAmount;
                return accum;
            }, { totalItem: 0, totalAmount: 0, TexAmount: 0, });

            return { ...state, totalItem, totalAmount, TexAmount };
        case setAction.ADD_TO_WISHLIST:
            return { ...state, WishList: [action.payload, ...state.WishList] }
        case setAction.COMPARE_PRODUCT:
            return { ...state, Compare: [action.payload, ...state.Compare] }
        case setAction.REMOVE_COMPARE_ITEM:
            const filter_compare_item = state.Compare.filter((cure_id) => {
                return cure_id.id !== action.payload
            })
            return { ...state, Compare: filter_compare_item }
        default:
            return state;
    }
}
// export const mobileReducer = (state = initialState.item, { type, payload }) => {
//     switch (type) {
//         case setAction.SET_MOBILE_DATA:
//             return [...state, payload];
//         default:
//             return state;
//     }

// }

// export const oneProductReducer = (state = initialState.oneProduct, { type, payload }) => {
//     switch (type) {
//         case setAction.SET_ONE_PRODUCT:
//             return [payload];

//         default:
//             return state;
//     }
// }

// export const SetCardItem = (state = initialState, action) => {
//     switch (action.type) {
//         case setAction.SET_CARD_ITEMS:
//             return { ...state, Carditem: [action.payload, ...state.Carditem] };
//         case setAction.REMOVE_CARD_ITEM:
//             console.log(action.payload);
//             const filter_item = state.Carditem.filter((cure_id) => {
//                 return cure_id.id !== action.payload
//             })
//             return filter_item;
//         case setAction.INCREMENT:
//             return state.map(item => {
//                 if (item.id === action.payload) {
//                     item.quantity += 1;

//                 }
//                 return item;
//             })
//         case setAction.DECREMENT:
//             return state.map(item => {
//                 if (item.id === action.payload) {
//                     if (item.quantity == 1) {
//                         item.quantity -= 1;
//                         toast.warning("invalid Quantity");
//                     }
//                     else {
//                         item.quantity -= 1;
//                     }


//                 }
//                 return item;

//             })
//         case setAction.GET_TOTAL_ITEM:
//             let { totalItem } = state.cardItem.reduce((accum, curval) => {
//                 console.log(accum);
//                 console.log(curval);
//                 let { quantity } = curval;
//                 accum.totalItem += quantity;
//                 console.log(accum);
//                 return accum;
//             }, { totalItem: 0 });
//             return state;
//         default:
//             return state;

//     }
// }

// export const cardCalculation = (state = initialState, action) => {
//     switch (action.type) {
//         case setAction.GET_TOTAL_ITEM:

//             console.log(state.Carditem);
//             // let { totalItem } = state.CardItem.reduce((accum, curval) => {
//             //     console.log(accum);
//             //     console.log(curval);
//             //     let { quantity } = curval;
//             //     accum.totalItem += quantity;
//             //     console.log(accum);
//             //     return accum;
//             // }, { totalItem: 0 });
//             return state;

//         default:
//             return state;
//     }
// }