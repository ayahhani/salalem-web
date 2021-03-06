import React from 'react'
import '../SCSS/Compose.scss';
import {  CreateVinyl } from './CreateVinyl'

class Compose extends React.Component {
  constructor() {
    super();
    this.state = {
      };


     this.toggleContact = this.toggleContact.bind(this);
     this.close = this.close.bind(this);
   }


   toggleContact() {
         this.setState(prevState => ({
           open: !prevState.open
      }))}

      close() {
            this.setState({
              open: !this.state.open
         })}



render(){
  return (
    <div className="compose-box">
        <div className="box-contents">
            <div className="bold-text">GET PRODUCIN WITH MUSICDB</div>
            <div className="small-text">PICK YOUR PREFFERED INSTRUMENT</div>
            <div className="smaller-text">PICK THE INSTRUEMNTS YOU NEED TO COMPOSE YOUR PIECE</div>
            <div className="button-compose" ><span onClick={this.toggleContact}>START COMPOSING</span></div>
            </div>

{this.state.open &&
   <div className="thismodal">
   <CreateVinyl/>
   <div className="modalshade" onClick={this.close}></div>
 
</div>
}


            
        </div>
  
  )
}
}

export default Compose;

