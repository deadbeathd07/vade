import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			palette: {
				'primary-nav-text': '#393737',
			},
			nav: {
				technology: '/technology',
				'about us': '/about-us',
				impact: '/impact',
				portfolio: '/portfolio',
				blog: '/blog',
			},
		};
	},
	getters: {},
	actions: {},
	mutations: {},
});

export default store;
