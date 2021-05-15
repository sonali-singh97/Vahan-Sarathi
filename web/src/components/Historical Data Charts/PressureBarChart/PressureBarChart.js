import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import './../../../assets/scss/components/charts.scss';

function PressureBarChart() {
  const [chartLabels, SetchartLebels] = useState([]);
  const [pressurevalues, setpressurevalues] = useState([]);

    const { isAuthenticated, isLoading } = useAuth0();

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
      colors: '#E91E63',
    },
    dataLabels: {
      enabled: true,
    },
    title: {
      text: 'Pressure (atm) (Weekly Data)',
      align: 'center',
      style: {
        color: 'grey',
      },
    },
  });

  const [chartdata, setchartdata] = useState([
    { name: 'Pressure', data: pressurevalues },
  ]);

  /* AGE GRP 1: 20
AGE GRP 2: 30
AGE GRP 3: 40
AGE GRP 4: 10
Bus Id: 1
COUNT: 100
Date: "2021-05-08"
FEMALE: 30
Humidity: 45
MALE: 70
MASK COUNT: 80
NO MASK: 20
Pressure: 1000
Route: 1
Temperature: 28.33
Time: "18:30:05"
Velocity: 45.3
id: "011_2021-05-08_18:30:05"
*/

  useEffect(() => {
    axios
      .get('http://pravega-test.centralindia.cloudapp.azure.com:10080/data')
      .then((res) => {
        const data = res.data.message;
        var labels = [];
        var values = [];
        data.map((item) => {
          labels.push(item.Date);
          values.push(item.Pressure);
        });
        SetchartLebels(labels.sort());
        setpressurevalues(values);
        setoptions({
          ...options,
          xaxis: {
            ...options.xaxis,
            categories: labels,
          },
        });
        setchartdata([{ ...chartdata, data: values }]);
      });
  }, []);


  return (
    <div
      className={isAuthenticated ? 'chart_container' : 'chart_conatiner_alter'}
    >
      <Chart options={options} series={chartdata} type="bar" />
    </div>
  );
}

export default PressureBarChart;
