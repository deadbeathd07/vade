import { createStore } from 'vuex';

const store = createStore({
	state() {
		return {
			palette: {
				'primary-nav-text': '#393737',
			},
		};
	},
	getters: {},
	actions: {},
	mutations: {},
});

export default store;
