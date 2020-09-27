import React from 'react';
import './map.css';
import banner2 from '../assets/image2.png';



function Map() {
    return (
   <div>

<div className="contaner mapimg">
    <div className="row">
      <div className="col-md-12">
        <img className="responsive" src={banner2} alt="" />
      </div>
    </div>
  </div>
  <div className="container map">
    <div className="row">
      <div className ="col-md-5"></div>
      <div className ="col-md-2">
        <button type="button" className="btn btn-info">VIEW MAP </button>
      </div>
      <div className="col-md-5"></div>

    </div>
  </div>

</div>
     )
    }
    
    export default Map;
