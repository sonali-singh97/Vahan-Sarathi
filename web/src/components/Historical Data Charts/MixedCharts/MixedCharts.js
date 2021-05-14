import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function MixedCharts() {
  const [chartLabels, SetchartLebels] = useState([
    'Day 1',
    'Day2',
    'Day3',
    'Day4',
    'Day5',
    'Day6',
    'Day7',
  ]);
  const [total, settotal] = useState([50, 45, 49, 48, 40, 42, 50]);
  const [withmask, setmask] = useState([34, 4, 14, 20, 30, 11, 22]);
  const [withoutmask, setwithoutmask] = useState([16, 41, 34, 28, 10, 31, 28]);

  const [options, setoptions] = useState({
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: 'vertical',
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    xaxis: {
      categories: chartLabels,
    },
    markers: {
      size: 0,
    },

    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Total vs With Mask vs Without Mask (Weekly)',
      align: 'center',
      style: {
        color: 'grey',
      },
    },
    markers: {
      size: 0,
    },
  });

  const [data, setdata] = useState([
    {
      name: 'Total',
     type : 'column',
      data: total,
    },
    {
      name: 'With Mask',
      type: 'area',
      data: withmask,
    },
    {
      name: 'Without Mask',
      type: 'line',
      data: withoutmask,
    },
  ]);

  return (
    <div
      style={{
        display: 'inline-block',
        width: '920px',
        height: '425px',
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
        width={900}
        height={410}
      />
    </div>
  );
}

export default MixedCharts;
