import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: ' https://app-reg-users.herokuapp.com/',

 
})

api.interceptors.request.use(
  config => {
       const token = localStorage.getItem('Token')

    if (token) return { ...config, headers: { 'token': token } }
    return config
  },
  error => Promise.reject(error)
)

api.interceptors.response.use(
  config => config,
  error => {
    if (error.response === undefined) {
      const networkError = { error: JSON.parse(JSON.stringify(error)).message }
      return Promise.reject(networkError)
    }

    const { status, data } = error.response
    if (status === 400) return Promise.reject(data)
    if (status === 401) {
      clearItems()
      window.location = '/'
      return window.location.reload()
    }
    return Promise.reject(error)
  }
)


export default api