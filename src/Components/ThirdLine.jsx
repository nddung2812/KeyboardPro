import styled from "styled-components";
import { device } from "./device";

export const ThirdRow = () => {

  return (
    <Row>
      <Key3>
        <span className="capsLock">caps lock</span>
      </Key3>
      <Key>
        <span>A</span>
      </Key>
      <Key>
        <span>S</span>
      </Key>
      <Key>
        <span>D</span>
      </Key>
      <Key>
        <span>F</span>
      </Key>

      <Key>
        <span>G</span>
      </Key>
      <Key>
        <span>H</span>
      </Key>
      <Key>
        <span>J</span>
      </Key>
      <Key>
        <span>K</span>
      </Key>
      <Key>
        <span>L</span>
      </Key>
      <Key>
        <SpanTop>:</SpanTop>
        <SpanBottom>;</SpanBottom>
      </Key>
      <Key>
        <SpanTop>"</SpanTop>
        <SpanBottom>'</SpanBottom>
      </Key>

      <Key3>
        <span className="return">return</span>
      </Key3>

    </Row>
  )
}

const Row = styled.div`
  height: 16.75%;
  margin: 0 0 6px 0;
  display: flex;
  justify-content: space-between;
`;

const Key = styled.div`
  width: 6.3%;
  height: 100%;
  background: black;
  border-radius: 6px;
  margin: 0 0px 0 0;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
`;

const Key3 = styled.div`
  width: 12%;
  height: 100%;
  background: black;
  border-radius: 6px;
  font-size: 1.5rem;
  display: flex; 
  align-items: end;
  justify-content: flex-start;
  .capsLock {
    padding: 10px;
  }
  .return {
    padding: 10px;
    margin-left: 50%;
    @media ${device.desktop} {
      // background: blue;
    }
    @media ${device.tablet} {
      // background: red;
    }
    @media ${device.laptopL} {
      margin-left: 54%;
    }
  }
`;

const SpanTop = styled.span`
  padding-top: 10px;
`;

const SpanBottom = styled.span`
  padding-bottom: 10px;
`;
