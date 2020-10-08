import Vue from 'vue'

import SvgIcon from '@/components/common/SvgIcon'
import * as constants from '@/plugins/constants'
import lodash from 'lodash'

// import SvgIcon for using global. ( Remember setup has SvgSprive and library svg-inline-loader)
Vue.component('svg-icon', SvgIcon)

// create properties constants for using variables in file constants.js
Vue.prototype.$constants = constants
Vue.prototype._ = lodash
