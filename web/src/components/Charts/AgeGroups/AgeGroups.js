import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

function AgeGroups() {
  const [chartLabels, SetchartLebels] = useState([
    'Age 1 - 0-17',
    'Age 1 - 18-30',
    'Age 1 - 31-55',
    'Age 1 - >56',
  ]);
  const [age1, setage1] = useState(21);
  const [age2, setage2] = useState(11);
  const [age3, setage3] = useState(30);
  const [age4, setage4] = useState(6);

  // let { res, setRes } = useContext(DataContext);

  const [options, setoptions] = useState({
    chart: {
      id: 'basic-area',
    },
    labels: ['0-18', '18-30', '31-55', '>56'],
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
      text: 'Age Groups',
      align: 'center',
      style: {
        color: 'grey',
      },
    },
  });

  const [data, setdata] = useState([age1, age2, age3, age4]);

  // useEffect(() => {
  //   if (res !== undefined) {
  //     res = JSON.parse(res);
  //     var oldlabels = chartLabels;
  //     var age1_old = res.age1;
  //     var age2_old = res.age2;
  //     var age3_old = res.age3;
  //     var age4_old = res.age4;

  //     setage1(age1_old);
  //     setage2(age2_old);
  //     setage3(age3_old);
  //     setage4(age4_old);
  //     SetchartLebels(oldlabels);

  //     const tempdata = [age1_old, age2_old, age3_old, age4_old];

  //     setdata(tempdata);
  //   }
  // }, [res]);

  return (
    <div
      style={{
        zIndex: -1,
        display: 'inline-block',
        padding: '0.5rem',
        borderStyle: 'none',
        margin: '1rem',
        borderRadius: '12px',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
      }}
    >
      <Chart options={options} series={data} type="donut" />
    </div>
  );
}

export default AgeGroups;
