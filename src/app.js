import React from 'react';
import ReactDOM from 'react-dom';
// import SampleApp from './components/SampleApp';
import { Provider } from 'react-redux';
import AppRoute from './routers/AppRouter';
import configureStore from './store/configureStore';
// import { addExpense } from './actions/expenses';
// import { setSortByAmount, setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
// import './firebase/firebase';
console.log('webpack');
const store = configureStore();

const jsx = (
	<Provider store={store}>
		<AppRoute />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
