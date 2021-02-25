import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';

const LimitDisplay = styled.div<{ isUpper: boolean }>`
    width: 4rem;
    height: 2rem;
    background-color: ${props => props.isUpper && `${color.deep_blue}`};
    background-color: ${props => props.isUpper && `${color.strong_red}`};
    color: white;
`;

type Props = {
    value: string;
    isUpper: boolean;
}

function LimitStateDisplay({ isUpper,  value }: Props) {
    return (<LimitDisplay isUpper={isUpper}>{value}</LimitDisplay>);
}

export default LimitStateDisplay;
