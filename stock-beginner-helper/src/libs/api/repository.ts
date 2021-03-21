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