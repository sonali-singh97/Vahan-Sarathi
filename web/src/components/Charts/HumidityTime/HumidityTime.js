import React, { useState, useEffect } from 'react';
import { Line, defaults } from 'react-chartjs-2';

defaults.animation = false;
console.log(defaults.scale.title);
defaults.scale.title.display = true;
defaults.font.size = 11;

function HumidityTime() {
  const [chartLabels, SetchartLebels] = useState([]);
  const [humidityValues, sethumidityValues] = useState([]);

  // let { res, setRes } = useContext(DataContext);

  const [data, setdata] = useState({
    labels: chartLabels,
    datasets: [
      {
        label: 'Humidity',
        data: humidityValues,
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#7868e6',
        borderColor: '#7868e6',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 0,
        pointHitRadius: 10,
        borderWidth: 4,
      },
    ],
  });

  /*
  {"vtype": 0, "vechn": 1, "routen": 1, "altitude": 261, "lat": 29.9789633, "lon": 76.8923034, "time": "01:17:10", "date": "16/05/2021", "count": 20, "countmask": 8, "nomask": 12, "countmale": 9, "countfemale": 11, "isstop": true, "laststop": 14, "currentstop": 15, "nextstop": null, "tempi": 37.23, "humidi": 50, "pressurei": 998, "velocity": 0, "age1": 7, "age2": 7, "age3": 3, "age4": 3}
  */

  // useEffect(() => {
  //   if (res !== undefined) {
  //     res = JSON.parse(res);
  //     var oldvalvalues = humidityValues;
  //     var oldlabels = chartLabels;
  //     if (oldvalvalues.length > 10 && oldlabels.length > 10) {
  //       oldvalvalues.shift();
  //       oldvalvalues.shift();
  //       oldlabels.shift();
  //       oldlabels.shift();
  //     }
  //     oldvalvalues.push(res.humidi);
  //     oldlabels.push(Date.now());
  //     sethumidityValues(oldvalvalues);
  //     SetchartLebels(oldlabels);

  //     const tempdata = {
  //       labels: oldlabels,
  //       datasets: [
  //         {
  //           label: 'Velocity',
  //           data: oldvalvalues,
  //           fill: false,
  //           lineTension: 0,
  //           backgroundColor: '#f21170',
  //           borderColor: '#f21170',
  //           borderCapStyle: 'butt',
  //           borderDash: [],
  //           borderDashOffset: 0.0,
  //           borderJoinStyle: 'miter',
  //           pointBorderColor: 'rgba(75,192,192,1)',
  //           pointBackgroundColor: '#fff',
  //           pointBorderWidth: 1,
  //           pointHoverRadius: 5,
  //           pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  //           pointHoverBorderColor: 'rgba(220,220,220,1)',
  //           pointHoverBorderWidth: 2,
  //           pointRadius: 0,
  //           pointHitRadius: 10,
  //           borderWidth: 4,
  //         },
  //       ],
  //     };

  //     setdata(tempdata);
  //   }
  // }, [res]);

  return (
    <div
      style={{
        display: 'inline-block',
        width: '33%',
        padding: '0.5rem',
        borderStyle: 'none',
        margin: '1rem',
        borderRadius: '12px',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
      }}
    >
      <Line
        data={data}
        options={{
          maintainAspectRatio: true,
          scales: {
            xAxes: {
              title: {
                display: true,
                text: 'Time',
              },
            },
            yAxes: {
              title: {
                display: true,
                text: 'Humidity (g/m3)',
              },
              ticks: {
                beginAtZero: true,
              },
            },
          },
        }}
        redraw={false}
      />
    </div>
  );
}

export default HumidityTime;
