import React from 'react';
import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import '../SCSS/CreateVinyl.scss';

const DELETE_VINYL = gql`
mutation deleteVinyl ($id: Int!){
  deleteVinyl (id: $id){
    id
  }
}
`;

export function DeleteVinyl() {

//   let inputSongName, inputAlbumName, inputArtist;
  const [deleteVinyl, { data }  ] = useMutation(DELETE_VINYL);
}
