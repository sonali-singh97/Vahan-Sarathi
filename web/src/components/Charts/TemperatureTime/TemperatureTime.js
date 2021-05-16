import React, { useState, useEffect, useContext } from 'react';
import { Line, defaults } from 'react-chartjs-2';
import StreamContext from '../../../context/Stream';

defaults.animation = false;
defaults.scale.grid.display = true;
console.log(defaults.scale.title);
defaults.scale.title.display = true;
defaults.font.size = 11;

function TemperatureTime() {
  const [chartLabels, SetchartLebels] = useState([]);
  const [temperatureValues, settemperatureValues] = useState([]);
   let { streamObj, setStreamObj } = useContext(StreamContext);
  const [data, setdata] = useState({
    labels: chartLabels,
    datasets: [
      {
        label: 'Temperature',
        data: temperatureValues,
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#161d6f',
        borderColor: '#161d6f',
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

  useEffect(() => {
    if (streamObj !== undefined) {
      streamObj  = JSON.parse(streamObj );
      var oldvalvalues = temperatureValues;
      var oldlabels = chartLabels;
      if (oldvalvalues.length > 10 && oldlabels.length > 10) {
        oldvalvalues.shift();
        oldvalvalues.shift();
        oldlabels.shift();
        oldlabels.shift();
      }
      oldvalvalues.push(streamObj.tempi);
      oldlabels.push(Date.now());
      settemperatureValues(oldvalvalues);
      SetchartLebels(oldlabels);

      const tempdata = {
        labels: oldlabels,
        datasets: [
          {
            label: 'Temperature',
            data: temperatureValues,
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#161d6f',
            borderColor: '#161d6f',
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
      };

      setdata(tempdata);
    }
  }, [streamObj ]);

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
                text: 'Temperature ( Deg. C)',
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

export default TemperatureTime;
