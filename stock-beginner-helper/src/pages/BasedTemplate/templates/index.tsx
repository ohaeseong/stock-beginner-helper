import Input from 'components/atoms/Input';
import CompanyItemList from 'components/organisms/CompanyItemList';
import { requestQuotes } from 'libs/api/repository';
import { GrSearch } from 'react-icons/gr';
import useRequest from 'libs/hooks/useRequest';
import ChartTemplate from 'pages/ChartTemplate';
import NewsTemplate from 'pages/NewsTemplate';
import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style';
import { color } from 'styles/color';


function BasedTemplate() {

    const [onRequestGetQuotes, quotesData, , ] = useRequest(requestQuotes);
    const [symbol, setSymbol] = useState('AAPL');
    const [fullName, setFullName] = useState('Apple Inc.');

    const handleCompanyInfo = useCallback((symbol: string, fullName: string) => {
        setSymbol(symbol);
        setFullName(fullName);
    }, []);

    useEffect(() => {
        if (!quotesData) {
            onRequestGetQuotes();
        }
        
    }, [quotesData, onRequestGetQuotes]);

    return (
        <S.Container>
            <S.CompanyListTemplate>
                <S.SearchBarTemplate>
                    <Input margin="0 0.5rem 0 0" />
                    <GrSearch size="1.7rem" style={{ color: color.light_gray }} />
                </S.SearchBarTemplate>
               {
                    quotesData !== null ?  <CompanyItemList itemListData={quotesData.data.quoteResponse.result} handleCompanyInfo={handleCompanyInfo}/> : <></>
               }
            </S.CompanyListTemplate>
            <S.StockInfoTemplate>
                <S.StockInfoTemplateHeader />
                <ChartTemplate fullName={fullName} symbol={symbol} />
                <NewsTemplate symbol={symbol} />
            </S.StockInfoTemplate>
        </S.Container>
    );
}

export default React.memo(BasedTemplate);

