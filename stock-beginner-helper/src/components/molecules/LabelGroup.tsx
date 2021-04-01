import StocksName from 'components/atoms/StocksInfo';
import React from 'react';
import styled from 'styled-components';
import Label from '../atoms/Label';

const LabelGroupWrap = styled.div<{ directionType?: string, type?: string }>`
    width: 10rem;
    display: flex;
    /* justify-content: flex-start; */
    align-items: center;
    flex-direction: column;
    padding: 0.5rem;
    /* border: 1px solid white; */

    & > * {
        margin-top: 0.5rem;
    }

    ${(props) => {

        if (props.type === "title") {
            return `
                width: 100%;
                height: 100%;
                align-items: baseline;
                flex-direction: row;

                & > * {
                    margin-right: 1.5rem;
                }
            `
        }
    }}
    /* padding: 1rem; */

`;

type Props = {
    CompanyCode: string;
    CompanyFullName: string;
    type?: string;
}

function LabelGroup({ CompanyCode, CompanyFullName, type }: Props) {
    return (
        <LabelGroupWrap type={type}>
            <StocksName type={type}>
                {CompanyCode}
            </StocksName>
            <Label type={type}>
                {CompanyFullName}
            </Label>
        </LabelGroupWrap>
    );
}

export default LabelGroup;