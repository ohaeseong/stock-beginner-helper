import DirectionGroup from 'components/molecules/DirectionGroup';
import LabelGroup from 'components/molecules/LabelGroup';
import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';
import { QuoteResponseItem } from 'types';

const CompanyItemWrap = styled.div`
    display: flex;
    direction: row;
    /* justify-content: space-between; */
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid ${color.middle_gray};
    cursor: pointer;

`;

type Props = {
    item: QuoteResponseItem;
}

function CompanyItem({ item }: Props) {
    
    return (
        <CompanyItemWrap>
            <LabelGroup CompanyCode={item.symbol} CompanyFullName={item.longName} />
            {
                // data ? <DirectionGroup data={data}/> : <></>
            }
        </CompanyItemWrap>
    );
}

export default CompanyItem;
