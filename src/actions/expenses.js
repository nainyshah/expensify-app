import { v4 as uuidv4 } from 'uuid';

// ==========Expense Actions =============
export const addExpense = ({
	description = '',
	note = '',
	amount = 0,
	createdAt = 0,
} = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuidv4(),
		description,
		note,
		amount,
		createdAt,
	},
});
export const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id,
});

export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates,
});

// export const addExpense = ({
// 	type: 'ADD_EXPENSE',
// 	expense
// });

// export const startAddExpense = (expenseData = {}) => {
// 	return (dispatch) => {
// 		const {
// 			description = '',
// 			note = '',
// 			amount = 0,
// 			createdAt = 0,
// 		} = expenseData;
// 		const expense = { description, note, amount, createdAt };
// 		database
// 			.ref('expense')
// 			.push(expense)
// 			.then(() => {
// 				addExpense({
// 					id: ref.key,
// 					...expense,
// 				});
// 			});
// 	};
// };
