import moment from 'moment';
export default [
	{
		id: '1',
		description: 'STC',
		note: '',
		amount: 500,
		createdAt: 0,
	},
	{
		id: '2',
		description: 'ZAIN',
		note: '',
		amount: 1400,
		createdAt: moment(0).subtract(4, 'days').valueOf(),
	},
	{
		id: '3',
		description: 'RENT',
		note: '',
		amount: 2500,
		createdAt: moment(0).add(4, 'days').valueOf(),
	},
];
