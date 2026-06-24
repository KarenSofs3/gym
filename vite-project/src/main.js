import { createApp } from 'vue'

import { Quasar } from 'quasar'
import  router  from './router'
import App from './App.vue'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

createApp(App)
    .mount('#app')
    .use(Quasar, {
        plugins: {}, // import Quasar plugins and add here
    })
    .use(router)
