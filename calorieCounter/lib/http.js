import axios from 'axios'

export default axios.create({
    baseURL: 'http://10.0.0.2:1337',
    responseType: 'json',
})
