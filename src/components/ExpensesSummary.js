import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expense-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
	const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');
	return (
		<h3>
			Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}
		</h3>
	);
};

// export default ExpensesSummary;
const mapStateToProps = (state) => {
	const visibleExpenses = selectExpenses(state.expenses, state.filters);
	return {
		expenseCount: visibleExpenses.length,
		expensesTotal: selectExpensesTotal(visibleExpenses),
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
