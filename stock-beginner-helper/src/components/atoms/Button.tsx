import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';

const ButtonStyle = styled.button<{ size: string, isActive?: boolean }>`
    background-color: transparent;
    background-repeat: no-repeat;
    outline: none;
    border: none;
    color: white;
    padding: 0.5rem;
    border-radius: 5px;
    transition: 0.2s ease-in-out;

    cursor: pointer;


    ${(props) => {
        if (props.size === 'default') {
            return `
                font-size: 1rem;
                font-weight: 700;
            `
        }


        if (props.isActive) {
            return `
                background-color: ${color.gray_0};
            `
        }
    }}
`;

type Props = {
    onClick: (params?: any) => void;
    isActive?: boolean;
    size?: string;
    value: string;
    children: React.ReactNode;
}

function Button ({ onClick, children, size = 'default', isActive, value }: Props) {
    return <ButtonStyle onClick={() => onClick(value)} size={size} isActive={isActive}>{children}</ButtonStyle>
}

export default Button;