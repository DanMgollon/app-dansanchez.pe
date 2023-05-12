import axios from 'axios'

const ferreteriaApi = axios.create({
  baseURL: '/api'
})

export default ferreteriaApi
