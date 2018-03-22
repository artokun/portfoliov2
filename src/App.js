import React, { Component } from 'react';
import styled from 'styled-components';
import Services from './components/services';
import Skills from './components/skills';
import Contact from './components/contact';
import Header from './containers/header';

const App = styled.div``;
const SSBlock = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

class app extends Component {
  render() {
    return (
      <App>
        <Header />
        <SSBlock>
          <Services />
          <Skills />
        </SSBlock>
        <Contact />
      </App>
    );
  }
}

export default app;
