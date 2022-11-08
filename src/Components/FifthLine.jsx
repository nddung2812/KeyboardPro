import styled from "styled-components";

export const FifthRow = () => {

  return (
    <Row>
      <Key className="fn">
        <span className="fn-key">fn</span>
      </Key>
      <Key>
        <div className="top-wrapper left">
          <SpanTop>⌃</SpanTop>
        </div>
        <SpanBottom>control</SpanBottom>
      </Key>
      <Key>
        <div className="top-wrapper left">
          <SpanTop>⌥</SpanTop>
        </div>
        <SpanBottom>option</SpanBottom>
      </Key>
      <CommandKey>
        <div className="top-wrapper left">
          <SpanTop>⌘</SpanTop>
        </div>
        <SpanBottom>command</SpanBottom>
      </CommandKey>

      <SpaceKey>
      </SpaceKey>
      <CommandKey>
        <div className="top-wrapper right">
          <SpanTop>⌘</SpanTop>
        </div>
        <SpanBottom>command</SpanBottom>
      </CommandKey>
      <Key>
        <div className="top-wrapper right">
          <SpanTop>⌥</SpanTop>
        </div>
        <SpanBottom>option</SpanBottom>
      </Key>
      <Key>
        <div className="arrow-left"></div>
      </Key>
      <UpDownKey>
        <div className="arrow-container">
          <div className="arrow-up"></div>
        </div>
        <div className="arrow-container">
          <div className="arrow-down"></div>
        </div>
      </UpDownKey>
      <Key>
        <div className="arrow-right"></div>
      </Key>

    </Row>
  )
}

const Row = styled.div`
  height: 16.75%;
  margin: 0 0 6px 0;
  display: flex;
  justify-content: space-between;
  .fn {
    display: flex;
    align-items: end;
    justify-content: flex-start;
  }
`;

const Key = styled.div`
  width: 6.3%;
  height: 100%;
  background: black;
  border-radius: 6px;
  margin: 0 0px 0 0;
  display: grid;
  place-items: center;
  .fn-key {
    margin: 10px;
  }
  .arrow-left {
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right:10px solid white;
  }
  .arrow-right {
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left:10px solid white;
  }
  .top-wrapper.right {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    padding: 0 0 0 1rem;
  }
  .top-wrapper.left {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 90%;
    padding: 0 1rem 0 0;
  }
  :hover {
   background: pink;
   color: black;
   box-shadow: 0px 0px 2px yellow;
   transition: 0.3s;
  }
`;

const UpDownKey = styled.div`
  width: 6.3%;
  height: 100%;
  background: black;
  border-radius: 6px;
  margin: 0 0px 0 0;
  display: grid;
  place-items: center;
  .fn-key {
    margin: 10px;
  }
  .arrow-up {
    width: 0;
    height: 0;
    border-bottom: 10px solid white;
    border-left:5px solid transparent;
    border-right:5px solid transparent;
  }
  .arrow-down {
    width: 0;
    height: 0;
    border-top: 10px solid white;
    border-left:5px solid transparent;
    border-right:5px solid transparent;
  }
  .arrow-container {
    width: 100%;
    border-bottom: 3px #636060 double;
    height: 100%;
    display: grid;
    place-items: center;
    :hover {
      background: pink;
      color: black;
      box-shadow: 0px 0px 2px yellow;
      transition: 0.3s;
      border-radius: 6px;
    }
  }
`;
const CommandKey = styled.div`
  width: 8.5%;
  height: 100%;
  background: black;
  border-radius: 6px;
  margin: 0 0px 0 0;
  display: grid;
  place-items: center;
  .top-wrapper.right {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    padding: 0 0 0 1rem;
  }
  .top-wrapper.left {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 90%;
    padding: 0 1rem 0 0;
  }
  :hover {
   background: pink;
   color: black;
   box-shadow: 0px 0px 2px yellow;
   transition: 0.3s;
  }
`;

const SpaceKey = styled.div`
  width: 33.7%;
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

const SpanTop = styled.span`
  padding-top: 10px;
`;

const SpanBottom = styled.span`
  padding-bottom: 8px;
`;
