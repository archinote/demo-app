/**
 * App main script file
 */
//
// Fonts & Icons
//
// Material Design Icons
import 'material-design-icons/iconfont/material-icons.css'
// Material Design Fonts (@mdi/font)
import '@mdi/font/css/materialdesignicons.min.css'
// Roboto font face
import 'roboto-fontface/css/roboto/roboto-fontface.css'

//
import Vue from 'vue'
import App from 'dms-base/components/App/'

// Store
import store from 'dms-base/store/'
// Add application custom store module(s)
import demoStoreModule from '@/store/demo/'
store.registerModule('demo', demoStoreModule)

// Router
import router from '@/router/'

// Vuetify
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

//
// Import Dantser UI components:
// - App Header
// - ConfirmDialog & Toaster components
//
import DHeader from 'dms-base/components/Header/'
import DConfirmDialog from 'dms-base/components/ConfirmDialog'
import DToaster from 'dms-base/components/Toaster'
Vue.use(DHeader)
Vue.use(DConfirmDialog, { store })
Vue.use(DToaster, { store })

//
// Common Vue properties
//
// Event bus
Vue.prototype.$bus = new Vue()
// Store
Vue.prototype.$store = store
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
