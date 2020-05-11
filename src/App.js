import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Vinyls from './Components/Vinyls';
import TopRibbon from './Components/TopRibbon';
import MainContents from './Components/MainContents';
import Compose from './Components/Compose';
import Footer from './Components/Footer';
import './App.scss';



const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/',
});


const App = () => (
  <ApolloProvider client={client}>
    <div className="webpage">
      {/* <Vinyls/> */}
      <TopRibbon/>
      <MainContents/>
      <Compose/>
      <Footer/>
    </div>
  </ApolloProvider>

);

export default App;