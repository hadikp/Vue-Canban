import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './plugins/router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCog, faIgloo, faPlus, faUserAstronaut, faDownload, faUpload, faPencil, faPrint, faThumbTack, faImage, 
  faSquarePlus, faUser, faTrashAlt, faTimes, faTag, faSortAmountUp, faSortAmountDown, faSitemap, faHomeLg, faTachometerAlt,
  faSave, faTh, faSmile, faUserPlus, faQuestionCircle,  faUserGroup, faInfo, faBell, faLineChart,
  faFontAwesomeFlag, faFilter, faRotate, faCaretDown, faHandshake, faEdit, faMagicWandSparkles} from '@fortawesome/free-solid-svg-icons'
import {faCalendarCheck} from '@fortawesome/free-regular-svg-icons'

library.add(faCog, faIgloo, faPlus, faUserAstronaut, faDownload, faUpload, faPencil, faPrint, faThumbTack, faImage,
  faSquarePlus, faUser, faTrashAlt, faTimes, faTag, faSortAmountUp, faSortAmountDown, faSitemap, faHomeLg, faTachometerAlt,
  faSave, faTh, faSmile, faUserPlus, faQuestionCircle, faCalendarCheck,  faUserGroup, faInfo, faBell,
  faLineChart, faFontAwesomeFlag, faFilter, faRotate, faCaretDown, faHandshake, faEdit, faMagicWandSparkles)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app')
