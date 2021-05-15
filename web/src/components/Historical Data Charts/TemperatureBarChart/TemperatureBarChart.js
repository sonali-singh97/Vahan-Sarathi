import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import './../../../assets/scss/components/charts.scss';
import { useAuth0 } from '@auth0/auth0-react';

function TemperatureBarChart() {
  const [chartLabels, SetchartLebels] = useState([]);
  const [tempvalues, settemperatiurevalues] = useState([]);

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
    dataLabels: {
      enabled: true,
    },
    title: {
      text: 'Temperature (deg C) (Weekly Data)',
      align: 'center',
      style: {
        color: 'grey',
      },
    },
  });

  const [chartdata, setchartdata] = useState([
    { name: 'Temperature', data: tempvalues },
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
          values.push(item.Temperature);
        });
        SetchartLebels(labels.sort());
        settemperatiurevalues(values);
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

export default TemperatureBarChart;
