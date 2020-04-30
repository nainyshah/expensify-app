import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpanse from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import ExpanseHeader from '../components/ExpanseHeader';

const AppRoute = () => (
	<BrowserRouter>
		<ExpanseHeader />
		<Switch>
			<Route path="/" component={ExpenseDashboard} exact={true} />
			<Route path="/create" component={AddExpanse} />
			<Route path="/edit/:id" component={EditExpense} />
			<Route path="/help" component={Help} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default AppRoute;
