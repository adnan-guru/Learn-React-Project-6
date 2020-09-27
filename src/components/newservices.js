import React from 'react';
import './newservices.css';
import banner3 from '../assets/image3.jpg';
import banner4 from '../assets/image4.jpg';
import banner5 from '../assets/image5.jpg';

function Newservices(){
    return(

<div>

<div className="container">
    
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4 new">
        <h1>What's new?</h1>
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>
  


  <div className="container map3">
    
    <div className="row">
    <div className="col-md-2"></div>
      <div className="col-md-3">
        <img src={banner3} className="img-circle" alt="Cinque Terre" width="150" height="150" />
        <a className="images" href="https://www.bitrix24.com/about/blogs/communications/knowledge-base-update.php">
          <h5>Knowledge Base update</h5>
        </a>
        <small>AUGUST 28, 2020</small><br />
        <a className="more" href="#">More</a>
      </div>
      <div className="col-md-3">
        <img src={banner4} className="img-circle" alt="Cinque Terre" width="150" height="150" />
        <a className="images" href="https://www.bitrix24.com/about/blogs/websites/site-boost-in-bitrix24-sites.php">
          <h5>Site Boost in Bitrix24.Sites</h5>
        </a>
        <small>AUGUST 28, 2020</small><br />
        <a className="more" href="#">More</a>
      </div>
      <div className="col-md-3">
        <img src={banner5} className="img-circle" alt="Cinque Terre" width="150" height="150" />
        <a className="images" href="https://www.bitrix24.com/about/blogs/applications/b24-mobile-app-update.php">
          <h5>Bitrix24 Mobile App Update </h5>
        </a>
        <small>AUGUST 28, 2020</small><br />
        <a className="more" href="#">More</a>
      </div>
      <div className="col-md-1"></div>
    </div>
    <div class="row">
      <div class="col-md-5"></div>
      <div class="col-md-2">
        <a type="button" class="btn button4"> ALL NEWS</a>
      </div>
      <div class="col-md-5"></div>
    </div>
  </div>



</div>



    ) 
}
export default Newservices;