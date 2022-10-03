const initialState = { user: [] }

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                ...state, user: action.payload
            }
        case 'GET_USER':
            console.log(action.payload)
            return {
                ...state, userAccess: action.payload
            }
        default:
            return state
    }
}

export default authReducer