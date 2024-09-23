import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import GetProducts from "./components/GetProducts";
import TestJSON from "./components/TestJSON";

const client = new ApolloClient({
  uri: "http://localhost:5005/graphql", // Replace with your actual GraphQL endpoint
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <GetProducts />
  </ApolloProvider>
);

export default App;
/*
const App = () => (
  <ApolloProvider client={client}>
    <GetProducts />
  </ApolloProvider>
);

*/
