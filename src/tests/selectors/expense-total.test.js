import selectExpenseTotal from '../../selectors/expense-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
	const res = selectExpenseTotal([]);
	expect(res).toBe(0);
});

test('should coreectly add up a single expense', () => {
	const res = selectExpenseTotal([expenses[0]]);
	expect(res).toBe(500);
});

test('should coreectly add up all expenses', () => {
	const res = selectExpenseTotal(expenses);
	expect(res).toBe(4400);
});
