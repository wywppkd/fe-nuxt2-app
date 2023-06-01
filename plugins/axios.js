import getBaseURL from '~/config/getBaseURL'

export default function ({ $axios, redirect }) {
  $axios.defaults.timeout = 30000
  $axios.defaults.baseURL = getBaseURL()
  // 请求拦截器
  $axios.onRequest((config) => {
    console.log('🚀 ~ file: axios.js:5 ~ $axios.onRequest ~ config:', config)
    // config.headers.token = 'xxx'
  })

  // 相应拦截器
  $axios.onResponse((response) => {
    console.log(
      '🚀 ~ file: axios.js:11 ~ $axios.onResponse ~ response:',
      response
    )
  })
}
