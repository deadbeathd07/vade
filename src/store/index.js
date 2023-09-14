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
				description: {
					title: 'Get to know the curb better',
					text: 'Vade replaces legacy parking infrastructure with wireless cameras, computer vision, and granular analytics. We make it easy for cities to monitor and manage curb space in real-time.',
					btn_text: 'More about our technology',
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
