import StocksName from 'components/atoms/StocksInfo';
import React from 'react';
import styled from 'styled-components';
import Label from '../atoms/Label';

const LabelGroupWrap = styled.div`
    width: 10rem;
    display: flex;
    /* justify-content: flex-start; */
    align-items: center;
    flex-direction: column;
    padding: 0.5rem;
    border: 1px solid white;

    & > * {
        margin-top: 0.5rem;
    }
    /* padding: 1rem; */

`;

type Props = {
    CompanyCode: string;
    CompanyFullName: string;
    // directionType: string;
}

function LabelGroup({ CompanyCode, CompanyFullName }: Props) {
    return (
        <LabelGroupWrap>
            <StocksName>
                {CompanyCode}
            </StocksName>
            <Label>
                {CompanyFullName}
            </Label>
        </LabelGroupWrap>
    );
}

export default LabelGroup;