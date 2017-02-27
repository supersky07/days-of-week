/*
 * get start date and end date of the target week
 */

var week = require('week');

module.exports = function(target_week) {
	var curr_week = week();

	if (!target_week) {
		target_week = curr_week;
	} else {
		target_week -= 1;
	}

	var curr_date = new Date();

	var curr_day = curr_date.getDay();
	var curr_time = curr_date.getTime();

	var curr_firstday = new Date(curr_time - 24 * (curr_day - 1) * 3600 * 1000);

	var target_firstday = new Date(curr_firstday.getTime() - (curr_week - target_week) * 7 * 24 * 3600 * 1000);
	var target_lastday = new Date(target_firstday.getTime() + 6 * 24 * 3600 * 1000);

	return {
		s: target_firstday,
		e: target_lastday
	};
}
