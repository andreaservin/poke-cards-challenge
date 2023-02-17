import axios from 'axios'

const AxiosWrapper = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
})

AxiosWrapper.defaults.headers.post['Content-Type'] = 'application/json'

export default AxiosWrapper
