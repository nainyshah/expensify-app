import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters';

const ExpneseDashboard = () => (
	<div>
		<ExpenseListFilter />
		<ExpenseList />
	</div>
);

export default ExpneseDashboard;
