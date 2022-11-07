import styled from "styled-components";
import { device } from "./device";

export const ForthRow = () => {

  return (
    <Row>
      <Key4>
        <span className="shiftLeft">shift</span>
      </Key4>
      <Key>
        <span>Z</span>
      </Key>
      <Key>
        <span>X</span>
      </Key>
      <Key>
        <span>C</span>
      </Key>
      <Key>
        <span>V</span>
      </Key>

      <Key>
        <span>B</span>
      </Key>
      <Key>
        <span>N</span>
      </Key>
      <Key>
        <span>M</span>
      </Key>
      <Key>
        <SpanTop>{"<"}</SpanTop>
        <SpanBottom>,</SpanBottom>
      </Key>
      <Key>
        <SpanTop>{">"}</SpanTop>
        <SpanBottom>.</SpanBottom>
      </Key>
      <Key>
        <SpanTop>?</SpanTop>
        <SpanBottom>/</SpanBottom>
      </Key>

      <Key4>
        <span className="shiftRight">shift</span>
      </Key4>

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
