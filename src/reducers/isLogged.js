
const initialState = {
    isLoggedIn: false,
    nameOfUser: '',
  };
  

const loggedReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGGED_IN':
            return {
                ...state,
                isLoggedIn: true,
                nameOfUser: action.payload,
              };
        case 'LOGGED_OUT':
            return initialState;    
        default: 
            return state;
    }
}

export default loggedReducer;