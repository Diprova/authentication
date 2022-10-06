const initialState = { user: [] }

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                ...state, user: action.payload
            }
        case 'LOGIN':
            localStorage.setItem('access-token', action.payload.token)
            localStorage.setItem('userId', action.payload.userId)
            return {
                ...state, userAccess: action.payload
            }
        case 'SUBMISSION':
            return {
                ...state, submission: action.payload
            }
        case 'SUBMISSION_DETAILS': {
            return {
                ...state, submissionData: action.payload
            }
        }
        default:
            return state
    }
}

export default authReducer