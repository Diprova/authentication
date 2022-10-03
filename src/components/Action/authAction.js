import axios from 'axios';
let reqUrl = 'http://localhost:3500'

export const createUser = data => dispatch => {
    axios.post(`${reqUrl}/createUser`, data)
        .then(response => {
            dispatch({ type: 'CREATE_USER', payload: response.data })
        })
        .catch(err => console.log(err))
}

export const getUser = data => dispatch => {
    axios.post(`${reqUrl}/getUser`, data)
        .then(response => {
            dispatch({ type: 'GET_USER', payload: response.data })
        })
        .catch(err => {
            console.log(err)
            alert('Wrong Credentials')
        })
}