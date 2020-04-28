console.log('redux-expansify..');
import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// ===== We need to define actions now.
// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// ==========Expense Actions =============
const addExpense = ({
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
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id,
});

const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates,
});

// Expense Reducer
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => {
				return id != action.id;
			});
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id == action.id) {
					return {
						...expense,
						...action.updates,
					};
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};

//=========== Filter Actions ==============
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text,
});

const setSortByAmount = () => ({
	type: 'SORT_BY_AMOUNT',
});

const setSortByDate = () => ({
	type: 'SORT_BY_DATE',
});

const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate,
});

const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate,
});

// Filter Reducer
const filterReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined,
};
const filterReducer = (state = filterReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text,
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date',
			};
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount',
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate,
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate,
			};
		default:
			return state;
	}
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter((expense) => {
			const startDateMatch =
				typeof startDate !== 'number' || expense.createdAt >= startDate;
			const endDateMatch =
				typeof endDate !== 'number' || expense.createdAt <= endDate;
			const textMatch = expense.description
				.toLowerCase()
				.includes(text.toLowerCase());

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === 'date') {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else if (sortBy === 'amount') {
				return a.amount < b.amount ? 1 : -1;
			}
		});
};

// Store creation
const store = createStore(
	combineReducers({
		expenses: expenseReducer,
		filters: filterReducer,
	})
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
	addExpense({ description: 'STC Internet', amount: 350, createdAt: -1000 })
);
const expenseTwo = store.dispatch(
	addExpense({ description: 'Zain Internet', amount: 550, createdAt: -21000 })
);

// //console.log(store.getState());
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('inter'));
// // store.dispatch(setTextFilter(''));
// store.dispatch(setSortByFilter('amount'));
store.dispatch(setSortByAmount())
// store.dispatch(setStartDate(1002));
// store.dispatch(setEndDate(999));

const demoState = {
	expenses: [
		{
			id: 'dasdasd',
			description: 'January Rent',
			note: 'This is the final payment for that address.',
			amount: 54500,
			createdAt: 0,
		},
	],
	filters: {
		text: 'rent',
		sortBy: 'amount', // date or amount
		startDate: undefined,
		endDate: undefined,
	},
};
