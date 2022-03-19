import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export const firebaseConfig = {
	apiKey: 'AIzaSyCLPw1Nd1S0h9YQo1bLjsXSd3fxC-lpl5I',
	authDomain: 'weatherapp-88b03.firebaseapp.com',
	projectId: 'weatherapp-88b03',
	storageBucket: 'weatherapp-88b03.appspot.com',
	messagingSenderId: '710266272332',
	appId: '1:710266272332:web:31f3dea0ce5e1ee88a12e9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
