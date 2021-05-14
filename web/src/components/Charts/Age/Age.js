import React, { useState } from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';
import CountData from '../../CountData/CountData';

defaults.animation = false;
defaults.scale.grid.display = false;
console.log(defaults.scale.title);
defaults.scale.title.display = true;
defaults.font.size = 9;

function Age() {
  const [age1, setage1] = useState(12);
  const [age2, setage2] = useState(20);
  const [age3, setage3] = useState(18);
  const [age4, setage4] = useState(5);
  const [data, setdata] = useState({
    labels: ['Age1 - 0-17', 'Age2 - 18-30', 'Age3 - 31-55', 'Age4 - >56'],
    datasets: [
      {
        label: 'Different Age Ratio',
        data: [age1, age2, age3, age4],
        backgroundColor: ['#26001b', '#810034', '#ff005c', '#fff600'],
        hoverOffset: 4,
      },
    ],
    options : {
      legend :{
        display : false
      }
    }
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '400px',
        height: '240px',
        padding: '1rem',
        borderStyle: 'none',
        margin: '1rem',
        borderRadius: '12px',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
      }}
    >
      <div style={{ width: '200px', height: '240px', display: 'inline-block' }}>
        <Doughnut
          data={data}
          options={{
            legend: {
              display: false,
            },
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
          Age 1 :
          <span style={{ color: '#f21170' }}>
            {((age1 / (age1 + age2 + age3 + age4)) * 100).toFixed(1)}%
          </span>
        </h6>
        <h6 style={{ fontWeight: '700', color: '#002884', fontSize: '12px' }}>
          Age 2 :
          <span style={{ color: '#f21170' }}>
            {((age2 / (age1 + age2 + age3 + age4)) * 100).toFixed(1)}%
          </span>
        </h6>
        <h6 style={{ fontWeight: '700', color: '#002884', fontSize: '12px' }}>
          Age 3 :
          <span style={{ color: '#f21170' }}>
            {((age3 / (age1 + age2 + age3 + age4)) * 100).toFixed(1)}%
          </span>
        </h6>
        <h6 style={{ fontWeight: '700', color: '#002884', fontSize: '12px' }}>
          Age 4 :
          <span style={{ color: '#f21170' }}>
            {((age4 / (age1 + age2 + age3 + age4)) * 100).toFixed(1)}%
          </span>
        </h6>
      </div>
    </div>
  );
}

export default Age;
