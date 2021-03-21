export type QuoteResponseType = {
    data: {
        quoteResponse: {
            result: Array<QuoteResponseItem>
        }
    }
}

export type QuoteResponseItem = {
    longName: string;
    symbol: string;
    regularMarketPrice: number;
    regularMarketPreviousClose: number;
}