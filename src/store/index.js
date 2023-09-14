import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			sections: {
				intro: {
					title: 'Connecting the curb to new insights',
					text: 'Real-time curb data for smart cities. Measure occupancy, analyze demand, and manage curb space with the right tools.',
					btn_text: 'Book a demo',
				},
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
