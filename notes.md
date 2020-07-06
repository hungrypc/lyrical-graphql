# Notes

## Apollo Client setup
Apollo draws heavily on Redux concepts. So with the client, it makes a couple of assumptions about how the backend is set up. By default, the client looks for the graphql server end point at `/graphql`. Deviations require a little more configuration, but the assumptions tend to line up pretty well with other parts. 

The ApolloProvider is the glue layer between react and the graphql world. It's a react component, with client passed as a prop. What we have here is basically the minimum requirement for set up:
```js
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'


const client = new ApolloClient({})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Lyrical</div>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
```

