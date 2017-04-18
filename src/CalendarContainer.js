var React = require('react'),
  DaysView = require('./DaysView'),
  MonthsView = require('./MonthsView'),
  YearsView = require('./YearsView'),
  TimeView = require('./TimeView'),
  createClass = require('create-react-class')
;

var CalendarContainer = createClass({
	viewComponents: {
		days: DaysView,
		months: MonthsView,
		years: YearsView,
		time: TimeView
	},

  render: function() {
    return React.createElement( this.viewComponents[ this.props.view ], this.props.viewProps );
  }
});

module.exports = CalendarContainer;
