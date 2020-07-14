import React from 'react'
import { graphql } from 'react-apollo'

import fetchSong from '../queries/fetchSong'

function SongDetail(props) {
  return (
    <div>
      <h3>Song Detail</h3>
    </div>
  )
}

export default graphql(fetchSong, {
  options: (props) => {
    return {
      variables: {
        id: props.params.id
      }
    }
  }
})(SongDetail)
