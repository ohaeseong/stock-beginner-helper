import Input from 'components/atoms/Input';
import CompanyItemList from 'components/organisms/CompanyItemList';
import { requestQuotes } from 'libs/api/repository';
import { GrSearch } from 'react-icons/gr';
import useRequest from 'libs/hooks/useRequest';
import ChartTemplate from 'pages/ChartTemplate';
import NewsTemplate from 'pages/NewsTemplate';
import React, { ChangeEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react';
import * as S from './style';
import { color } from 'styles/color';
import Loading from 'components/atoms/Loading';


function BasedTemplate() {

    const [onRequestGetQuotes, quotesData, isLoading, ] = useRequest(requestQuotes);
    const [symbol, setSymbol] = useState('AAPL');
    const [searchKeySymbol, setSearchKeySymbol] = useState('');
    const [fullName, setFullName] = useState('Apple Inc.');

    const handleCompanyInfo = useCallback((symbol: string, fullName: string) => {
        setSymbol(symbol);
        setFullName(fullName);
    }, []);



    const handleSymbol = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearchKeySymbol(e.target.value);
    }, []);

    const handleSearchBarKeypress = useCallback((e: KeyboardEvent<HTMLInputElement>) => {

        if (e.key === 'Enter') {
            if (!searchKeySymbol) {
                const req = {
                    symbol: "AAPL,BA,BRK-B,DIS,GE,HD,NKE,SBUX",
                };
    
                onRequestGetQuotes(req);
            } else {
                const req = {
                    symbol: searchKeySymbol,
                };
    
                onRequestGetQuotes(req);
            }
        }
        
    }, [onRequestGetQuotes, searchKeySymbol]);

    useEffect(() => {
        if (!quotesData && !searchKeySymbol) {
                const req = {
                    symbol: "AAPL,BA,BRK-B,DIS,GE,HD,NKE,SBUX",
                };
    
                onRequestGetQuotes(req);
        }
    }, [onRequestGetQuotes, quotesData, searchKeySymbol]);   

    return (
        <S.Container>
            <S.CompanyListTemplate>
                <S.SearchBarTemplate>
                    <Input margin="0 0.5rem 0 0" onChange={handleSymbol} onKeyPress={handleSearchBarKeypress} />
                    <GrSearch size="1.7rem" style={{ color: 'white' }} />
                </S.SearchBarTemplate>
               {
                   isLoading ? <Loading /> : quotesData !== null ?  <CompanyItemList itemListData={quotesData.data.quoteResponse.result} handleCompanyInfo={handleCompanyInfo}/> : <></>
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

