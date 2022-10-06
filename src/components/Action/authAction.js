import axios from 'axios';
let reqUrl = 'https://auth-check.herokuapp.com'
// 'https://auth-check.herokuapp.com'

export const createUser = data => dispatch => {
    axios.post(`${reqUrl}/createUser`, data)
        .then(response => {
            dispatch({ type: 'CREATE_USER', payload: response.data })
        })
        .catch(err => console.log(err))
}

export const login = data => dispatch => {
    axios.post(`${reqUrl}/login`, data)
        .then(response => {
            dispatch({ type: 'LOGIN', payload: response.data.data })
        })
        .catch(err => {
            console.log(err)
            alert('Wrong Credentials')
        })
}
