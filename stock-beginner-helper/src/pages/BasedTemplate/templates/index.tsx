import CompanyItemList from 'components/organisms/CompanyItemList';
import { requestGetChart, requestQuotes } from 'libs/api/repository';
import useRequest from 'libs/hooks/useRequest';
import ChartTemplate from 'pages/ChartTemplate';
import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style';


function BasedTemplate() {

    const [onRequestGetQuotes, quotesData, , ] = useRequest(requestQuotes);
    const [symbol, setSymbol] = useState('');
    const [fullName, setFullName] = useState('');

    const handleCompanyInfo = useCallback((symbol: string, fullName: string) => {
        setSymbol(symbol);
        setFullName(fullName);
    }, []);

    useEffect(() => {
        if (!quotesData) {
            onRequestGetQuotes();
        }

        console.log(quotesData);
        
    }, [quotesData, onRequestGetQuotes]);

    return (
        <S.Container>
            <S.CompanyListTemplate>
               {
                    quotesData !== null ?  <CompanyItemList itemListData={quotesData.data.quoteResponse.result} handleCompanyInfo={handleCompanyInfo}/> : <></>
               }
            </S.CompanyListTemplate>
            <S.StockInfoTemplate>
                <S.StockInfoTemplateHeader />
                <ChartTemplate fullName={fullName} symbol={symbol} />
            </S.StockInfoTemplate>
        </S.Container>
    );
}

export default React.memo(BasedTemplate);

