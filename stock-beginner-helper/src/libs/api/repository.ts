import HTTP from './index';

export const requestGetStock = () =>
	HTTP
		.get(`/market/v2/get-chart`, {
			params: {
				region: "US",
				symbols: "AF"
			}
		})
		.catch((error) => {
			throw error;
		});