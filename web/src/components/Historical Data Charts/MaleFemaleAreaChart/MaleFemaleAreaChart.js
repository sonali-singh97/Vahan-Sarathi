import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function MaleFemaleAreaChart() {
  const [chartLabels, SetchartLebels] = useState([
    'Day 1',
    'Day2',
    'Day3',
    'Day4',
    'Day5',
    'Day6',
    'Day7',
  ]);
  const [male, setmale] = useState([15, 11, 16, 15, 19, 2, 28]);
  const [female, setfemale] = useState([15, 24, 16, 25, 19, 9, 8]);

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
      text: 'Male & Female (Week)',
      align: 'center',
      style: {
        color: 'grey',
      },
    },
  });

  const [data, setdata] = useState([
    {
      name: 'Male',
      data: male,
    },
    {
      name: 'Female',
      data: female,
    },
  ]);

  return (
    <div
      style={{
        display: 'inline-block',
        width: '520px',
        height: '300px',
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
        type="area"
        width={480}
        height={290}
      />
    </div>
  );
}

export default MaleFemaleAreaChart;
