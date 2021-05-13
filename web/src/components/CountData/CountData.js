import React from 'react';
import './../../assets/scss/components/usercount.scss';

function CountData(props) {
  return (
    <div className="container_">
      <h4 className="name">{props.name}</h4>
      <h1 className="percentage">{props.percentage}<span className="sign">%</span></h1>
    </div>
  );
}

export default CountData;
