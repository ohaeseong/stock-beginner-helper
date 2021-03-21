import React from 'react';
import styled from 'styled-components';

const NameWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: white;
    font-size: 1.2rem;
    font-weight: 800;
`;

type Props = {
    children: string;
}

function StocksName({ children }: Props) {
    return <NameWrap>{children}</NameWrap>;
}

export default StocksName;
