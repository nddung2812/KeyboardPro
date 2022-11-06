import { useState } from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Page>
      <h1>Welcome to keyboard pro</h1>
      <Keyboard>
        <Title>Mac keyboard</Title>
        <Layout>
          <TouchBar></TouchBar>
          <First></First>
          <Second></Second>
          <Third></Third>
          <Forth></Forth>
        </Layout>
      </Keyboard>
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
  `;

const Title = styled.div`
  height: 20%;
  position: relative;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: 800;
`;

const Layout = styled.div`
  position: relative;
  height: 80%;
  width: 100%;
  border: 1px #636060 solid;
  display; flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 12px;
`;

const TouchBar = styled.div`
  background: red;
  height: 16%;
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;

`;

const First = styled.div`
  background: #636060;
  height: 21%;
`;
const Second = styled.div`
  height: 21%;
  background: #636060;  
`;
const Third = styled.div`
  height: 21%;
  background: #636060;
`;
const Forth = styled.div`
  height: 21%;
  background: #636060;
`;
