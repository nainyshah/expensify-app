import { createStore } from 'redux';

console.log('redux-101');

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy,
});

const resetCount = () => ({
	type: 'RESET',
});
const setCount = ({ count = 0 } = {}) => ({
	type: 'SET',
	count,
});

// Reducers
const countReducers = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { count: state.count + action.incrementBy };
		case 'DECREMENT':
			return { count: state.count - action.decrementBy };
		case 'RESET':
			return { count: 0 };
		case 'SET':
			return { count: action.count };
		default:
			return state;
	}
};
const store = createStore(countReducers);

// Subscribe

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// Actions
// I'd like to increment the count
// for this we will use dispatch msg
store.dispatch(incrementCount({ incrementBy: 5 }));

// I'd like to decrement the count
store.dispatch(decrementCount({ decrementBy: 3 }));

// I'd like to reset the count to zero
store.dispatch(resetCount());

store.dispatch(setCount({ count: 105 }));
