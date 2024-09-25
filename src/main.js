import { createApp } from 'vue'
// import router from './router'

import App from './pages/App.vue'
import MainPage from './components/MainPage.vue'
import MainProjects from './pages/MainProjects.vue'
import ShowProjects from './pages/ShowProjects.vue'



import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', name: 'home', component: MainPage },
		{ path: '/projects', name: 'projects', component: MainProjects },
		{ path: '/project/:id', name: 'project', component: ShowProjects }
	],
	
})







createApp(App).use(router).mount('#app')