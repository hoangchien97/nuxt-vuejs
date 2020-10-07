// create fn() callAPI for config axios intansce when call API
export default ($axios, $store, $route) => {
  return {
    async callAPI(method, path, body, config = {}) {
      try {
        // $axios.setToken(token, 'Bearer')

        if (['blob', 'arraybuffer'].includes(config.responseType)) {
          return $axios[method](path, body, config)
        }

        const response = await $axios['$' + method](path, body, config)

        if (response.status === 'error') {
          const error = { response }
          throw error
        }

        if (response.data === undefined || response.data === null) {
          response.data = {}
          return response
        } else return response.data
      } catch (error) {
        // in case Unauthorized
        if (error.response && error.response.status === 401) {
          // localStorage.removeItem('isLogined')
          // await $store.dispatch('navbar/checkIsLogined', false)
          // $store.dispatch('navbar/changeStatusNavbar', true)
          console.log('Unauthorized')
        }
        throw error.response
      } finally {
      }
    },
    setToken(token) {
      document.cookie = `token=${token};Path=/;`
    },
  }
}
