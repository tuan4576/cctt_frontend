// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const TOTAL_CART = 'TOTAL_CART';
export const CLEAR_CART = 'CLEAR_CART';

// Action Creators
export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    };
};

export const removeFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    };
};

export const calculateTotal = () => {
    return {
        type: TOTAL_CART
    };
};

export const clearCart = () => {
    return {
        type: CLEAR_CART
    };
};

const initialState = {
    cart: [],
    total: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cart[itemIndex].quantity += 1;
                return {
                    ...state,
                    cart: [...state.cart]
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, {...action.payload, quantity: 1}]
                };
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            };

        case TOTAL_CART:
            const total = state.cart.reduce((acc, item) => {
                return acc + (item.price * item.quantity);
            }, 0);
            return {
                ...state,
                total: total
            };

        case CLEAR_CART:
            return {
                ...state,
                cart: [],
                total: 0
            };

        default:
            return state;
    }
};

export default cartReducer;
