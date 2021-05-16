import React, { useState, useContext, useEffect } from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';
import DataContext from "../../../context/Data";

defaults.animation = false;
defaults.scale.grid.display = false;
console.log(defaults.scale.title);
defaults.scale.title.display = true;

function MaleFemaleRatio() {
  let {res, setRes} = useContext(DataContext);
  console.log("inside charts")
 
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
          Male :
          <span style={{ color: '#f21170' }}>
            {((males / (males + females)) * 100).toFixed(1)}%
          </span>
        </h6>
        <h6 style={{ fontWeight: '700', color: '#002884', fontSize: '12px' }}>
          Female :
          <span style={{ color: '#f21170' }}>
            {((females / (males + females)) * 100).toFixed(1)}%
          </span>
        </h6>
      </div>
    </div>
  );
}

export default MaleFemaleRatio;
