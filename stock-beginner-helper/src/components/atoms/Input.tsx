import React, { ChangeEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';

const InputStyled = styled.input<{ margin?: string }>`
    width: 100%;
    height: 1rem;
    padding: 0.3rem;
    outline: 0;
    border: 1px solid ${color.gray_1};
    background-color: ${color.gray_0};
    color: ${color.light_gray};

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
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
}

function Input({ margin, onChange, onKeyPress }: Props) {
    return <InputStyled margin={margin} onChange={onChange} onKeyPress={onKeyPress} />
}

export default Input;