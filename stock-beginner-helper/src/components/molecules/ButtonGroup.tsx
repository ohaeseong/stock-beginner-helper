import Button from 'components/atoms/Button';
import StocksInfo from 'components/atoms/StocksInfo';
import React from 'react';
import styled from 'styled-components';


const ButtonGroupWrap = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 2rem 0;

    & > *{
        margin-right: 1rem;
    }
`;

type Props = {
    onClick: (params?: any) => void;
}

function ButtonGroup({ onClick }: Props) {
    return (
        <ButtonGroupWrap>
            <Button onClick={onClick} value={'1d'}>1일</Button>
            <Button onClick={onClick} value={'5d'}>1주</Button>
            <Button onClick={onClick} value={'1mo'}>1달</Button>
            <Button onClick={onClick} value={'3MO'}>3달</Button>
            <Button onClick={onClick} value={'6Mo'}>6달</Button>
            <Button onClick={onClick} value={'1Y'}>1년</Button>
            <Button onClick={onClick} value={'2Y'}>2년</Button>
            <Button onClick={onClick} value={'5Y'}>5년</Button>
            <Button onClick={onClick} value={'10Y'}>10년</Button>
        </ButtonGroupWrap>
    );
}

export default ButtonGroup;