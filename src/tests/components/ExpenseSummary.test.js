import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import selectExpenseTotal from '../../selectors/expense-total';
import expenses from '../fixtures/expenses';

test('should correctly render ExpenseSummary with 1 expense', () => {
	const wrapper = shallow(
		<ExpensesSummary expenseCount={1} expensesTotal={expenses[0].amount} />
	);
	expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with all expense', () => {
	const wrapper = shallow(
		<ExpensesSummary
			expenseCount={expenses.length}
			expensesTotal={selectExpenseTotal(expenses)}
		/>
	);
	expect(wrapper).toMatchSnapshot();
});
