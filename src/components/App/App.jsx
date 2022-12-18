import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';

export class App extends Component {
  render() {
    return (
      <Layout>
        <GlobalStyle />
        <Searchbar />
      </Layout>
    );
  }
}
