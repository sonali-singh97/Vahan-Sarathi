import React, { useState } from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';

defaults.animation = false;
defaults.scale.grid.display = false;
console.log(defaults.scale.title);
defaults.scale.title.display = true;

function MaskedUnmasked() {
  const [Masked, setmasked] = useState(32);
  const [Unmasked, setUnmasked] = useState(18);
  const [data, setdata] = useState({
    labels: ['Masked', 'Unmasked'],
    datasets: [
      {
        label: 'Masked vs Unmasked',
        data: [Masked, Unmasked],
        backgroundColor: ['#23049d', '#aa2ee6'],
        hoverOffset: 4,
      },
    ],
  });
  return (
    <div
      style={{
        display :'inline-block',
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

export default MaskedUnmasked;
