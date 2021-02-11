// import { requestGetStock } from 'libs/api/repository';
// import useRequest from 'libs/hooks/useRequest';
import React, { useEffect } from 'react';
import * as S from './style';


function BasedTemplate() {

    // const [onRequest, data, loading, error] = useRequest(requestGetStock);

    useEffect(() => {
        // onRequest();
        // console.log(onRequest());
    }, []);
    return (
        <S.Container>
            <S.CompanyListTemplate>
            </S.CompanyListTemplate>
            <S.StockInfoTemplate>
                <S.StockInfoTemplateHeader />
            </S.StockInfoTemplate>
        </S.Container>
    );
}

export default BasedTemplate;

