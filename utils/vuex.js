import _ from 'lodash'

export const set = (property) => (state, payload) => (state[property] = payload)

export const toggle = (property) => (state) =>
  (state[property] = !state[property])

export const generateMutations = (state) => {
  return _.reduce(
    state,
    (mutations, value, key) => {
      const name = 'SET_' + _.snakeCase(key).toUpperCase()

      mutations[name] = set(key, value)

      return mutations
    },
    {}
  )
}
