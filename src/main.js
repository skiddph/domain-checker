import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/global.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, faX, faCircle, faTriangleExclamation, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faMagnifyingGlass)
library.add(faX)
library.add(faCircle)
library.add(faTriangleExclamation)
library.add(faSpinner)

const app = createApp(App)
app.component('icon', FontAwesomeIcon)
app.mount('#app')
