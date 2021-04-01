import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';

const LabelTag = styled.span<{ type?: string }>`
    width: 100%;
    font-size: 0.8rem;
    color: ${color.light_gray};

    ${(props) => {

    if (props.type === 'title') {
        return `
                width: auto;    
                font-size: 1.5rem;
            `
        }
    }}
`;

type Props = {
    children: string;
    type?: string;
}

function Label({ children, type }: Props) {
    return(<LabelTag type={type}>{children}</LabelTag>);
}

export default Label;