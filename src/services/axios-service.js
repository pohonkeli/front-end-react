import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:5004',
  headers: {
    'Content-type': 'application/json',
  },
})
