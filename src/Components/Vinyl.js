import '../SCSS/MainContents.scss';
import React from 'react';

// const Vinyl = (props) => (
//     <div className="card">
//         <div className="card-body">
//             <h5 className="card-title">{props.vinyls.albumName}</h5>
//             <h6 className="card-subtitle mb-2 text-muted">{props.vinyls.artist}</h6>
//             <p className="card-text">{props.vinyls.songName}</p>
//         </div>
//     </div>
// );

// export default Vinyl;

class Vinyl extends React.Component {

  
    render() {
      return (
        <div className="grid-item">
          <div className="grid-info">
          <div>{this.props.artist}</div>
          <div>{this.props.songName}</div>
          <div>{this.props.albumName}</div>
          </div>
          
          </div>  
      );
    }
  }
  
  
  
  export default Vinyl;
  