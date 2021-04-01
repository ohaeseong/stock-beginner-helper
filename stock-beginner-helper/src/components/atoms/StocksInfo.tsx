import React from 'react';
import styled from 'styled-components';

const InfoWrap = styled.div<{ type?: string }>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: white;
    font-size: 1.2rem;
    font-weight: 800;


    ${(props) => {

        if (props.type === 'title') {
            return `
                    width: auto;    
                    font-weight: 800;
                    font-size: 2.5rem;
                `
        }
    }}
`;

type Props = {
    children: string;
    type?: string;
}

function StocksInfo({ children, type }: Props) {
    return <InfoWrap type={type}>{children}</InfoWrap>;
}

export default StocksInfo;
