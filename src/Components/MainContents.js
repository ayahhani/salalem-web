import React from 'react'
import '../SCSS/MainContents.scss';
import hitIt from '../Assets/hitIt.png';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Vinyl from './Vinyl';

const CREATE_USER = gql`
mutation createUser ($name: String!, $lastName: String!){
  createUser (name: $name, lastName: $lastName){
    id
    name
    lastName
  }
}
`;

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
      {({loading, error, data, q}) => {
          if (loading) return <p>Loading ...</p>;
          if (error) return <p>Error :(</p>;
          
            return (
              <div className="grid-container">
              {data.vinyls.map(v => <Vinyl data={v} songName={v.songName} artist={v.artist} albumName={v.albumName}/>)}
              </div>
            )
      }}
  </Query>
);



class MainContents extends React.Component {
  constructor() {
      super();
      this.state = {}
      }

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
