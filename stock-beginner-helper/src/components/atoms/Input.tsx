import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';

const InputStyled = styled.input<{ margin?: string }>`
    width: 100%;
    height: 1rem;
    padding: 0.3rem;
    outline: 0;
    border: 1px solid ${color.gray_1};
    background-color: ${color.gray_0};

    ${(props) => {
        if (props.margin) {
            return `
                margin: ${props.margin};
            `;
        }
    }}
`;

type Props = {
    margin?: string;
}

function Input({ margin }: Props) {
    return <InputStyled margin={margin} />
}

export default Input;