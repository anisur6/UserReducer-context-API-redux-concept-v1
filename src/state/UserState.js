export const inititialState = {
    loading : false,
    users : [],
    error : false,
    cart : [],
};

const UserState = (state, action) => {
    switch(action.type){
        case "F_START" :
        return{
            ...state,
            loading : true,
            error : false,
        };
        case "F_SUCCESS" :
        return{
            ...state,
            loading : false,
            users: action.payload,
            error : false,
        };
        case "F_ERROR" :
        return{
            ...state,
            loading : false,
            error : true,
        };
        case "CART" :
        return{
            ...state,
            cart : [...state.cart, action.payload]
        };
        default :
        return state;
    }
};

export default UserState;