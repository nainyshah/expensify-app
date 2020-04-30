import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup default filter values', () => {
	const state = filterReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month'),
	});
});

test('should set sortBy to amount', () => {
	const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
	const currentState = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined,
	};
	const action = { type: 'SORT_BY_DATE' };
	const state = filterReducer(currentState, action);
	expect(state.sortBy).toBe('date');
});

// Should set text filter
test('should set text filter', () => {
	const currentState = {
		text: '',
		sortBy: '',
		startDate: undefined,
		endDate: undefined,
	};
	const text = 'raza';
	const action = { type: 'SET_TEXT_FILTER', text };
	const state = filterReducer(currentState, action);
	expect(state.text).toBe('raza');
});

// Should set start date filter

test('should set start date filter', () => {
	const startDate = moment().startOf('month');
	const action = { type: 'SET_START_DATE', startDate };
	const state = filterReducer(undefined, action);
	expect(state.startDate).toEqual(startDate);
});

// Should set end date filter
test('should set end date filter', () => {
	const endDate = moment().startOf('year');
	const action = { type: 'SET_END_DATE', endDate };
	const state = filterReducer(undefined, action);
	expect(state.endDate).toEqual(endDate);
});
