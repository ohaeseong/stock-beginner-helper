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
				symbols: params.symbol,
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
					interval: params.interval,
					symbol: params.symbol,
					region: "US",
					range: params.range,
				}
			})
			.catch((error) => {
				throw error;
			});

export const requestAutoCompleteInfo = (params: { 
	q: string; 
}) =>
HTTP
	.get(`/auto-complete`, {
		params: {
			q: params.q,
		}
	})
	.catch((error) => {
		throw error;
	});
export const requestGetNewsDetail = (params: { 
		uuid: string; 
	}) =>
	HTTP
		.get(`/news/v2/get-details`, {
			params: {
				uuid: params.uuid,
			}
		})
		.catch((error) => {
			throw error;
		});