import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render expense form correctly', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

// should render expense form with expense data
test('should render expense form with expense data', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render for invalid form submission', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {},
	});
	expect(wrapper.state('error').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
	const value = 'New Description.';
	const wrapper = shallow(<ExpenseForm />);
	// expect(wrapper).toMatchSnapshot();
	wrapper.find('input').at(0).simulate('change', {
		target: { value },
	});
	expect(wrapper.state('description')).toBe(value);
	// expect(wrapper).toMatchSnapshot();
});

test('should set amount on valid input', () => {
	const value = '23.50';
	const wrapper = shallow(<ExpenseForm />);

	wrapper.find('input').at(1).simulate('change', {
		target: { value },
	});
	expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on invalid input', () => {
	const value = '23.5024';
	const wrapper = shallow(<ExpenseForm />);

	wrapper.find('input').at(1).simulate('change', {
		target: { value },
	});
	expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(
		<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
	);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {},
	});
	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		amount: expenses[0].amount * 100,
		note: expenses[0].note,
		createdAt: expenses[0].createdAt,
	});
});

test('should set new date on date change', () => {
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);
	// console.log(wrapper);
	wrapper.find('#date').prop('onDateChange')(moment());
	expect(wrapper.state('createdAt')).toEqual(now);
});

// should set calendar focus on change
test('should set calendar focus on change', () => {
	const focused = true;
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('#date').prop('onFocusChange')({ focused });
	expect(wrapper.state('calendarFocused')).toEqual(focused);
});
