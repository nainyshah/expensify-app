import moment from 'moment';

const filters = {
	text: '',
	sortBy: '',
	startDate: undefined,
	endDate: undefined,
};

const altFilters = {
	text: 'zain',
	sortBy: 'amount',
	startDate: moment(0),
	endDate: moment(0).add(3, 'days'),
};

export { filters, altFilters };
