import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

function SongList(props) {

  console.log(props)
  
  return (
    <div>
      SongList
    </div>
  )
}


const query = gql`
  {
    songs {
      title
    }
  }
`

export default graphql(query)(SongList)
