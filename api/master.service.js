import { PREFIX_API, METHOD_API } from '@/plugins/constants'

export default (apiService) => {
  return {
    fetchContentCategories() {
      return apiService.callAPI(
        METHOD_API.GET,
        `${PREFIX_API.CORE}/data/content-categories`
      )
    },
    fetchCountries() {
      return apiService.callAPI(
        METHOD_API.GET,
        `${PREFIX_API.CORE}/data/countries`
      )
    },
    fetchLanguages() {
      return apiService.callAPI(
        METHOD_API.GET,
        `${PREFIX_API.CORE}/data/languages`
      )
    },
  }
}
