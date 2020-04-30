import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/NotFound';

test('should render not found content', () => {
	const wrapper = shallow(<NotFound />);
	expect(wrapper).toMatchSnapshot();
});
