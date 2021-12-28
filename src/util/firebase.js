import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCG9r--1ptpGF6oCC2DIqDcXjYulGQyjSI',
	authDomain: 'giftasy-65eb4.firebaseapp.com',
	projectId: 'giftasy-65eb4',
	storageBucket: 'giftasy-65eb4.appspot.com',
	messagingSenderId: '938900148745',
	appId: '1:938900148745:web:b3d21e4f28d5e267c0ded8',
	measurementId: 'G-T8882W17JT'
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
