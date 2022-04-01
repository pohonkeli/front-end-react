import axios from 'axios'

export default axios.create({
  baseURL: 'https://www.mockachino.com/aec739cd-842b-4d',
  headers: {
    'Content-type': 'application/json',
  },
})
