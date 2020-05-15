import React from 'react'
import '../SCSS/MainContents.scss';
import hitIt from '../Assets/hitIt.png';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Vinyl from './Vinyl';
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


const Vinyls = () => (
  <Query query={gql`
      {     
          vinyls {
              id
              songName
              albumName
              artist
              }
          
      }
  `}
  >
      {({loading, error, data}) => {
          if (loading) return <p>Loading ...</p>;
          if (error) return <p>Error :(</p>;
          
            return (
              <div className="grid-container">
                {data.vinyls.map(v => <Vinyl data={v} songName={v.songName} artist={v.artist} albumName={v.albumName} photo={v}/>)}
              </div>
            )
      }}
  </Query>
);



class MainContents extends React.Component {
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
    <div className="box">
      <div className="background-second-color"></div>
      <div className="left-section">
        <div className="items">
          <div className="bold-text">AMP UP THOSE DBS</div>
          <div className="smaller-text">MAKE MUSIC ON THE GO.</div>
          <div className="hit-it">
            <div className="img"><img src={hitIt} alt="Hit It" /></div>
          </div>
        </div>
        
      </div>

      <div className="right-section">
        <div class="grid-item">
          <div>
          
          <Vinyls/>
          </div>       
        </div>
      </div>
    </div>
  )
}
}


export default MainContents;
