import { createApp } from 'vue'
import Panel from 'primevue/panel'
import Button from 'primevue/button';
import Chip from 'primevue/chip';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import ValidateNet from './components/ValidateNet.vue'
import App from './App.vue'

// import CSS resources
import 'primevue/resources/primevue.min.css'            // core 
//import '/node_modules/primeflex/themes/primeone-light.css'  // theme
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'                      // icons
import '/node_modules/primeflex/primeflex.css'          // PrimeFlex


const app = createApp(App)
app.component('view-panel', Panel)
app.component('button-click', Button)
app.component('chip-show', Chip)
app.component('card-view', Card)
app.component('divider-view', Divider)
app.component('validate-net', ValidateNet)
app.mount('#app')
