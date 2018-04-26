// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
import Countdown from 'vuejs-countdown'

import './assets/frontEnd/js/bootstrap/css/bootstrap.css'
import './assets/frontEnd/css/font-awesome.css'
import './assets/frontEnd/css/style.css'
import './assets/frontEnd/css/audio-player.css'
import './assets/frontEnd/js/owl-carousel/assets/owl.carousel.min.css'
import './assets/frontEnd/js/owl-carousel/assets/owl.theme.default.min.css'
import './assets/frontEnd/js/slitslider/css/style.css'
import './assets/frontEnd/js/slitslider/css/custom.css'
import './assets/frontEnd/js/magnific-popup/magnific-popup.css'
import  './assets/frontEnd/js/jquery-1.9.1.min.js'

import './assets/frontEnd/js/bootstrap/js/bootstrap.js'

import './assets/frontEnd/js/magnific-popup/magnific-popup.js'
import './assets/frontEnd/js/audioplayer.js'
import './assets/frontEnd/js/owl-carousel/owl.carousel.js'
//import './assets/frontEnd/js/slitslider/js/modernizr.js'
import './assets/frontEnd/js/slitslider/js/jquery.ba-cond.min.js'
import './assets/frontEnd/js/slitslider/js/jquery.slitslider.js'
import './assets/frontEnd/js/script.js'
import './assets/frontEnd/js/script2.js'
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);
//import './assets/frontEnd/js/camera.js'

import * as VueGoogleMaps from 'vue2-google-maps';
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBOP0UCtz6Yvhj88I1YuqUfJOw3aErL65E',
       libraries: 'places'
    }
  });
Vue.config.productionTip = false
sync(store ,router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


