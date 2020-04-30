import moment from 'moment';
import {
	setTextFilter,
	setSortByAmount,
	setSortByDate,
	setStartDate,
	setEndDate,
} from '../../actions/filters';

test('should setup set Text filter with provided value', () => {
	const action = setTextFilter('date');
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: 'date',
	});
});

test('should setup set Text filter with default value', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: '',
	});
});

test('should setup set sort by amount', () => {
	const action = setSortByAmount();
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT',
	});
});
test('should setup set sort by date', () => {
	const action = setSortByDate();
	expect(action).toEqual({
		type: 'SORT_BY_DATE',
	});
});

test('should setup set start date', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0),
	});
});

test('should setup set end date', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0),
	});
});
