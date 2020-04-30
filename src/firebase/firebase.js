import * as firebase from 'firebase';
// import * as expensesAction from '../actions/expenses';

const firebaseConfig = {
	apiKey: 'AIzaSyCibPxU5w-8SMYw266Dew9t4DoDwhOCwW0',
	authDomain: 'expensify-7192c.firebaseapp.com',
	databaseURL: 'https://expensify-7192c.firebaseio.com',
	projectId: 'expensify-7192c',
	storageBucket: 'expensify-7192c.appspot.com',
	messagingSenderId: '840637799155',
	appId: '1:840637799155:web:3fe972f7dcc23c4410f586',
	measurementId: 'G-7MZPFLHME7',
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val(),
// 		});
// 	});

// 	console.log(expenses);
// });

// database.ref('expenses').push({
// 	description: 'Send money to home',
// 	note: 'need to send money to family',
// 	amount: 2000,
// 	createdAt: 532432423,
// });
// database
// 	.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val(),
// 			});
// 		});

// 		console.log(expenses);
// 	});

// Setup expanses with three items (description, note, amount, createdAt)
// console.log(expense1);
// database.ref('expenses').push({
// 	description: 'pay the bill to zain',
// 	note: 'This is test message',
// 	amount: 312,
// 	createdAt: 232432423,
// });
// database.ref('expenses').push({
// 	description: 'Stc bill',
// 	note: 'pay internet bill',
// 	amount: 350,
// 	createdAt: 5234423423,
// });
// database.ref('expenses').push({
// 	description: 'Send money to qasim',
// 	note: 'need to send money to qasim',
// 	amount: 250,
// 	createdAt: 532432423,
// });
// database.ref().set({
// 	name: 'Syed Raza',
// 	age: 36,
// 	email: 'syed.raza@i5sigma.com',
// 	location: {
// 		city: 'Riyadh',
// 		country: 'Saudi arabia',
// 	},
// });

// database.ref('age').set(38);
// database.ref('location/city').set('riyadh');
// database.ref('attributes').set({
// 	height: 73,
// 	weight: 84,
// });
