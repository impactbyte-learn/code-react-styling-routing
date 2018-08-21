import axios from 'axios'

const request = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000
  })
}

export { request }
