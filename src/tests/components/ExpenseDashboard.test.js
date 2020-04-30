import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboard';

test('should render Expense Dashboard correctly', () => {
	const wrapper = shallow(<ExpenseDashboard />);
	expect(wrapper).toMatchSnapshot();
});
