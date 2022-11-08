import styled from "styled-components";


export const FirstRow = () => {
  return (
    <Row>
      <Key>
        <SpanTop>~</SpanTop>
        <SpanBottom>`</SpanBottom>
      </Key>
      <Key>
        <SpanTop>!</SpanTop>
        <SpanBottom>1</SpanBottom>
      </Key>
      <Key>
        <SpanTop>@</SpanTop>
        <SpanBottom>2</SpanBottom>
      </Key>

      <Key>
        <SpanTop>#</SpanTop>
        <SpanBottom>3</SpanBottom>
      </Key>
      <Key>
        <SpanTop>$</SpanTop>
        <SpanBottom>4</SpanBottom>
      </Key>
      <Key>
        <SpanTop>%</SpanTop>
        <SpanBottom>5</SpanBottom>
      </Key>

      <Key>
        <SpanTop>^</SpanTop>
        <SpanBottom>6</SpanBottom>
      </Key>
      <Key>
        <SpanTop>&</SpanTop>
        <SpanBottom>7</SpanBottom>
      </Key>
      <Key>
        <SpanTop>*</SpanTop>
        <SpanBottom>8</SpanBottom>
      </Key>

      <Key>
        <SpanTop>(</SpanTop>
        <SpanBottom>9</SpanBottom>
      </Key>
      <Key>
        <SpanTop>)</SpanTop>
        <SpanBottom>0</SpanBottom>
      </Key>
      <Key>
        <SpanTop className="dash">_</SpanTop>
        <SpanBottom>-</SpanBottom>
      </Key>
      <Key>
        <SpanTop>+</SpanTop>
        <SpanBottom>=</SpanBottom>
      </Key>

      <Key2>
        <span className="delete">delete</span>
      </Key2>

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
  .dash {
    padding-top: 0px;
  }
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
  justify-content: flex-end;
  .delete {
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
