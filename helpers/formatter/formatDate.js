const dateTime = require("date-and-time");
const formatDate = ({ iso, extraSeconds }) => {
	const unix = Math.floor(+new Date() / 1000);
	extraSeconds = extraSeconds > 0 ? extraSeconds : 0;
	const newTime = parseInt(unix) + parseInt(extraSeconds);
	const date = new Date(newTime * 1000);
	if (iso === true) {
		return date.toISOString();
	}
	const isoDate = date.toISOString().split("T");
	const finalDate = isoDate[0] + " " + isoDate[1].trim().slice(0, -5);
	return finalDate;
};

const englishDateFormatV1 = (date) => {
	const dt = new Date(date);
	const suffix =
		dt.getDate() +
		(dt.getDate() % 10 === 1 && dt.getDate() !== 11
			? "st"
			: dt.getDate() % 10 === 2 && dt.getDate() !== 12
			? "nd"
			: dt.getDate() % 10 === 3 && dt.getDate() !== 13
			? "rd"
			: "th");

	return `${suffix} ${dt
		.toString()
		.replace(/\S+\s(\S+)\s(\d+)\s(\d+)\s.*/, "$1 $3")}`;
};

const englishDateFormat = (date) => {
	const dt = new Date(date);
	return dateTime.format(dt, "dddd, MMMM DD YYYY");
};

const plainDateFormat = (date) => {
	const dt = new Date(date);
	return dateTime.format(dt, "YYYY-MM-DD");
};

const daysBetween = (first, second) => {
	// Copy date parts of the timestamps, discarding the time parts.
	const one = new Date(first.getFullYear(), first.getMonth(), first.getDate());
	const two = new Date(
		second.getFullYear(),
		second.getMonth(),
		second.getDate()
	);

	// Do the math.
	const millisecondsPerDay = 1000 * 60 * 60 * 24;
	const millisBetween = two.getTime() - one.getTime();
	const days = millisBetween / millisecondsPerDay;

	// Round down.
	return Math.floor(days);

	// it will return date difference in days

	// let date = new Date("05/28/2021")
	// let date1 = new Date("06/05/2021")
	// console.log(daysBetween(date, date1))
};
module.exports = {
	daysBetween,
	formatDate,
	plainDateFormat,
	englishDateFormat,
	englishDateFormatV1,
};
