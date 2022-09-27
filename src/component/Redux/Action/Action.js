import {
    ADD_TO_CART, ADD_TO_WISH, DECREASE_QUANTITY,
    DELETE_ALL_CART, DELETE_ITEM_CART, DELETE_ITEM_WISH,
    GET_NUMBER_CART, INCREASE_QUANTITY, POST_LIST_SUCCESS,
    PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_ALL_CATEGORY_SUCCESS,
    PRODUCT_LIST_SUCCESS, MENU_LIST_SUCCESS, ABOUT_LIST_SUCCESS,
    CHECKOUT_ITEM
} from './ActionType';


export function fetchDataSuccess(data) {
    return {
        type: PRODUCT_LIST_SUCCESS,
        data
    };
}

export function fetchDataDetailSuccess(data) {
    return {
        type: PRODUCT_DETAIL_SUCCESS,
        data
    };
}

export function fetchDataCategorySuccess(data) {
    return {
        type: PRODUCT_LIST_ALL_CATEGORY_SUCCESS,
        data
    };
}

export function fetchDataMenuSuccess(data) {
    return {
        type: MENU_LIST_SUCCESS,
        data
    };
}

export function fetchDataPostSuccess(data) {
    return {
        type: POST_LIST_SUCCESS,
        data
    };
}
export function fetchDataAboutSuccess(data) {
    return {
        type: ABOUT_LIST_SUCCESS,
        data
    };
}

export function GetNumberCart() {
    return {
        type: GET_NUMBER_CART
    }
}
export function addtoCartSuccess(data) {
    // console.log(data);
    return {
        type: ADD_TO_CART,
        data
    };
}
export function increaseQuantity(payload) {
    return {
        type: INCREASE_QUANTITY,
        payload
    }
}
export function decreaseQuantity(data) {
    return {
        type: DECREASE_QUANTITY,
        data
    }
}
export function deleteItemCart(data) {
    return {
        type: DELETE_ITEM_CART,
        data
    }
}
export function deleteAllCart(data) {
    return {
        type: DELETE_ALL_CART,
        data
    }
}
export function addToWish(data) {
    return {
        type: ADD_TO_WISH,
        data
    }
}
export function deleteItemWish(data) {
    return {
        type: DELETE_ITEM_WISH,
        data
    }
}

export function checkoutItem(data) {
    return {
        type: CHECKOUT_ITEM,
        data
    }
}