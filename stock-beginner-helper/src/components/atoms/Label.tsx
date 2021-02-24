import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';

const LabelTag = styled.span`
    font-size: 1rem;
    color: ${color.gray_2};
`;

type Props = {
    children: string;
}

function Label({ children }: Props) {
    return(<LabelTag>{children}</LabelTag>);
}

export default Label;