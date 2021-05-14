import React from 'react';
import './../../assets/scss/components/usercount.scss';
import chart_img from './../../assets/icons/pie-chart.svg';

function CountData(props) {
  return (
    <div className="container_">
      <div style={{ width: '40px', height: '40px ',marginLeft : '1rem' }}>
        <img src={props.logo} style={{ width: '100%', height: '100%' }}></img>
      </div>
      <div style={{marginLeft : '1rem' , marginRight :'1rem'}}>
        <h4 className="name">{props.name}</h4>
        <h1 className="percentage">
          {props.percentage}
          <span className="sign">{!props.count ? '%' : null}</span>
        </h1>
      </div>
    </div>
  );
}

export default CountData;
