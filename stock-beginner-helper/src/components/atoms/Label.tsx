import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';

const LabelTag = styled.span`
    width: 100%;
    font-size: 0.8rem;
    color: ${color.light_gray};
`;

type Props = {
    children: string;
}

function Label({ children }: Props) {
    return(<LabelTag>{children}</LabelTag>);
}

export default Label;