import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { color } from 'styles/color';

const ChartWrap = styled.div`
    width: 100%;
    height: 35rem;
    /* border: 1px solid white; */
`;

const options = {
    maintainAspectRatio: false,
    elements: {
        point:{
            radius: 0
        }
    },
    tooltips: {
       mode: 'index',
       intersect: false,
       callbacks: {
          labelTextColor() {
             return 'white';
          },
          label(tooltipItem: any) {
            return tooltipItem.yLabel;
          }
       },
    legend: {
        display: false,
        }
    },
    
 };

 type Props = {
     chartData: Array<any>;
 }

function Chart({ chartData }: Props) {
    
    const chartDataSet = {
        labels: chartData,
        datasets: [{
            label: "Chart",
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            fill: true, // line의 아래쪽을 색칠할 것인가? 
            borderColor: color.strong_red,
            lineTension: 0.1, // 값을 높이면, line의 장력이 커짐.
            data: chartData,
        }]
     };

    return (
        <ChartWrap>
            <Line data={chartDataSet} options={options} />
        </ChartWrap>
        
    );
}

export default Chart;