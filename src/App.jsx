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
          <Fifth></Fifth>
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
  height: 80%;
  width: 100%;
  border: 1px #636060 solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  border-radius: 12px;
  background: #636060;

`;

const TouchBar = styled.div`
  background: red;
  height: 12%;
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  border-radius: 12px;
  margin: 0 0 8px 0;
`;

const First = styled.div`
  height: 16.75%;
  background: black;
  margin: 0 0 6px 0;
  border-radius: 12px;
`;
const Second = styled.div`
  height: 16.75%;
  background: black;
  border-radius: 12px;
  margin: 0 0 6px 0;
`;
const Third = styled.div`
  height: 16.75%;
  background: black;
  border-radius: 12px;
  margin: 0 0 6px 0;
`;
const Forth = styled.div`
  height: 16.75%;
  background: black;
  border-radius: 12px;
  margin: 0 0 6px 0;
`;
const Fifth = styled.div`
  height: 16.75%;
  background: black;
  border-radius: 12px;
`;
