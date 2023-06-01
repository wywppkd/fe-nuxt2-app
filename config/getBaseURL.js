const env = process.env.NUXT_ENV_APP_ENV

const getBaseURL = () => {
  console.log('🚀 ~ file: getBaseURL.js:2 ~ env:', env)
  let baseUrl = ''
  switch (env) {
    case 'dev':
      baseUrl = 'https://dev.hello101.com'
      break
    case 'test':
      baseUrl = 'https://test.hello101.com'
      break
    case 'prod':
      baseUrl = 'https://prod.hello101.com'
      break
    default:
      baseUrl = 'https://test.hello101.com'
      break
  }
  return baseUrl
}

export default getBaseURL
