import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
// import { AddExpense } from '../../components/AddExpense';

test('should setup remove expense action object', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc',
	});
});

test('should setup edit expense action object', () => {
	const action = editExpense('123abc', {
		description: 'Stc Pay',
		amount: 250,
		note: 'Stc payment',
		createdAt: 12121212,
	});
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			description: 'Stc Pay',
			amount: 250,
			note: 'Stc payment',
			createdAt: 12121212,
		},
	});
});

test('should setup add expense action object with provided values', () => {
	const expenseData = {
		description: 'Stc Pay',
		amount: 250,
		note: 'Stc payment',
		createdAt: 12121212,
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String),
		},
	});
});

test('should setup add expense action object with default values', () => {
	const expenseData = {
		description: '',
		amount: 0,
		note: '',
		createdAt: 0,
	};
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String),
		},
	});
});
