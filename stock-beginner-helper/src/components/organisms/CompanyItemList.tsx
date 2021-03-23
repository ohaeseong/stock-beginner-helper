import React from 'react';
import styled from 'styled-components';
import { QuoteResponseItem, QuoteResponseType } from 'types';
import CompanyItem from './CompanyItem';

const CompanyItemListWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

`;

type Props = {
    itemListData: Array<any> | null;
}

function CompanyItemList({ itemListData }: Props) {
    return (
        <CompanyItemListWrap>
            {
                itemListData?.map((item: QuoteResponseItem) => {
                    return <CompanyItem key={item.symbol} item={item} />;
                })
            }
        </CompanyItemListWrap>
    );
}

export default CompanyItemList;