module.exports = (accounts = []) => {
	try {
		const result = [];
		if (accounts.length === 0) {
			return null;
		}

		accounts.forEach((account) => {
			result.pop({ account: account.bvn_name });
		});
	} catch (error) {}
};
