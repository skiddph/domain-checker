import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/global.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, faX, faCircle, faTriangleExclamation, faSpinner, faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faMagnifyingGlass)
library.add(faX)
library.add(faCircle)
library.add(faTriangleExclamation)
library.add(faSpinner)
library.add(faFilter)

window.darkMode = function () {
  document.body.querySelector('#app').className = 'dark'
  localStorage.setItem('darkMode', true)
}

window.lightMode = function () {
  document.body.querySelector('#app').className = ''
  localStorage.setItem('darkMode', false)
}

window.getAppMode = function () {
  const dark = (
    localStorage.getItem('darkMode') !== null ?
    localStorage.getItem('darkMode') == 'true' : 
    null
  ) || false;
  console.log('dark', dark)
  if (dark == true) darkMode();
  else lightMode();
}

getAppMode()
const app = createApp(App)
app.component('icon', FontAwesomeIcon)
app.mount('#app')
