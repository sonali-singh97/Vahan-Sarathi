import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import './../../../assets/scss/components/charts.scss'
import { useAuth0 } from '@auth0/auth0-react';

function HumidityBarChart() {
  const [chartLabels, SetchartLebels] = useState([]);
  const [humidityvalues, sethumidityvalues] = useState([]);
  

  
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
      colors: '#aa00ff',
    },
    dataLabels: {
      enabled: true,
    },
    title: {
      text: 'Humidity (g/m3) (Weekly Data)',
      align: 'center',
      style: {
        color: 'grey',
      },
    },
  });

  const [chartdata, setchartdata] = useState([
    { name: 'Humidity', data: humidityvalues },
  ]);

  useEffect(() => {
    axios
      .get('http://pravega-test.centralindia.cloudapp.azure.com:10080/data')
      .then((res) => {
        const data = res.data.message;
        var labels = [];
        var values = [];
        data.map((item) => {
          labels.push(item.Date);
          values.push(item.Humidity);
        }); 
        SetchartLebels(labels);
        sethumidityvalues(values);
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

export default HumidityBarChart;
