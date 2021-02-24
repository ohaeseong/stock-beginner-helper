import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';

const LimitDisplay = styled.div<{ type: boolean }>`
    width: 4rem;
    height: 2rem;
    background-color: ${props => props.type && `${color.deep_blue}`};
    background-color: ${props => props.type && `${color.strong_red}`};
    color: white;
`;

type Props = {
    value: string;
    type: boolean;
}

function LimitStateDisplay({ type,  value }: Props) {
    return (<LimitDisplay type={type}>{value}</LimitDisplay>);
}

export default LimitStateDisplay;
