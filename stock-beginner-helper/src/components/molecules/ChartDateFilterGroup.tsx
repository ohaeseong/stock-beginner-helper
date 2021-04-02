import ChartDateFilter from 'components/atoms/ChartDateFilter';
import StocksInfo from 'components/atoms/StocksInfo';
import React from 'react';
import styled from 'styled-components';


const ChartDateFilterGroupWrap = styled.div`
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
    date: string;
}

function ChartDateFilterGroup({ onClick, date}: Props) {
    return (
        <ChartDateFilterGroupWrap>
            <ChartDateFilter onClick={onClick} value={'1d'} date={date}>1일</ChartDateFilter>
            <ChartDateFilter onClick={onClick} value={'5d'} date={date}>1주</ChartDateFilter>
            <ChartDateFilter onClick={onClick} value={'1mo'} date={date}>1달</ChartDateFilter>
            <ChartDateFilter onClick={onClick} value={'3mo'} date={date}>3달</ChartDateFilter>
            <ChartDateFilter onClick={onClick} value={'6mo'} date={date}>6달</ChartDateFilter>
            <ChartDateFilter onClick={onClick} value={'1y'} date={date}>1년</ChartDateFilter>
            <ChartDateFilter onClick={onClick} value={'2y'} date={date}>2년</ChartDateFilter>
            <ChartDateFilter onClick={onClick} value={'5y'} date={date}>5년</ChartDateFilter>
            <ChartDateFilter onClick={onClick} value={'10y'} date={date}>10년</ChartDateFilter>
        </ChartDateFilterGroupWrap>
    );
}

export default ChartDateFilterGroup;