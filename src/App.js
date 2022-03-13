import React from 'react'

//Styles
import {GlobalStyle} from './GlobalStyle'

//Components
import Title from './components/Title'
import Container from './components/Container'
import Form from './components/Form'
import  Filter from './components/Filter'
import List from './components/List'


function App() {

  return (
    <>
      <Title />
      <Container>
        <Form/>
        <Filter />
        <List />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
