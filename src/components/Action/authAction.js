import axios from 'axios';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let reqUrl = 'https://auth-check.herokuapp.com'
// 'https://auth-check.herokuapp.com'
// 'http://localhost:3500'

export const createUser = data => dispatch => {
    axios.post(`${reqUrl}/createUser`, data)
        .then(response => {
            dispatch({ type: 'CREATE_USER', payload: response.data })
        })
        .catch(err => console.log(err))
}

export const login = data => dispatch => {
    axios.post(`${reqUrl}/login`, data, {
        withCredentials: true
    })
        .then(response => {
            dispatch({ type: 'LOGIN', payload: response.data.data })
        })
        .catch(err => {
            console.log(err)
            alert('Wrong Credentials')
        })
}

export const submission = (data) => dispatch => {
    const fd = new FormData()
    fd.append('image', data.image)
    axios.post(`${reqUrl}/submission`, data, {
        headers: {
            'accessToken': localStorage['access-token'],
            'userId': localStorage.userId
        }
    })
        .then(response => {
            toast(`${response.data.info.message}`)
            dispatch({ type: 'SUBMISSION', payload: true })
        })
        .catch(err => {
            console.log(err)
            history.push('/signIn')
        })
}

export const getSubmissions = () => dispatch => {
    axios.get(`${reqUrl}/getSubmission`, {
        headers: {
            'accessToken': localStorage['access-token'],
            'userId': localStorage.userId
        }
    })
        .then(response => {
            console.log(response)

            dispatch({ type: 'SUBMISSION_DETAILS', payload: response.data.data })
        })
        .catch(err => {
            console.log(err)
            toast('Failed to Fetch Submission')
        })
}
