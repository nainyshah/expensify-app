import React from 'react';
import { NavLink } from 'react-router-dom';

const ExpanseHeader = () => (
	<header>
		<h1>Expensify</h1>
		<p>
			<NavLink activeClassName="is-active" to="/" exact={true}>
				Home
			</NavLink>
			|
			<NavLink activeClassName="is-active" to="/create">
				Create
			</NavLink>
			|
			<NavLink activeClassName="is-active" to="/help">
				Help
			</NavLink>
		</p>
	</header>
);

export default ExpanseHeader;
