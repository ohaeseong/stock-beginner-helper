import Chart from 'components/atoms/Chart';
import Loading from 'components/atoms/Loading';
import ButtonGroup from 'components/molecules/ButtonGroup';
import LabelGroup from 'components/molecules/LabelGroup';
import { requestGetChart } from 'libs/api/repository';
import useRequest from 'libs/hooks/useRequest';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CompanyChartTemplate = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 100%;

    /* border: 1px solid white; */
`;

const Head = styled.div`
    height: 5rem;
    padding: 2rem;

    /* border: 1px solid white; */
`;

const Body = styled.div`
    width: 100%;
    min-height: 40rem;
`;

type Props = {
    symbol: string;
    fullName: string;
}

function ChartTemplate({ fullName, symbol }: Props) {
    const [onRequestGetChart, chartData, isLoading, ] = useRequest(requestGetChart);
    const [chartDataList, setChartDataLise] = useState([]);
    const [date, setDate] = useState('1d');

    const handleChartDate = (date: string) => {
        setDate(date);
    };

    useEffect(() => {

        if (!chartData && symbol) {
            const req = {
                symbol,
                range: date
            };
    
            onRequestGetChart(req);
        }

        if (chartData) {
            
            setChartDataLise(chartData.data.chart.result[0].indicators.quote[0].open);
        }
        

    }, [symbol, chartData, onRequestGetChart, date]);

    useEffect(() => {
        if (symbol) {
            const req = {
                symbol,
                range: date
            };
    
            onRequestGetChart(req);
        }

        if (chartData) {
            setChartDataLise(chartData.data.chart.result[0].indicators.quote[0].high);
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
                        <ButtonGroup onClick={handleChartDate} />
                        <Chart chartData={chartDataList}/>
                    </>
                }
            </Body>
    
        </CompanyChartTemplate>
    );
}

export default ChartTemplate;