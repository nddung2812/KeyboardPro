import { useState, useEffect, useRef } from 'react';
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
  const [theme, setTheme] = useState("#282828");
  const [textColor, setTextColor] = useState();

  const layoutRef = useRef();

  useEffect(() => {
    const CARD = layoutRef.current;
    const UPDATE = ({ x,y }) => {
      const BOUNDS = CARD.getBoundingClientRect();
      const posX = x - BOUNDS.x;
      const posY = y - BOUNDS.y;
      const ratioX = posX / BOUNDS.width;
      const ratioY = posY / BOUNDS.height;
      CARD.style.setProperty('--ratio-x', ratioX)
      CARD.style.setProperty('--ratio-y', ratioY)
    }
    CARD.addEventListener('pointermove', UPDATE)
  },[]);


  const handleChange = (e) => {
    // to find out if it's checked or not; returns true or false
    const checked = e.target.checked;
    console.log(checked);
    checked == false ?
      setTheme("#b5b5b5") : setTheme("#282828");

    checked == false ?
      setTextColor("black") : setTextColor("white");
    // to get the checked value
    const checkedValue = e.target.value;

    // to get the checked name
    const checkedName = e.target.name;
  };


  return (
    <Page theme={theme}>
      <H1 textColor={textColor}>Welcome to Keyboard Pro</H1>
      <Keyboard>
        <Title textColor={textColor}>MAC {keyboard}</Title>
        <Functionality>
          <Select value={color} onChange={e => setColor(e?.target.value)}>
            <option value="">-- Select color --</option>
            <option value={deepPurple}>Deep Purple</option>
            <option value={greenApline}>Alpine Green</option>
            <option value={midNight}>Midnight Black</option>
          </Select>
          <Switch>
            <input type="checkbox" onChange={handleChange}/>
            <span className="slider round"></span>
          </Switch>
          <Ptheme textColor={textColor}>Dark Theme</Ptheme>
        </Functionality>
        <Layout ref={layoutRef}>
          <TouchBar color={color}></TouchBar>
          <FirstRow />
          <SecondRow />
          <ThirdRow />
          <ForthRow />
          <FifthRow />
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
  background: ${(props) => props.theme};
  font-size: 1.2rem;
`;

const Keyboard = styled.div`
  width: 60%;
  height: 50%;
`;

const H1 = styled.h1`
  color: ${(props) => props.textColor};
`;

const Title = styled.div`
  height: 10%;
  position: relative;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: 800;
  color: ${(props) => props.textColor};
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
  :hover {
    transform:
      rotateX(calc((var(--ratio-y) - 0.3) * 30deg))
      rotateY(calc((var(--ratio-x) - 0.6) * 40deg));
  }
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
  border-radius: 8px;
`;

const Functionality = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2%;
`;


const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 0 8px 0 40px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #2196F3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

`;

const Ptheme = styled.p`
  color: ${(props) => props.textColor};
`;




