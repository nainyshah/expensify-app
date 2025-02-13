// import { createStore, combineReducers } from 'redux';
// import expenseReducer from '../reducers/expenses';
// import filterReducer from '../reducers/filters';

// export default () => {
// 	// Store creation
// 	const store = createStore(
// 		combineReducers({
// 			expenses: expenseReducer,
// 			filters: filterReducer,
// 		}),
// 		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// 	);
// 	return store;
// };

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk';
export default () => {
	// Store creation
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore(
		combineReducers({
			expenses: expenseReducer,
			filters: filterReducer,
		}),
		composeEnhancers(applyMiddleware(thunk))
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return store;
};
