import React from 'react';
import * as S from './style';


function BasedTemplate() {
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

