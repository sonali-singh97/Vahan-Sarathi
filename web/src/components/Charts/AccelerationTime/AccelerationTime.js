import React, { useState } from 'react';
import { Line, defaults } from 'react-chartjs-2';

defaults.animation = false;
defaults.scale.grid.display = true;
console.log(defaults.scale.title);
defaults.scale.title.display = true;
defaults.font.size = 11;

function AccelerationTime() {
  const [chartLabels, SetchartLebels] = useState([2, 4, 6, 8, 10, 12, 14]);
  const [accelerationValues, setaccelerationValues] = useState([
    22, 18, 5, 13, 9, 6, 2,
  ]);

  const [data, setdata] = useState({
    labels: chartLabels,
    datasets: [
      {
        label: 'Acceleration',
        data: accelerationValues,
        fill: false,
        lineTension: 0.2,
        backgroundColor: '#334443',
        borderColor: '#334443',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 0,
        pointHitRadius: 10,
        borderWidth: 4,
      },
    ],
  });

  return (
    <div
      style={{
        display: 'inline-block',
        width: '450px',
        height: '300px',
        padding: '0.5rem',
        borderStyle: 'none',
        margin: '1rem',
        borderRadius: '12px',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
      }}
    >
      <Line
        data={data}
        width={50}
        height={30}
        options={{
          maintainAspectRatio: true,
          scales: {
            xAxes: {
              title: {
                display: true,
                text: 'Time',
              },
            },
            yAxes: {
              title: {
                display: true,
                text: 'Acceleration(m/sec2)',
              },
              ticks: {
                beginAtZero: true,
              },
            },
          },
        }}
        redraw={false}
      />
    </div>
  );
}

export default AccelerationTime;
