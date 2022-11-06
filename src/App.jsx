import { useState } from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Page>
      <h1>Hi, welcome to keyboard pro</h1>
      <Keyboard></Keyboard>
    </Page>
  )
}

export default App;

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

const Keyboard = styled.div`
  width: 50%;
  height: 50%;
  border: 1px solid red;
  
`;