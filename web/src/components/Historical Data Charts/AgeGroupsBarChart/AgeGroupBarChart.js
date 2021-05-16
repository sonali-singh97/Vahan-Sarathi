import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import './../../../assets/scss/components/charts.scss';
import { useAuth0 } from '@auth0/auth0-react';

function AgeGroupBarChart(props) {
  const [chartLabels, SetchartLebels] = useState([]);
  const [age1, setage1] = useState([]);
  const [age2, setage2] = useState([]);
  const [age3, setage3] = useState([]);
  const [age4, setage4] = useState([]);

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
      enabled: true,
    },
    title: {
      text: 'Age Groups (Weekly Data)',
      align: 'center',
      style: {
        color: 'grey',
      },
    },
  });

  const [chartdata, setchartdata] = useState([
    { name: '0-17', data: age1 },
    { name: '18-30', data: age2 },
    { name: '31-55', data: age3 },
    { name: '>56', data: age4 },
  ]);

  useEffect(() => {
    const data = props.data;
    console.log(data);
    var labels = [];
    var age_grp_1 = [];
    var age_grp_2 = [];
    var age_grp_3 = [];
    var age_grp_4 = [];
    data.map((item) => {
      labels.push(item.Date);
      age_grp_1.push(item['AGE GRP 1']);
      age_grp_2.push(item['AGE GRP 2']);
      age_grp_3.push(item['AGE GRP 3']);
      age_grp_4.push(item['AGE GRP 4']);
    });
    SetchartLebels(labels.sort());
    setage1(age_grp_1);
    setage1(age_grp_2);
    setage1(age_grp_3);
    setage1(age_grp_4);
    setoptions({
      ...options,
      xaxis: {
        ...options.xaxis,
        categories: labels,
      },
    });
    setchartdata([
      { ...chartdata, data: age_grp_1 },
      { ...chartdata, data: age_grp_2 },
      { ...chartdata, data: age_grp_3 },
      { ...chartdata, data: age_grp_4 },
    ]);
  }, [props]);

  return (
    <div
      className={
        isAuthenticated
          ? 'chart_container_male_female'
          : 'chart_conatiner_male_female_alter'
      }
    >
      <Chart options={options} series={chartdata} type="bar" />
    </div>
  );
}

export default AgeGroupBarChart;
