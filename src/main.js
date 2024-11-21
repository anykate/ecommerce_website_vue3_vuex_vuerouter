import { createApp } from 'vue'
import store from '@/store'
import router from '@/router'
import '@/assets/css/style.css'
import App from '@/App.vue'
import Vue3Marquee from 'vue3-marquee'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

createApp(App)
	.use(router)
	.use(store)
	.use(Vue3Marquee)
	.use(Vue3Toastify, {
		autoClose: 3000,
	})
	.mount('#app')
