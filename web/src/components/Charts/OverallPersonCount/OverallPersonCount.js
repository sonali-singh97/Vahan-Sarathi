import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function OverallPersonCount() {
  const [chartLabels, SetchartLebels] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [totalCount, settotalcount] = useState([50, 44, 36, 50, 39, 26, 48]);
  const [male, setmale] = useState([15, 11, 16, 15, 19, 2, 28]);
  const [female, setfemale] = useState([15, 24, 16, 25, 19, 9, 8]);
  const [withmask, setwithmask] = useState([20, 5, 3, 10, 10, 8, 20]);

  const [options, setoptions] = useState({
    chart: {
      id: 'basic-area',
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
  });

  const [data, setdata] = useState([
      {
        name: 'Total',
        data: totalCount,
      },
      {
        name: 'Male',
        data: male,
      },
      {
        name: 'Female',
        data: female,
      },
      {
        name: 'With Mask',
        data: withmask,
      },
    ]);

  return (
    <div
      style={{
        display: 'inline-block',
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
        width={500}
        height={400}
      />
      <div style={{backgroundColor : 'red'}}></div>
    </div>
  );
}

export default OverallPersonCount;
