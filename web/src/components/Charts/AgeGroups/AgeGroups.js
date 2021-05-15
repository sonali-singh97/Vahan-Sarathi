import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function AgeGroups() {
  const [chartLabels, SetchartLebels] = useState([
    'Age 1 - 0-17',
    'Age 1 - 18-30',
    'Age 1 - 31-55',
    'Age 1 - >56',
  ]);
  const [age1, setage1] = useState(21);
  const [age2, setage2] = useState(11);
  const [age3, setage3] = useState(30);
  const [age4, setage4] = useState(6);

  const [options, setoptions] = useState({
    chart: {
      id: 'basic-area',
    },
    labels: ['0-18', '18-30', '31-55', '>56'],
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
      text: 'Age Groups',
      align: 'center',
      style: {
        color: 'grey',
      },
    },
  });

  const [data, setdata] = useState([age1, age2, age3, age4]);

  return (
    <div
      style={{
        zIndex :-1,
        display: 'inline-block',
        padding: '0.5rem',
        borderStyle: 'none',
        margin: '1rem',
        borderRadius: '12px',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
      }}
    >
      <Chart options={options} series={data} type="donut" />
    </div>
  );
}

export default AgeGroups;
