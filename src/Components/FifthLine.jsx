import styled from "styled-components";
import { device } from "./device";

export const FifthRow = () => {

  return (
    <Row>
      <Key>
        <span>fn</span>
      </Key>
      <Key>
        <SpanTop>⌥</SpanTop>
        <SpanBottom>control</SpanBottom>
      </Key>
      <Key>
        <SpanTop>⌥</SpanTop>
        <SpanBottom>option</SpanBottom>
      </Key>
      <CommandKey>
        <SpanTop>⌘</SpanTop>
        <SpanBottom>command</SpanBottom>
      </CommandKey>

      <SpaceKey>
        <span>Space</span>
      </SpaceKey>
      <CommandKey>
        <SpanTop>⌘</SpanTop>
        <SpanBottom>command</SpanBottom>
      </CommandKey>
      <Key>
        <SpanTop>⌥</SpanTop>
        <SpanBottom>option</SpanBottom>
      </Key>
      <Key>
        <span>left</span>
      </Key>
      <Key>
        <SpanTop>top</SpanTop>
        <SpanBottom>down</SpanBottom>
      </Key>
      <Key>
        <span>right</span>
      </Key>

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

const CommandKey = styled.div`
  width: 8.5%;
  height: 100%;
  background: black;
  border-radius: 6px;
  margin: 0 0px 0 0;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
`;

const SpaceKey = styled.div`
  width: 33.7%;
  height: 100%;
  background: black;
  border-radius: 6px;
  margin: 0 0px 0 0;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
`;

const Key4 = styled.div`
  width: 15.3%;
  height: 100%;
  background: black;
  border-radius: 6px;
  font-size: 1.5rem;
  display: flex; 
  align-items: end;
  justify-content: flex-start;
  .shiftLeft {
    padding: 10px;
  }
  .shiftRight {
    padding: 10px;
    margin-left: 50%;
    @media ${device.desktop} {
      // background: blue;
    }
    @media ${device.tablet} {
      // background: red;
    }
    @media ${device.laptopL} {
      margin-left: 64%;
    }
  }
`;

const SpanTop = styled.span`
  padding-top: 10px;
`;

const SpanBottom = styled.span`
  padding-bottom: 10px;
`;
