import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/global.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCamera, faCameraRotate, faLightbulb, faSpinner, faFileImport, faFileExport,faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCamera)
library.add(faCameraRotate)
library.add(faLightbulb)
library.add(faSpinner)
library.add(faFileImport)
library.add(faFileExport)
library.add(faTrash)

const app = createApp(App)
app.component('icon', FontAwesomeIcon)
app.mount('#app')
