import ConfigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
	startAddExpense,
	addExpense,
	editExpense,
	removeExpense,
	setExpenses,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
// import { AddExpense } from '../../components/AddExpense';

const createMockStore = ConfigureMockStore([thunk]);

beforeEach((done) => {
	const expensesData = {};
	expenses.forEach(({ id, description, note, amount, createdAt }) => {
		expensesData[id] = { description, note, amount, createdAt };
	});
	database
		.ref('expenses')
		.set(expensesData)
		.then(() => done());
});

test('should setup remove expense action object', () => {
	const action = removeExpense({ id: '1' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '1',
	});
});

test('should setup edit expense action object', () => {
	const action = editExpense('1', {
		description: 'Stc Pay',
		amount: 250,
		note: 'Stc payment',
		createdAt: 12121212,
	});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '1',
		updates: {
			description: 'Stc Pay',
			amount: 250,
			note: 'Stc payment',
			createdAt: 12121212,
		},
	});
});

test('should setup add expense action object with provided values', () => {
	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: expenses[2],
	});
});

// test('should setup add expense action object with default values', () => {
// 	const expense = {
// 		id: '4',
// 		description: '',
// 		amount: 0,
// 		note: '',
// 		createdAt: 0,
// 	};
// 	const action = addExpense();
// 	expect(action).toEqual({
// 		type: 'ADD_EXPENSE',
// 		expense,
// 	});
// });
// we implement promise chaining here

test('should add expense to database and store', (done) => {
	const store = createMockStore({});
	const expenseData = {
		description: 'mouse',
		amount: 3000,
		note: 'this one is better',
		createdAt: 1588258935230,
	};
	store
		.dispatch(startAddExpense(expenseData))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expense: {
					id: expect.any(String),
					...expenseData,
				},
			});
			return database.ref(`expenses/${actions[0].expense.id}`).once('value');
		})
		.then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseData);
			done();
		});
});
test('should add expense to database and store with default values', () => {
	const store = createMockStore({});
	const expenseDefaults = {
		description: '',
		amount: 0,
		note: '',
		createdAt: 0,
	};
	store
		.dispatch(startAddExpense(expenseDefaults))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: 'ADD_EXPENSE',
				expense: {
					id: expect.any(String),
					...expenseDefaults,
				},
			});
			return database.ref(`expenses/${actions[0].expense.id}`).once('value');
		})
		.then((snapshot) => {
			expect(snapshot.val()).toEqual(expenseDefaults);
			done();
		});
});

test('set should set expense action object with data', () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: 'SET_EXPENSES',
		expenses,
	});
});
