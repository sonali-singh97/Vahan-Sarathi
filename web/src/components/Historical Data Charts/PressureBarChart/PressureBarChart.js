import React ,{useState} from 'react';
import Chart from 'react-apexcharts';

function PressureBarChart() {
  const [chartLabels, SetchartLebels] = useState([
    'Day 1',
    'Day2',
    'Day3',
    'Day4',
    'Day5',
    'Day6',
    'Day7',
  ]);
  const [pressurevalues, setpressurevalues] = useState([
    22, 15, 8, 11, 39, 20, 30,
  ]);

    const [options, setoptions] = useState({
      chart: {
        id: 'basic-bar',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      xaxis: {
        categories: chartLabels,
      },
      stroke: {
        curve: 'smooth',
      },
      fill: {
          colors : '#E91E63'
      },
      dataLabels: {
        enabled: true,
      },
      title: {
        text: 'Pressure (Weekly Data)',
        align: 'center',
        style: {
          color: 'grey',
        },
      },
    });

    const [data, setdata] = useState([
      { name: 'Pressure', data: pressurevalues },
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
        type="bar"
        width={480}
        height={280}
      />
    </div>
  );
}

export default PressureBarChart;
