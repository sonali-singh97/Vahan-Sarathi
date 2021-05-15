import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import './../../../assets/scss/components/charts.scss';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function MixedCharts() {
  const [chartLabels, SetchartLebels] = useState([]);
  const [total, settotal] = useState([]);
  const [withmask, setmask] = useState([]);
  const [withoutmask, setwithoutmask] = useState([]);

  const { isAuthenticated, isLoading } = useAuth0();

  const [options, setoptions] = useState({
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: 'vertical',
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    xaxis: {
      categories: chartLabels,
    },
    markers: {
      size: 0,
    },

    dataLabels: {
      enabled: false,
    },
    title: {
      text: 'Total vs With Mask vs Without Mask (Weekly)',
      align: 'center',
      style: {
        color: 'grey',
      },
    },
    markers: {
      size: 0,
    },
  });

  const [chartdata, setchartdata] = useState([
    {
      name: 'Total',
      type: 'column',
      data: total,
    },
    {
      name: 'With Mask',
      type: 'area',
      data: withmask,
    },
    {
      name: 'Without Mask',
      type: 'line',
      data: withoutmask,
    },
  ]);

  useEffect(() => {
    axios
      .get('http://pravega-test.centralindia.cloudapp.azure.com:10080/data')
      .then((res) => {
        const data = res.data.message;
        var labels = [];
        var total_ = [];
        var withmask_ = [];
        var withoutmask_ = [];
        data.map((item) => {
          labels.push(item.Date);
          total_.push(item.MALE + item.FEMALE);
          withmask_.push(item['MASK COUNT']);
          withoutmask_.push(item['NO MASK']);
        });
        SetchartLebels(labels);
        setmask(withmask_);
        setwithoutmask(withoutmask_);
        settotal(total_);
        setoptions({
          ...options,
          xaxis: {
            ...options.xaxis,
            categories: labels,
          },
        });
        setchartdata([
          { ...chartdata, data: total_ },
          { ...chartdata, data: withmask_ },
          { ...chartdata, data: withoutmask_ },
        ]);
      });
  }, []);

  return (
    <div
      className={
        isAuthenticated
          ? 'chart_container_mixed'
          : 'chart_container_mixed_alter'
      }
    >
      <Chart options={options} series={chartdata} type="area" height={350} />
    </div>
  );
}

export default MixedCharts;
