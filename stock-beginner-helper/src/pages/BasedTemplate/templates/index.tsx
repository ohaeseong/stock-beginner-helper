import Loading from 'components/atoms/Loading';
import CompanyItem from 'components/organisms/CompanyItem';
import CompanyItemList from 'components/organisms/CompanyItemList';
import { requestQuotes } from 'libs/api/repository';
import useRequest from 'libs/hooks/useRequest';
import React, { useEffect, useState } from 'react';
import { QuoteResponseItem } from 'types';
import * as S from './style';


function BasedTemplate() {

    const [onRequest, data, isLoading, ] = useRequest(requestQuotes);
    const [quoteList, setQuoteList] = useState([]);

    useEffect(() => {
        if (!data) {
            onRequest();
        }

        console.log(data);
        
    }, [data, onRequest]);

    return (
        <S.Container>
            <S.CompanyListTemplate>
               {
                   data.map((item: QuoteResponseItem) => {
                        return <CompanyItem key={item.symbol} item={item} />;
                    })
               }
            </S.CompanyListTemplate>
            <S.StockInfoTemplate>
                <S.StockInfoTemplateHeader />
            </S.StockInfoTemplate>
        </S.Container>
    );
}

export default BasedTemplate;

