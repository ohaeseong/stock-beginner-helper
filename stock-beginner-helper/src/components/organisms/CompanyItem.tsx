import LabelGroup from 'components/molecules/LabelGroup';
import { reqeustCompanyStockSimple } from 'libs/api/repository';
import useRequest from 'libs/hooks/useRequest';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';
import { CompanyItemType } from 'types';

const CompanyItemWrap = styled.div`
    display: flex;
    direction: row;
    /* justify-content: space-between; */
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid ${color.gray_1};
    cursor: pointer;

`;

type Props = {
    item: CompanyItemType;
}

function CompanyItem({ item }: Props) {

    const [onRequest, data, , ] = useRequest(reqeustCompanyStockSimple);

    useEffect(() => {
        if (!data) {
            const req = {
                interval: '5m',
				symbol: item.code,
				range: '1d',
                region: 'US'
            }
            onRequest(req);
        }
    }, [data, item.code, onRequest]);
    
    return (
        <CompanyItemWrap>
            <LabelGroup CompanyCode={item.code} CompanyFullName={item.fullName} />
        </CompanyItemWrap>
    );
}

export default CompanyItem;
