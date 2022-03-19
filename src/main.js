import Vue from 'vue';
import App from './App.vue';
import router from './router';

// import { firebaseConfig } from '@/firebase/firebaseInit';

Vue.config.productionTip = false;
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// //Make connection with firebase firestore
// export const db = firebase.firestore();

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app');
