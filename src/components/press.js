import React from 'react';
import './press.css';
import banner6 from '../assets/image6.png';
import banner7 from '../assets/image7.png';
import banner8 from '../assets/image8.png';
import banner9 from '../assets/image9.png';
import banner10 from '../assets/image10.png';
import banner11 from '../assets/image11.png';


function  Press() {
    return(
<div>
<div className="row map4">
      <div className="col-md-4"></div>
      <div className="col-md-7">
        <h1>Bitrix24 in the Press</h1>
      </div>
      <div className="col-md-1"></div>

    </div>
      <div className="container">
    <div className="row map5">
      <div className="col-md-2 png1"><img src={banner6} alt="" /> </div>
      <div className="col-md-2 png2">
        <img src={banner7} alt="" />
      </div>
      <div className="col-md-2 png3">
        <img src={banner8} alt="" />
      </div>
      <div className="col-md-2 png4">
        <img src={banner9} alt="" />
      </div>
      <div className="col-md-2 png5">
        <img src={banner10} alt="" />
        <div className="col-md-2"></div>
      </div>
    </div>

    <div className="row map5">
      <div className="col-md-6">
        <p className="bit1">Bitrix24 on premise</p>
        <p className="bit2">You can use the self-hosted version of Bitrix24 to run on your server. You get full control over
          data,
          source code access, and additional tools, such as helpdesk and e-learning, as well as integration and
          customization options.</p>
        <a type="button" className="btn-info button5"> ALL NEWS</a>
      </div>
      <div className="col-md-6">
        <img className="responsive" src={banner11} alt="" />
      </div>

    </div>

    <div className="row map6">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <h1 className="ready">Ready To Try?</h1>
        <button type="button" className="BTN6">REGISTER FREE</button>
      </div>
      <div className="col-md-4"></div>

    </div>
  </div>
</div>
    )
}
export default Press;