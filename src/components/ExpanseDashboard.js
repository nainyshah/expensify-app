import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters';

const ExpnaseDashboardPage = () => (
	<div>
		<ExpenseListFilter />
		<ExpenseList />
	</div>
);

export default ExpnaseDashboardPage;
