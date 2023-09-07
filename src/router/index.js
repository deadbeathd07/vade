import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TechnologyView from '../views/TechnologyView.vue';
import AboutUsView from '../views/AboutUsView.vue';
import ImpactView from '../views/ImpactView.vue';
import PortfolioView from '../views/PortfolioView.vue';
import BlogView from '../views/BlogView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/technology',
			name: 'technology',
			component: TechnologyView,
		},
		{
			path: '/about_us',
			name: 'about_us',
			component: AboutUsView,
		},
		{
			path: '/impact',
			name: 'impact',
			component: ImpactView,
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: PortfolioView,
		},
		{
			path: '/blog',
			name: 'blog',
			component: BlogView,
		},
	],
});

export default router;
