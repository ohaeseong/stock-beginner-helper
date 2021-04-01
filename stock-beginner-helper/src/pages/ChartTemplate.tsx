import LabelGroup from 'components/molecules/LabelGroup';
import { requestGetChart } from 'libs/api/repository';
import useRequest from 'libs/hooks/useRequest';
import React from 'react';
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

`;

type Props = {
    symbol: string;
    fullName: string;
}

function ChartTemplate({ fullName, symbol }: Props) {
    const [onRequestGetChart, chartData, , ] = useRequest(requestGetChart);

    return (
        <CompanyChartTemplate>
            <Head>
                <LabelGroup CompanyCode={symbol} CompanyFullName={fullName} type={'title'} />
            </Head>
    
        </CompanyChartTemplate>
    );
}

export default ChartTemplate;