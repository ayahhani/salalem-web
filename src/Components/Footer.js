import React from 'react'
import '../SCSS/Footer.scss';
import whiteLogo from '../Assets/whiteLogo.png';
import cr from '../Assets/cr.svg';

class Footer extends React.Component {
  constructor() {
      super();
      this.state = {}
      }


render(){
  return (
    <div className="footer">
        <div className="navlist-area">
            <div className="logo"><img src={whiteLogo} alt="Logo" /></div>
            <div className="navlist">
                <div className="nav-item">PROFILE</div>
                <div className="nav-item">SIGN IN</div>
                <div className="nav-item">MUSIC</div>
            </div>
        </div>

        <div className="copyright">
            <div className="links">
                <div className="link-item"><span>LEGAL</span></div>
                <div className="link-item"><span>PRIVACY CENTER</span></div>
                <div className="link-item"><span>PRIVACY POLICY</span></div>
                <div className="link-item"><span>COOKIES</span></div>
                <div className="link-item"><span>ABOUT ADS</span></div>
            </div>
            <div className="copyright-year">
                <div className="img"><img src={cr} alt=""/></div>
                <div className="year">2019</div>
                <div className="name">MUSICDB</div>
            </div>
        </div>
    </div>
  )
}
}


export default Footer;
