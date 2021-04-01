import React from 'react';
import styled from 'styled-components';
import { QuoteResponseItem, QuoteResponseType } from 'types';
import CompanyItem from './CompanyItem';

const CompanyItemListWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 10rem;
`;

type Props = {
    itemListData: Array<any>;
    handleCompanyInfo: (symbol: string, fullName: string) => void;
}

function CompanyItemList({ itemListData, handleCompanyInfo}: Props) {
    return (
        <CompanyItemListWrap>
            {
                itemListData.map((item: QuoteResponseItem) => {
                    return <CompanyItem key={item.symbol} item={item} handleCompanyInfo={handleCompanyInfo} />;
                })
            }
        </CompanyItemListWrap>
    );
}

export default React.memo(CompanyItemList);