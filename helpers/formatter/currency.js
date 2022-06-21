const commaNumber = require("comma-number");
const moneyFormat = function (amount, nocurrency) {
	try {
		const currency = nocurrency === true ? "" : "₦";
		if (!amount) {
			return currency + "0";
		}
		return currency + commaNumber(Math.round(amount));
		// return currency + Math.round(parseInt(amount));
	} catch (e) {}
};

module.exports = {
	moneyFormat,
};
