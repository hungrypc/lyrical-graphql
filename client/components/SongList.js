import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

import fetchSongs from '../queries/fetchSongs'

function SongList(props) {

  const onSongDelete = (id) => {
    props.mutate({
      variables: {
        id
      },
      // refetchQueries: [{ query: fetchSongs }]
    })
    // alternate method refecthing
    .then(() => this.props.data.refetch())  
    // we use this method because fetchSongs is associated with SongList
  }

  const renderSongs = () => {
    return props.data.songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`songs/${id}`}>
            {title}
          </Link>
          <i 
            className="material-icons right"
            onClick={() => onSongDelete(id)}
          >
              delete
            </i>
        </li>
      )
    })
  }
  
  if (props.data.loading) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <ul className="collection">
          {renderSongs()}
        </ul>
        <Link to ="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`
export default graphql(mutation)(
  graphql(fetchSongs)(SongList)
)
