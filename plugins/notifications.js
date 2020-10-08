import Vue from 'vue'
import VueToasted from 'vue-toasted'

Vue.use(VueToasted, {
  duration: 5000,
  keepOnHover: true,
  className: 'custom-toasted',
  containerClass: 'custom-toasted-container',
})

Vue.mixin({
  methods: {
    notifyError: (message, actions = {}) => {
      Vue.toasted.show(message, {
        ...actions,
        type: 'error',
      })
    },
    notifySuccess: (message, actions = {}) => {
      Vue.toasted.show(message, {
        ...actions,
        type: 'success',
      })
    },
    infoMsg: (message, actions = {}) => {
      Vue.toasted.show(message, {
        ...actions,
        type: 'info',
      })
    },
  },
})
