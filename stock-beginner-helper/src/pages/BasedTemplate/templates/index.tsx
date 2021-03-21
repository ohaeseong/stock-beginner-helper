import Loading from 'components/atoms/Loading';
import CompanyItem from 'components/organisms/CompanyItem';
import { requestQuotes } from 'libs/api/repository';
import useRequest from 'libs/hooks/useRequest';
import React, { useEffect } from 'react';
import { QuoteResponseItem } from 'types';
import * as S from './style';


function BasedTemplate() {

    const [onRequest, data, isLoading, ] = useRequest(requestQuotes);

    useEffect(() => {
        if (!data) {
            onRequest();
        }

        console.log(data);
        
    }, [data, onRequest]);
    // data.map((item: QuoteResponseItem) => {
    //     return <CompanyItem key={item.symbol} item={item} />;
    // })
    return (
        <S.Container>
            <S.CompanyListTemplate>
                {isLoading ? <Loading /> : <></>}
            </S.CompanyListTemplate>
            <S.StockInfoTemplate>
                <S.StockInfoTemplateHeader />
            </S.StockInfoTemplate>
        </S.Container>
    );
}

export default BasedTemplate;

