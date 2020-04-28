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

class ExpenseListFilter extends React.Component {
	state = {
		calendarFocused: null,
	};
	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};
	onFocusChange = (calendarFocused) => {
		this.setState(() => ({ calendarFocused }));
	};
	render() {
		return (
			<div>
				<input
					type="text"
					value={this.props.filters.text}
					onChange={(e) => {
						props.dispatch(setTextFilter(e.target.value));
					}}
				></input>
				<select
					value={this.props.filters.sortBy}
					onChange={(e) => {
						if (e.target.value === 'amount') {
							this.props.dispatch(setSortByAmount());
						} else if (e.target.value === 'date') {
							this.props.dispatch(setSortByDate());
						}
					}}
				>
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

// const ExpenseListFilter = (props) => (
// 	<div>
// 		<input
// 			type="text"
// 			value={props.filters.text}
// 			onChange={(e) => {
// 				props.dispatch(setTextFilter(e.target.value));
// 			}}
// 		></input>
// 		<select
// 			value={props.filters.sortBy}
// 			onChange={(e) => {
// 				if (e.target.value === 'amount') {
// 					props.dispatch(setSortByAmount());
// 				} else if (e.target.value === 'date') {
// 					props.dispatch(setSortByDate());
// 				}
// 			}}
// 		>
// 			<option value="date">Date</option>
// 			<option value="amount">Amount</option>
// 		</select>
// 	</div>
// );
const mapStateToProps = (state) => {
	return {
		filters: state.filters,
	};
};
export default connect(mapStateToProps)(ExpenseListFilter);
