import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { color } from 'styles/color';

const ButtonStyle = styled.button<{ size: string, isActive: boolean }>`
    background-color: ${color.gray_2};
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
    size?: string;
    value: string;
    date: string;
    children: React.ReactNode;
}

function Button ({ onClick, children, size = 'default', value, date }: Props) {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        switch (value) {
            case '1d':
                if (date === value) {
                    setIsActive(true);
                }
                break;
            case '5d':
                
                break;
            case '1mo':
        
                break;
            case '3mo':
    
                break;
            case '6mo':
    
                break;
            case '1y':
    
                break;
            case '2y':
    
                break;
            case '5y':
    
                break;
            case '10y':
    
                break;
            default:
                break;
        }
    }, [date, value])



    return <ButtonStyle onClick={() => onClick(value)} size={size} isActive={isActive}>{children}</ButtonStyle>
}

export default Button;