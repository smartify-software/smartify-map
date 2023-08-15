import {createApp} from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import App from './App.vue'

const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBkA4jYjWyzhbedSSeCEnG0iDwb6o5QMtI',
    },
}).mount('#app')


