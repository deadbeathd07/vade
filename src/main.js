import './assets/index.css';
import '@mdi/font/css/materialdesignicons.css';

import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './vuetify';

const app = createApp(App);

app.use(vuetify);

app.mount('#app');
