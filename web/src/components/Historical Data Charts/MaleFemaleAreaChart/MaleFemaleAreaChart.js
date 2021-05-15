import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import './../../../assets/scss/components/charts.scss';
import { useAuth0 } from '@auth0/auth0-react';

function MaleFemaleAreaChart() {
  const [chartLabels, SetchartLebels] = useState([]);
  const [male, setmale] = useState([]);
  const [female, setfemale] = useState([]);

    const { isAuthenticated, isLoading } = useAuth0();

  const [options, setoptions] = useState({
    chart: {
      id: 'basic-bar',
    },

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
      text: 'Male & Female (Week)',
      align: 'center',
      style: {
        color: 'grey',
      },
    },
  });

  const [chartdata, setchartdata] = useState([
    {
      name: 'Male',
      data: male,
    },
    {
      name: 'Female',
      data: female,
    },
  ]);

  useEffect(() => {
    axios
      .get('http://pravega-test.centralindia.cloudapp.azure.com:10080/data')
      .then((res) => {
        const data = res.data.message;
        var labels = [];
        var male_ = [];
        var female_ = [];
        data.map((item) => {
          labels.push(item.Date);
          male_.push(item.MALE);
          female_.push(item.FEMALE);
        });
        SetchartLebels(labels);
        setmale(male_);
        setfemale(female_);
        setoptions({
          ...options,
          xaxis: {
            ...options.xaxis,
            categories: labels,
          },
        });
        setchartdata([
          { ...chartdata, data: male_ },
          { ...chartdata, data: female_ },
        ]);
      });
  }, []);

  return (
    <div
      className={isAuthenticated ? 'chart_container_male_female' : 'chart_conatiner_male_female_alter'}
    >
      <Chart options={options} series={chartdata} type="area" />
    </div>
  );
}

export default MaleFemaleAreaChart;
