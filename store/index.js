import { set, generateMutations } from '@/utils/vuex'

export const state = () => ({
  openHamburger: false,
})

export const mutations = {
  ...generateMutations(state()),
  SET_OPEN_HAMBURGER: set('openHamburger'),
}

export const actions = {
  openHamburger({ commit }, status) {
    commit('SET_OPEN_HAMBURGER', status)
  },
}
