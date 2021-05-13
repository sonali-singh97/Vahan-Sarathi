import React ,{useState} from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';

defaults.animation = false;
defaults.scale.grid.display = false;
console.log(defaults.scale.title);
defaults.scale.title.display = true;
defaults.font.size = 7

function Age() {
  const [age1, setage1] = useState(12);
  const [age2, setage2] = useState(20);
  const [age3, setage3] = useState(18);
  const [age4, setage4] = useState(5);
  const [data, setdata] = useState({
    labels: ['Age1 - 0-17', 'Age2 - 18-30', 'Age3 - 31-55', 'Age4 - >56'],
    datasets: [
      {
        label: 'Different Age Ratio',
        data: [age1, age2, age3, age4],
        backgroundColor: ['#26001b', '#810034', '#ff005c', '#fff600'],
        hoverOffset: 4,
      },
    ],
  });

  return (
    <div
      style={{
        display : 'inline-block',
        width: '220px',
        height: '240px',
        padding: '0.5rem',
        borderStyle: 'none',
        margin: '1rem',
        borderRadius: '12px',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
      }}
    >
      <Doughnut
        data={data}
        width={30}
        height={30}
        options={{
          maintainAspectRatio: true,
        }}
        redraw={false}
      />
    </div>
  );
}

export default Age;
