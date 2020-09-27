import React from 'react';
import  './footer.css';
import {fontawesomeIcon} from "@fortawesome/react-fontawesome"
import {fauser} from "@fortawesome/free-solid-svg-icons"

function Footer(){
    return(
        <div>
         <div className="container-fluid foter">
    <div className="row footer">
      <div className="col-md-2">
        <p className="ftl">BITRIX</p>

        <a className="abc" href="https://www.bitrix24.com/tools/"> Bitrix24</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Pricing</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Media-kit</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Contact us</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> In the press</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Bitrix24 Release </a>
      </div>

      <div className="col-md-2">
        <p className="ftl">SUPPORT</p>

        <a className="abc" href="https://www.bitrix24.com/tools/"> Bitrix24</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Pricing</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Media-kit</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Contact us</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> In the press</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Bitrix24 Release </a>
      </div>

      <div className="col-md-2">
        <p className="ftl">RESOURCES</p>

        <a className="abc" href="https://www.bitrix24.com/tools/"> Bitrix24</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Pricing</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Media-kit</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Contact us</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> In the press</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Bitrix24 Release </a>

      </div>
      <div className="col-md-2">
        <p className="ftl">ON-PREMISE</p>

        <a className="abc" href="https://www.bitrix24.com/tools/"> Bitrix24</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Pricing</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Media-kit</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Contact us</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> In the press</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Bitrix24 Release </a>
      </div>
      <div className="col-md-2">
        <p className="ftl">APPS</p>

        <a className="abc" href="https://www.bitrix24.com/tools/"> Bitrix24</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Pricing</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Media-kit</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Contact us</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> In the press</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Bitrix24 Release </a>
      </div>
      <div className="col-md-2">
        <p className="ftl">PATNERS</p>

        <a className="abc" href="https://www.bitrix24.com/tools/"> Bitrix24</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Pricing</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Media-kit</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Contact us</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> In the press</a><br />
        <a className="abc" href="https://www.bitrix24.com/tools/"> Bitrix24 Release</a>
      </div>
    </div>
    <hr style={{width:"100%", fontSize: "20px",marginTop:"40px"}} />
    <div c="row end">
      <div className="col-md-6">
        <small className="terms">TERMS</small>
        <small className="terms">PRIVACY</small>
        <small className="terms">GDPR</small>
        <small className="terms">SECURITY</small>
        <small className="terms">PRIVACY</small>
        <small className="terms">ABUSE</small>
        <small className="terms">RULES FOR BITRIX24.SITES</small><br /><br />
        <small className="terms">Copyright © 2020 Bitrix24</small>


      </div>
      <div className="col -md-6 icons">
        <a href="https://www.facebook.com/bitrix24"></a>
        <a href="https://twitter.com/bitrix24"> <i> <fontawesomeIcon icon="user" /></i></a>
        <a href="https://www.youtube.com/user/Bitrix24"> <i className="fab fa-youtube gliphicon youtube"
            aria-hidden="true"></i></a>
        <a href="https://www.instagram.com/bitrix24/"> <i className="fab fa-instagram instagram" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/company/8812020/"> <i className="fab fa-linkedin-in in"
            aria-hidden="true"></i></a>
        <a href="https://itunes.apple.com/app/bitrix24/id561683423"><img className="playstore"
            src="https://statics.olx.com.pk/external/base/img/appstore.png" alt="Download OLX in the Android Play Store"
            className="_3-lxv" /></a>
        <a href="https://play.google.com/store/apps/details?id=com.bitrix24.android"><img className="playstore"
            src="https://statics.olx.com.pk/external/base/img/playstore.png"
            alt="Download OLX for iOS in the Apple App Store" className="_3-lxv" /></a>
            <input className="glyphicon glyphicon-search inputs" type="text" placeholder="search" />
      </div>
    </div>
  </div>





        </div>
    )
}
export default Footer;