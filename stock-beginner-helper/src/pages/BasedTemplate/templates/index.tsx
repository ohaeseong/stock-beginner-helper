import CompanyItem from 'components/organisms/CompanyItem';
import React, { useEffect } from 'react';
import CompanyList from 'source/company_data';
import * as S from './style';


function BasedTemplate() {
    return (
        <S.Container>
            <S.CompanyListTemplate>
                {CompanyList.map((item) => {
					return <CompanyItem key={item.code} item={item} />;
				})}
            </S.CompanyListTemplate>
            <S.StockInfoTemplate>
                <S.StockInfoTemplateHeader />
            </S.StockInfoTemplate>
        </S.Container>
    );
}

export default BasedTemplate;

