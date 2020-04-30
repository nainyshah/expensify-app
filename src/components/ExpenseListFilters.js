import React from 'react';
import { connect } from 'react-redux';
import {
	setTextFilter,
	setSortByAmount,
	setSortByDate,
	setStartDate,
	setEndDate,
} from '../actions/filters';

import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
	state = {
		calendarFocused: null,
	};
	onDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};
	onFocusChange = (calendarFocused) => {
		this.setState(() => ({ calendarFocused }));
	};
	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	};
	onSortChange = (e) => {
		if (e.target.value === 'amount') {
			this.props.setSortByAmount();
		} else if (e.target.value === 'date') {
			this.props.setSortByDate();
		}
	};
	render() {
		return (
			<div>
				<input
					type="text"
					value={this.props.filters.text}
					onChange={this.onTextChange}
				></input>
				<select value={this.props.filters.sortBy} onChange={this.onSortChange}>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker
					startDateId="MyDatePicker"
					endDateId="MyDatePicker"
					startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
					endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
					onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
					showClearDates={true}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch, props) => ({
	setStartDate: (startDate) => dispatch(setStartDate(startDate)),
	setEndDate: (endDate) => dispatch(setEndDate(endDate)),
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	setSortByAmount: () => dispatch(setSortByAmount()),
	setSortByDate: () => dispatch(setSortByDate()),
});

const mapStateToProps = (state) => {
	return {
		filters: state.filters,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
