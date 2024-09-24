import { createApp } from 'vue'
// import router from './router'

import App from './pages/App.vue'

// //INSTALL FONT AWESOM
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

// // / import font awesome icon component /
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// // / add icons to the library */
// library.add(fas, far, fab)

// const app = createApp(App)

// app.component('font-awesome-icon', FontAwesomeIcon)


import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'home', component: App },
		// { path: '/portfolio', name: 'portfolio', component: MainProjects },
		// { path: '/project/:id', name: 'project', component: AppSingolarProject }
	],
	
})







createApp(App).use(router).mount('#app')