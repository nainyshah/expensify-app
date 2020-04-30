import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
	const action = { type: '@@INIT' };
	const state = expensesReducer(undefined, action);
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id,
	};

	const state = expensesReducer(expenses, action);

	expect(state).toEqual([expenses[0], expenses[2]]);
});

test("shouldn't remove expense if id not found", () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1',
	};

	const state = expensesReducer(expenses, action);

	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const expense = {
		id: '4',
		description: 'Kitchen',
		note: '',
		amount: 3000,
		createdAt: moment(0).valueOf(),
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense,
	};

	const state = expensesReducer(expenses, action);

	expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
	const updates = {
		description: 'STC Pay',
	};
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[0].id,
		updates,
	};
	const state = expensesReducer(expenses, action);
	expect(state[0].description).toEqual(updates.description);
});

test('should not edit an expense if id not found', () => {
	const updates = {
		description: 'STC Pay',
	};
	const action = {
		type: 'EDIT_EXPENSE',
		id: -1,
		updates,
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should set expenses', () => {
	const action = {
		type: 'SET_EXPENSES',
		expenses: [expenses[1]],
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[1]]);
});
