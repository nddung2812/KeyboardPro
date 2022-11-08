import { useState } from 'react';
import styled from 'styled-components';

import { FifthRow } from './Components/FifthLine';
import { FirstRow } from './Components/FirstLine';
import { ForthRow } from './Components/ForthLine';
import { SecondRow } from './Components/SecondLine';
import { ThirdRow } from './Components/ThirdLine';

function App() {
  const initColor = "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
  const deepPurple = "linear-gradient(90deg, rgba(79,58,85,1) 0%, rgba(33,10,50,1) 44%, rgba(136,25,189,1) 100%)";
  const greenApline = "linear-gradient(90deg, rgba(68,110,71,1) 0%, rgba(10,50,30,1) 44%, rgba(8,120,22,1) 100%)";
  const midNight = "linear-gradient(90deg, rgba(115,115,115,1) 0%, rgba(13,15,13,1) 44%, rgba(12,26,28,1) 100%);";
  const keyboard = "Keyboard"

  const [color, setColor] = useState(initColor);
  console.log(color)


  return (
    <Page>
      <h1>Welcome to Keyboard Pro</h1>
      <Keyboard>
        <Title>MAC {keyboard}</Title>
        <Select value={color} onChange={e => setColor(e?.target.value)}>
          <option value="">-- Select color -- </option>
          <option value={deepPurple}>Deep Purple</option>
          <option value={greenApline}>Green Alpine</option>
          <option value={midNight}>Midnight Black</option>
        </Select>
        <Layout>
          <TouchBar color={color}></TouchBar>
          <FirstRow />
          <SecondRow></SecondRow>
          <ThirdRow></ThirdRow>
          <ForthRow></ForthRow>
          <FifthRow></FifthRow>
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
  color: white;
  font-size: 1.2rem;
`;

const Keyboard = styled.div`
  width: 60%;
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
  padding: 8px 8px 2px 8px;
  border-radius: 12px;
  background: #636060;
`;

const TouchBar = styled.div`
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  height: 12%;
  background: ${(props) => props.color};
  border-radius: 12px;
  margin: 0 0 8px 0;
`;

const Select = styled.select`
  padding: 10px;
  background:#636060;
  border:none;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const SpanRandomColor = styled.span`
  color: ${(props) => props.aColor};
`;

