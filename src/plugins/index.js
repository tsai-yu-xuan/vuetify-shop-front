/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'
import VuetifyUseDialog from 'vuetify-use-dialog'
import VueFileAgentNext from '@boindil/vue-file-agent-next'
import '@boindil/vue-file-agent-next/dist/vue-file-agent-next.css'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(VuetifyUseDialog, {
      snackbar: {
        showCloseButton: false,
        snackbarProps: {
          timeout: 2000
        }
      }
    })
    .use(VueFileAgentNext)
    .use(router)
    .use(pinia)
}
