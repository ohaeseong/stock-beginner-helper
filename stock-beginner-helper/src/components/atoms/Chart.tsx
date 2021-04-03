import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { color } from 'styles/color';

const ChartWrap = styled.div`
    width: 100%;
    height: 35rem;
    /* border: 1px solid white; */
`;

const TimeLabels = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
`;

const TimeLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    color: ${color.middle_gray};
`;

const options = {
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    elements: {
        point:{
            radius: 0
        }
    },
    scales: {
        xAxes: [{
         ticks: {
                display: false
         }
       }],
    //    yAxes: [{
    //     ticks: {
    //         beginAtZero: true
    //     }
    //   }]
     },
    hover: {
        intersect: false
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
    },
 };

 type Props = {
     chartData: Array<any>;
     date: string;
 }

function Chart({ chartData, date }: Props) {
    const [timeLabel, setTimeLabels] = useState([] as Array<any>);
    const [timeLabelElement, setTimeLabelsElement] = useState([] as Array<any>);
    const chartDataSet = {
        labels: chartData,
        datasets: [{
            label: "Chart",
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            fill: true, // line의 아래쪽을 색칠할 것인가? 
            borderColor: color.strong_red,
            lineTension: 0, // 값을 높이면, line의 굴곡이 커짐
            data: chartData,
        }]
     };

     useEffect(() => {
       switch (date) {
           case '1d':
               setTimeLabels([10, 11, 12, 1, 2]);
               break;
            case '5d':
                setTimeLabels([29, 30, 31, 1, 2]);
            break;
            case '1mo':
                setTimeLabels([2, 9, 16, 23, 30]);
            break;
            case '3mo':
                setTimeLabels(['1월', '2월', '3월']);
            break;
            case '6mo':
                setTimeLabels(['10월', '11월', '12월', '1월', '2월', '3월']);
            break;
            case '1y':
                setTimeLabels(['4월', '8월', '12월']);
            break;
            case '2y':
                setTimeLabels(['4월', '10월', '4월', '10월']);
            break;
            case '5y':
                setTimeLabels(['2017년', '2018년', '2019년', '2020년', '2021년']);
            break;
            case '10y':
                setTimeLabels(['2011년', '2013년', '2015년', '2017년', '2019년', '2021년']);
            break;
       
           default:
               break;
       }
     }, [date]);

     useEffect(() => {
        const elementList = [] as Array<any>;
        timeLabel.forEach(children => {
            elementList.push(<TimeLabel>{children}</TimeLabel>);
        });

        setTimeLabelsElement(elementList);
     }, [timeLabel])

    return (
        <ChartWrap>
            <div style={{ height:'50vh', maxWidth:'100%' }}>
                <Line data={chartDataSet} options={options} />
            </div>
            <TimeLabels>
                {timeLabelElement}
            </TimeLabels>
        </ChartWrap>
        
    );
}

export default Chart;