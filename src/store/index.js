import { createStore } from 'vuex';
import SolarBatteryIcon from '../components/icons/SolarBatteryIcon.vue';
import DatabaseIcon from '../components/icons/DatabaseIcon.vue';
import ChartIcon from '../components/icons/ChartIcon.vue';
import { shallowRef } from 'vue';

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
					options: [
						{
							icon: shallowRef(SolarBatteryIcon),
							title: 'Fully wireless hardware',
							text: 'We provide solar and cellular cameras that work anywhere, operate 24/7, and take under 10 minutes to install.',
						},
						{
							icon: shallowRef(DatabaseIcon),
							title: 'Real-time data',
							text: 'Measure availability and compliance in real-time with our powerful and accurate computer vision pipeline.',
						},
						{
							icon: shallowRef(ChartIcon),
							title: 'Full service subscription',
							text: 'Full service subscription. One subscription for the cameras, installation, maintenance, implementation, software, and support.',
						},
					],
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
