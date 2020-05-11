import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
// import Vinyl from './Vinyl';

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
                <div>
                  {data.vinyls.map(item => (
                    <p key={item.id}>
                      
                        {item.songName}
                      
                    </p>
                  ))}
                </div>
              )
        }}
    </Query>
);

export default Vinyls;