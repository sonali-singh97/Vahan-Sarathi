import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function AgeGroupBarChart() {
  const [chartLabels, SetchartLebels] = useState([
    'Day 1',
    'Day2',
    'Day3',
    'Day4',
    'Day5',
    'Day6',
    'Day7',
  ]);
  const [age1, setage1] = useState([23, 21, 2, 17, 10, 13, 19]);
  const [age2, setage2] = useState([13, 20, 20, 7, 10, 23, 9]);
  const [age3, setage3] = useState([8, 10, 16, 7, 6, 14, 9]);
  const [age4, setage4] = useState([7, 11, 12, 6, 3, 3, 29]);

  const [options, setoptions] = useState({
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: chartLabels,
    },
    stroke: {
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Age Groups (Weekly Data)',
      align: 'center',
      style: {
        color: 'grey',
      },
    },
  });

  const [data, setdata] = useState([
    { name: '0-17', data: age1 },
    { name: '18-30', data: age2 },
    { name: '31-55', data: age3 },
    { name: '>56', data: age4 },
  ]);
  return (
    <div
      style={{
        display: 'inline-block',
        width: '720px',
        height: '395px',
        padding: '0.5rem',
        borderStyle: 'none',
        margin: '1rem',
        borderRadius: '12px',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
      }}
    >
      <Chart
        options={options}
        series={data}
        type="bar"
        width={700}
        height={380}
      />
    </div>
  );
}

export default AgeGroupBarChart;
