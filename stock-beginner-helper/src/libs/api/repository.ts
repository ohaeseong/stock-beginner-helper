import HTTP from './index';

export const reqeustCompanyStockSimple = (params: { 
		interval: string; 
		symbol: string; 
		range: string;  
		region: string;
	}) =>
	HTTP
		.get(`/market/get-charts`, {
			params: {
				interval: params.interval,
				symbol: params.symbol,
				range: params.range,
				region: params.region,
			}
		})
		.catch((error) => {
			throw error;
		});