import React from 'react';
import ReactDOM from 'react-dom';
import SampleApp from './components/SampleApp';
import { Provider } from 'react-redux';
import AppRoute from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setSortByAmount, setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

// addExpense -> Water Bill
// addExpense -> Gas Bill
// setTextFilter -> bill (2 Item) -> water (1 item)
// getVisibleExpenses -> print visible ones to screen

store.dispatch(
	addExpense({ description: 'Water Bill', amount: 350, createdAt: -1000 })
);

store.dispatch(
	addExpense({ description: 'Gas Bill', amount: 550, createdAt: -21000 })
);

// store.dispatch(setTextFilter('water'));
// store.dispatch(setSortByAmount());

// console.log(store.getState());

const jsx = (
	<Provider store={store}>
		<AppRoute />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
// ReactDOM.render(<SampleApp />, document.getElementById('app'));
