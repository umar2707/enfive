import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import logo from '../../../images/logo.jpg'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ENFIVE.</h1>
        <img style={{width:"70px"}} src={logo} />

        <p>Copyrights 2021 &copy; enfive</p>
      </div>

      <div className="rightFooter">
        <h4>A'zo bo'ling</h4>
        <a href="https://instagram.com/en5_caps">Instagram</a>
        <a href="https://t.me/en5_caps">Telegram</a>
        <a href="#">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
