import '../SCSS/MainContents.scss';
import React from 'react';
import deletesign from '../Assets/deletesign.png';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import wkd from '../Assets/wkd.jpg';
import blnd from '../Assets/blnd.jpg';
import wtt from '../Assets/wtt.jpg';
import freud from '../Assets/freud.jpg';
import sc from '../Assets/sc.jpg';
import ph from '../Assets/ph.jpg';
import it from '../Assets/it.jpg';
import taro from '../Assets/taro.jpg';
import angl from '../Assets/angl.jpg';
import bbb from '../Assets/bbb.jpg';
import feng from '../Assets/feng.jpg';

const AlbumCover = [
  wkd,blnd,wtt,freud,sc,ph,it,taro,angl,bbb,feng
];

const DELETE_VINYL = gql`
mutation deleteVinyl ($id: ID!){
  deleteVinyl (id: $id){
    id
  }
}
`;


class Vinyl extends React.Component {
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


  
    render() {
      return (
        <div className="grid-item">
          <div className="grid-info">
          {/* <img src={this.props.photo}/> */}
          <div>{this.props.artist}</div>
          <div className="songname">{this.props.songName}</div>
          <div>{this.props.albumName}</div>
          <div className="dlt"  onClick={this.toggleContact}><img src={deletesign} alt="delete" /></div>
          </div>
                      {this.state.open &&
   <div className="thismodal">
     <div className="contents">
     <div className="confirmation-text">Are you sure you want to delete this vinyl?</div>
     <div className="confirmation-btns">
       <div className="option">
         <span>Yes</span>
         {/* <Mutation mutation={DELETE_VINYL}>
          {mutation => 
            <div onClick={() => mutation({ variables: {id:vinyl.id}})}><span>Yes</span></div>
          }
          </Mutation> */}
         </div>
       <div className="option"><span onClick={this.close}>No</span></div>
       </div>
     </div>
   <div className="modalshade" onClick={this.close}></div>
</div>
}
          </div>  
      );
    }
  }
  
  
  
  export default Vinyl;
  