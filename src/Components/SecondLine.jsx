import styled from "styled-components";


export const SecondRow = () => {
  return (
    <Row>
      <Key2>
        <span className="tab">tab</span>
      </Key2>
      <Key>
        <span>Q</span>
      </Key>
      <Key>
        <span>W</span>
      </Key>
      <Key>
        <span>E</span>
      </Key>

      <Key>
        <span>R</span>
      </Key>
      <Key>
        <span>T</span>
      </Key>
      <Key>
        <span>Y</span>
      </Key>

      <Key>
        <span>U</span>
      </Key>
      <Key>
        <span>I</span>
      </Key>
      <Key>
        <span>O</span>
      </Key>

      <Key>
        <span>P</span>
      </Key>
      <Key>
        <SpanTop>{"{"}</SpanTop>
        < SpanBottom > [</SpanBottom>
      </Key>
      <Key>
        <SpanTop>{"}"}</SpanTop>
        <SpanBottom>]</SpanBottom>
      </Key>
      <Key>
        <SpanTop>|</SpanTop>
        <SpanBottom>\</SpanBottom>
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
  :hover {
   background: pink;
   color: black;
   box-shadow: 0px 0px 2px yellow;
   transition: 0.3s;
  }
`;

const Key2 = styled.div`
  width: 10%;
  height: 100%;
  background: black;
  border-radius: 6px;
  display: flex;
  align-items: end;
  justify-content: flex-start;
  .tab {
    padding: 10px;
  }
  :hover {
   background: pink;
   color: black;
   box-shadow: 0px 0px 2px yellow;
   transition: 0.3s;
  }
`;

const SpanTop = styled.span`
  padding-top: 10px;
`;

const SpanBottom = styled.span`
  padding-bottom: 10px;
`;
