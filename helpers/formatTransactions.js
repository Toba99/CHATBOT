/* eslint-disable camelcase */
require("dotenv").config();
const User = require("../models/User");

module.exports = async ({ user, peerUser, transaction }) => {
	try {
		/** Get all user ids */
		const peerUserObj = [];
		peerUserObj.push(user.id);
		const transactionLength = transaction.length;
		for (let i = 0; i <= transactionLength; i++) {
			if (transaction[i] && transaction[i].peer_user_id) {
				peerUserObj.push(transaction[i].peer_user_id);
			}
		}

		/** Get all users from DB at once */
		const uniqueUserIdsToLoad = [...new Set(peerUserObj)];
		const usersToLoad = await User.query()
			.select("id", "name", "username", "avatar", "verified")
			.whereIn("id", uniqueUserIdsToLoad);

		/** List Transactions */
		const sottedTransactions = [];
		for (let index = 0; index <= transactionLength; index++) {
			if (transaction[index]) {
				let {
					id,
					peer_user_id,
					amount,
					balance,
					description,
					reference,
					outward,
					type,
					sub_account,
					bank_details,
					status,
					created_at,
				} = transaction[index];

				let peer_user = {};


				if (type === "withdrawal") {
					peer_user_id = user.id;
				}

				if (!peerUser) {
					peer_user = usersToLoad.find((user) => user.id === peer_user_id);
				} else {
					peer_user = peerUser;
				}
				
				if (bank_details) {
					if (Object.keys(bank_details).length > 0) {
						bank_details = JSON.parse(bank_details);
					}
				}
				
				sottedTransactions.push({
					id,
					amount,
					balance,
					description,
					reference,
					outward,
					bank_details,
					type,
					user,
					redo: !!(type === "p2p" && outward),
					peer_user,
					sub_account,
					payment_link,
					status,
					created_at,
				});
			}
		}
		return sottedTransactions;
	} catch (error) {
		console.log(error);
		return [];
	}
};

