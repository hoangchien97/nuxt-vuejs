import apiServiceFactory from '@/api/api.service'

export default (ctx, inject) => {
  const apiService = apiServiceFactory(ctx.$axios, ctx.store, ctx.route)

  const context = require.context('@/api', false, /\.service.js$/)

  context.keys().forEach((fileName) => {
    if (!fileName.endsWith('api.service.js')) {
      const serviceName = fileName.replace(/(^\.\/)|(\.service.js$)/gi, '')

      inject(`${serviceName}Service`, context(fileName).default(apiService))
    }
  })
}
