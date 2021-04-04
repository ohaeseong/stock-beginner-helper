import Chart from 'components/atoms/Chart';
import Loading from 'components/atoms/Loading';
import ChartDateFilterGroup from 'components/molecules/ChartDateFilterGroup';
import LabelGroup from 'components/molecules/LabelGroup';
import { requestGetChart } from 'libs/api/repository';
import useRequest from 'libs/hooks/useRequest';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CompanyChartTemplate = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
`;

const Head = styled.div`
    height: 3rem;
    margin-top: 2rem;
`;

const Body = styled.div`
    width: 100%;
    min-height: 20rem;
`;

type Props = {
    symbol: string;
    fullName: string;
}

function ChartTemplate({ fullName, symbol }: Props) {
    const [onRequestGetChart, chartData, isLoading, ] = useRequest(requestGetChart);
    const [chartDataList, setChartDataList] = useState([]);
    const [date, setDate] = useState('1d');

    const handleChartDate = (date: string) => {
        setDate(date);
    };

    useEffect(() => {

        if (!chartData && symbol) {
            const req = {
                symbol,
                range: '1d'
            };
    
            onRequestGetChart(req);
        }

        if (chartData) {
            setChartDataList(chartData.data.chart.result[0].indicators.quote[0].open);
        }
        

    }, [symbol, chartData, onRequestGetChart]);

    useEffect(() => {
        
        if (symbol) {
            let req;

            if (date === '1mo' || date === '3mo' || date === '6mo' || date === '1y' || date === '2y' || date === '5y' || date === '10y') {
                req = {
                    interval: '1d',
                    symbol,
                    range: date
                };   
            } else {
                req = {
                    interval: '5m',
                    symbol,
                    range: date
                };
            }
    
            onRequestGetChart(req);
        }

        if (chartData) {            
            setChartDataList(chartData.data.chart.result[0].indicators.quote[0].open);
        }
    }, [symbol, date]);

    return (
        <CompanyChartTemplate>
            <Head>
                <LabelGroup CompanyCode={symbol} CompanyFullName={fullName} type={'title'} />
            </Head>
            <Body>
                {
                    isLoading ? <Loading /> :  
                    <>
                        <ChartDateFilterGroup onClick={handleChartDate} date={date} />
                        <Chart chartData={chartDataList} date={date}/>
                    </>
                }
            </Body>
        </CompanyChartTemplate>
    );
}

export default ChartTemplate;