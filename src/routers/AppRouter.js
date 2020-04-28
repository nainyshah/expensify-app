import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpanseDashboard from '../components/ExpanseDashboard';
import AddExpanse from '../components/AddExpanse';
import EditExpanse from '../components/EditExpanse';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import ExpanseHeader from '../components/ExpanseHeader';

const AppRoute = () => (
	<BrowserRouter>
		<ExpanseHeader />
		<Switch>
			<Route path="/" component={ExpanseDashboard} exact={true} />
			<Route path="/create" component={AddExpanse} />
			<Route path="/edit/:id" component={EditExpanse} />
			<Route path="/help" component={Help} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default AppRoute;
