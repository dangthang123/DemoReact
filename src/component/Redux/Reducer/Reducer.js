import {
    ADD_TO_CART, ADD_TO_WISH, DECREASE_QUANTITY,
    DELETE_ALL_CART, DELETE_ITEM_CART, DELETE_ITEM_WISH,
    GET_NUMBER_CART, INCREASE_QUANTITY, POST_LIST_SUCCESS,
    PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_ALL_CATEGORY_SUCCESS, PRODUCT_LIST_SUCCESS,
    MENU_LIST_SUCCESS, ABOUT_LIST_SUCCESS, CHECKOUT_ITEM
} from '../Action/ActionType';

const initProduct = {
    numberCart: 0,
    carts: [],
    numberWish: 0,
    wishs: [],
    products: [],
    product: [],
    productcategory: [],
    post: [],
    menus: [],
    abouts: [],
    numberCheckout: 0,
    checkouts: []
}
// console.log(initProduct);

export const cartReducer = (state = initProduct, action) => {
    switch (action.type) {
        case GET_NUMBER_CART:
            return {
                ...state
            }
        case PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.data

            };
        case PRODUCT_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.data

            };
        case PRODUCT_LIST_ALL_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                productcategory: action.data

            };
        case POST_LIST_SUCCESS:
            return {
                ...state,
                loadingPost: false,
                post: action.data

            };
        case MENU_LIST_SUCCESS:
            return {
                ...state,
                loadingMenu: false,
                menus: action.data

            };
        case ABOUT_LIST_SUCCESS:
            return {
                ...state,
                loadingAbout: false,
                abouts: action.data

            };
        case ADD_TO_CART:
            if (state.numberCart == 0) {
                let cart = {
                    id: action.data.id,
                    quantity: 1,
                    name: action.data.name,
                    onsale: action.data.onSale,
                    saleprice: action.data.salePrice,
                    regularprice: action.data.regularPrice,
                    image: action.data.image.sourceUrl,
                    imagewish: action.data.image,
                }
                state.carts.push(cart);
            }
            else {
                let check = false;
                state.carts.map((item, key) => {
                    if (item.id == action.data.id) {
                        state.carts[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        id: action.data.id,
                        quantity: 1,
                        name: action.data.name,
                        onsale: action.data.onSale,
                        saleprice: action.data.salePrice,
                        regularprice: action.data.regularPrice,
                        image: action.data.image.sourceUrl,
                        imagewish: action.data.image,

                    }
                    state.carts.push(_cart);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1
            };

        case INCREASE_QUANTITY:
            state.numberCart++
            state.carts[action.payload].quantity++;
            return {
                ...state
            }
        case DECREASE_QUANTITY:
            let quantity = state.carts[action.data].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.carts[action.data].quantity--;
            }

            return {
                ...state
            }
        case DELETE_ITEM_CART:
            let quantity_ = state.carts[action.data].quantity;
            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                carts: state.carts.filter(item => {
                    return item.id != state.carts[action.data].id
                })

            }
        case DELETE_ALL_CART:
            return { ...initProduct };

        case ADD_TO_WISH:
            if (state.numberWish == 0) {
                let wish = {
                    id: action.data.id,
                    quantity: 1,
                    name: action.data.name,
                    onsale: action.data.onSale,
                    saleSrice: action.data.salePrice,
                    regularPrice: action.data.regularPrice,
                    image: action.data.image.sourceUrl,

                }
                state.wishs.push(wish);
            }
            else {
                let check = false;
                state.wishs.map((item, key) => {
                    if (item.id == action.data.id) {
                        state.wishs[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _wish = {
                        id: action.data.id,
                        quantity: 1,
                        name: action.data.name,
                        onsale: action.data.onSale,
                        saleSrice: action.data.salePrice,
                        regularPrice: action.data.regularPrice,
                        image: action.data.image.sourceUrl,

                    }
                    state.wishs.push(_wish);
                }
            }
            return {
                ...state,
                numberWish: state.numberWish + 1
            };
        case DELETE_ITEM_WISH:
            let quantitywish_ = state.wishs[action.data].quantity;
            return {
                ...state,
                numberWish: state.numberWish - quantitywish_,
                wishs: state.wishs.filter(item => {
                    return item.id != state.wishs[action.data].id
                })

            }
        case CHECKOUT_ITEM:
            if (state.numberCheckout == 0) {
                let checkout = {
                    id: action.data.id,
                    quantity: 1,
                    name: action.data.name,
                    onsale: action.data.onSale,
                    saleprice: action.data.saleprice,
                    regularprice: action.data.saleprice,
                    image: action.data.image.sourceUrl,
                    imagewish: action.data.image,
                }
                state.checkouts.push(checkout);
            }
            else {
                let check = false;
                state.checkouts.map((item, key) => {
                    if (item.id == action.data.id) {
                        state.checkouts[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _checkout = {
                        id: action.data.id,
                        quantity: 1,
                        name: action.data.name,
                        onsale: action.data.onSale,
                        saleprice: action.data.saleprice,
                        regularprice: action.data.saleprice,
                        image: action.data.image.sourceUrl,
                        imagewish: action.data.image,

                    }
                    state.checkouts.push(_checkout);
                }
            }
            return {
                ...state,
                numberWish: state.numberWish + 1
            };
        default:
            return { ...state };
    }
}
