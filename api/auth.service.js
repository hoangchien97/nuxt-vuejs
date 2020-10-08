import { PREFIX_API } from '@/plugins/constants'

export default (apiService) => {
  return {
    async login(params) {
      const result = await apiService.callAPI(
        'post',
        `${PREFIX_API.CORE}/auth/login-social`,
        params
      )
      return result
    },
  }
}
