// Snapshot testing is all about component testing
// to test browser based components react provides us a component named
// react-test-renderer
import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import ExpanseHeader from '../../components/ExpanseHeader';
// const renderer = new ReactShallowRenderer();
// renderer.render(<ExpanseHeader />);
// expect(renderer.getRenderOutput()).toMatchSnapshot();

test('should render Header correctly', () => {
	const wrapper = shallow(<ExpanseHeader />);
	expect(wrapper).toMatchSnapshot();
	// expect(wrapper.find('h1').text()).toBe('Expensify');
});
