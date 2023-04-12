export const loggedIn = (userDetails) => {
    return{
        type: 'LOGGED_IN',
        payload: userDetails
    }
}

export const loggedOut = () => {
    return{
        type: 'LOGGED_OUT'
    }
}