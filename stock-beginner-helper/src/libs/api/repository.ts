import HTTP from './index';

export const requestQuotes = (params: { 
		interval: string; 
		symbol: string; 
		range: string;  
		region: string;
	}) =>
	HTTP
		.get(`/market/v2/get-quotes`, {
			params: {
				symbols: "AAPL,BA,BRK-B,DIS,GE,HD,NKE,SBUX",
				region: "US",
			}
		})
		.catch((error) => {
			throw error;
		});

export const requestGetChart = (params: { 
			interval: string; 
			symbol: string; 
			range: string;  
		}) =>
		HTTP
			.get(`/stock/v2/get-chart`, {
				params: {
					interval: '5m',
					symbol: params.symbol,
					region: "US",
					range: params.range,
				}
			})
			.catch((error) => {
				throw error;
			});