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
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'row',
        width: '400px',
        padding: '1rem',
        borderStyle: 'none',
        margin: '1rem',
        borderRadius: '12px',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
      }}
    >
      <div style={{ width: '250px', height: '250px', display: 'inline-block' }}>
        <Doughnut
          data={data}
          options={{
            maintainAspectRatio: false,
          }}
          redraw={false}
        />
      </div>
      <div
        style={{
          paddingLeft: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h6 style={{ fontWeight: '700', color: '#002884', fontSize: '12px' }}>
          Masked :
          <span style={{ color: '#f21170' }}>
            {((Masked / (Masked + Unmasked)) * 100).toFixed(1)}%
          </span>
        </h6>
        <h6 style={{ fontWeight: '700', color: '#002884', fontSize: '12px' }}>
          Unmasked :
          <span style={{ color: '#f21170' }}>
            {((Unmasked / (Masked + Unmasked)) * 100).toFixed(1)}%
          </span>
        </h6>
      </div>
    </div>
  );
}

export default MaskedUnmasked;
