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

export type NewsItemType = {
    link: string;
    providerPublishTime: number;
    publisher: string
    title: string;
    type: string;
    uuid: string;
}