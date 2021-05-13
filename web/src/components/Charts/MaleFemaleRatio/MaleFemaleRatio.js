import React, { useState } from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';

defaults.animation = false;
defaults.scale.grid.display = false;
console.log(defaults.scale.title);
defaults.scale.title.display = true;

function MaleFemaleRatio() {
  const [males, setmales] = useState(16);
  const [females, setfemales] = useState(24);
  const [data, setdata] = useState({
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: 'Gender Ratio',
        data: [males, females],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
        hoverOffset: 4,
      },
    ],
  });
  return (
    <div
      style={{
        width: '220px',
        height: '240px',
        padding: '0.5rem',
        borderStyle: 'none',
        margin: '1rem',
        borderRadius: '12px',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
      }}
    >
      <Doughnut
        data={data}
        width={30}
        height={30}
        options={{
          maintainAspectRatio: true,
        }}
        redraw={false}
      />
    </div>
  );
}

export default MaleFemaleRatio;
