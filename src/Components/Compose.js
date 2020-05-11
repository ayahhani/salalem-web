import React from 'react'
import '../SCSS/Compose.scss';


class Compose extends React.Component {
  constructor() {
      super();
      this.state = {}
      }

render(){
  return (
    <div className="compose-box">
        <div className="box-contents">
            <div className="bold-text">GET PRODUCIN WITH MUSICDB</div>
            <div className="small-text">PICK YOUR PREFFERED INSTRUMENT</div>
            <div className="smaller-text">PICK THE INSTRUEMNTS YOU NEED TO COMPOSE YOUR PIECE</div>
            <div className="button-compose"><span>START COMPOSING</span></div>
        </div>
    </div>
  )
}
}


export default Compose;
