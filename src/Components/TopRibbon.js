import React from 'react'
import '../SCSS/TopRibbon.scss';
import colorLogo from '../Assets/colorLogo.png';
import profileIcon from '../Assets/profileIcon.png';


class TopRibbon extends React.Component {
  constructor() {
      super();
      this.state = {}
      }

render(){
  return (
    <div className="top-ribbon">
        <div className="logo">
            <div className="logo-img"><img src={colorLogo} alt="Logo" /></div>
        </div>

        <div className="profile">
            <div className="user">PROFILE</div>
            <div className="profile-icon"><img src={profileIcon} alt="profile" /></div>
        </div>
    </div>
  )
}
}


export default TopRibbon;
