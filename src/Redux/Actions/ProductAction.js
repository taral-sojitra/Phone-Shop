export const setAction = {
    SET_MOBILE_DATA: "SET_MOBILE_DATA",
    SET_ONE_PRODUCT: "SET_ONE_PRODUCT",
    SET_CARD_ITEMS: "SET_CARD_ITEMS",
    REMOVE_CARD_ITEM: "REMOVE_CARD_ITEM",
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    GET_TOTAL_ITEM: "GET_TOTAL_ITEM",
    ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
    COMPARE_PRODUCT: "COMPARE_PRODUCR",
    REMOVE_COMPARE_ITEM: "REMOVE_COMPARE_ITEM"
}
export const setMobileData = (product) => {
    return {
        type: setAction.SET_MOBILE_DATA,
        payload: product
    }
}

export const setOneProduct = (one_product) => {
    return {
        type: setAction.SET_ONE_PRODUCT,
        payload: one_product
    }
}

export const setCardItem = (card_item) => {
    return {
        type: setAction.SET_CARD_ITEMS,
        payload: card_item
    }

}

export const removeCardItem = (item_id) => {
    console.log(item_id);
    return {
        type: setAction.REMOVE_CARD_ITEM,
        payload: item_id
    }
}

export const increment = (Inc_id) => {
    // console.log(Inc_id);
    return {
        type: setAction.INCREMENT,
        payload: Inc_id
    }
}

export const decrement = (dec_id) => {
    console.log(dec_id);
    return {
        type: setAction.DECREMENT,
        payload: dec_id
    }
}

export const gettotalitem = () => {
    return {
        type: setAction.GET_TOTAL_ITEM,
    }
}

export const setWishListItem = (wishlist_item) => {
    return {
        type: setAction.ADD_TO_WISHLIST,
        payload: wishlist_item
    }
}

export const compareProduct = (compater_product) => {
    return {
        type: setAction.COMPARE_PRODUCT,
        payload: compater_product
    }
}

export const RemoveCompareItem = (Compare_item_id) => {
    return {
        type: setAction.REMOVE_COMPARE_ITEM,
        payload: Compare_item_id

    }
}