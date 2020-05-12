import React from 'react';
import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import '../SCSS/CreateVinyl.scss';

const CREATE_VINYL = gql`
mutation createVinyl ($songName: String!, $albumName: String!, $artist: String!){
  createVinyl (songName: $songName, albumName: $albumName, artist: $artist){
    id
    songName
    albumName
    artist
  }
}
`;

export function CreateVinyl() {

  let inputSongName, inputAlbumName, inputArtist;
  const [createVinyl, { data }  ] = useMutation(CREATE_VINYL);

  return (
    <div className="myform">
      <form
        onSubmit={e => {
          e.preventDefault();
          createVinyl({ variables: {
              songName: inputSongName.value,
              albumName: inputAlbumName.value, 
              artist: inputArtist.value
          } });
          inputSongName.value = '';
          inputAlbumName.value = '';
          inputArtist.value = '';
          window.location.reload();
        }}
       
      >
        <label>Song Name: </label>
        <input
          ref={node => {
            inputSongName = node;
          }}
          
        />

        <label>Album Name: </label>
        <input
          ref={node => {
            inputAlbumName = node;
          }}
        
        />

<label>Artist: </label>
        <input
          ref={node => {
            inputArtist = node;
          }}
         
        />
        <button type="submit" style={{ cursor: 'pointer' }}>Add Vinyl</button>
      </form>
    </div>
  );

}
