import { createApp } from 'vue'
// import router from './router'

import App from './pages/App.vue'
import MainProjects from './pages/MainProjects.vue'
import MainPage from './components/MainPage.vue'



import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'home', component: MainPage },
		{ path: '/portfolio', name: 'portfolio', component: MainProjects },
		// { path: '/project/:id', name: 'project', component: AppSingolarProject }
	],
	
})







createApp(App).use(router).mount('#app')