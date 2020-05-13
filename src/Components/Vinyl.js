import '../SCSS/MainContents.scss';
import React from 'react';
import deletesign from '../Assets/deletesign.png';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const DELETE_VINYL = gql`
mutation deleteVinyl ($id: ID!){
  deleteVinyl (id: $id){
    id
  }
}
`;


class Vinyl extends React.Component {

  
    render() {
      return (
        <div className="grid-item">
          <div className="grid-info">
          <div>{this.props.artist}</div>
          <div className="songname">{this.props.songName}</div>
          <div>{this.props.albumName}</div>
          <div className="dlt"><img src={deletesign} alt="delete" /></div>
          {/* <Mutation mutation={DELETE_VINYL}>
          {mutation => 
            <div onClick={() => mutation({ variables: {id:vinyl.id}})}>DELETE</div>
          }
          </Mutation> */}
          </div>

          </div>  
      );
    }
  }
  
  
  
  export default Vinyl;
  