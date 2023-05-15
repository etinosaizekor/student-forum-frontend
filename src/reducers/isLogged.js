
const initialState = {
    isLoggedIn: false,
  };
  

const loggedReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGGED_IN':
            return {
                ...state,
                isLoggedIn: true,
              };
        case 'LOGGED_OUT':
            return initialState;    
        default: 
            return state;
    }
}

export default loggedReducer;