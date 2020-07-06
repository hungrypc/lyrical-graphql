import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

function SongList(props) {

  console.log(props)

  const renderSongs = () => {
    return props.data.songs.map(song => {
      return (
        <li key={song.id}>
          {song.title}
        </li>
      )
    })
  }
  
  if (props.data.loading) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        {renderSongs()}
      </div>
    )
  }

}


const query = gql`
  {
    songs {
      id
      title
    }
  }
`

export default graphql(query)(SongList)
