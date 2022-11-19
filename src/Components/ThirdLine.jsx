import { useState, useEffect, useRef } from 'react';

import styled from "styled-components";
import { device } from "./device";

export const ThirdRow = () => {
  const [highlight, setHighlight] = useState("none");

  let row3 = useRef(null);

  const onKeyDownHandle = (e) => {
    row3.current.focus()
      const key = e.key;
      console.log("you pressed: ",key)
      if (key === "a") {
        setHighlight("5px solid red")
      } else if (key === "s") {
        setHighlight("10px solid green")
      } else {
        setHighlight("none")
      }
  };
  useEffect(() => {
    row3.current.focus()
  },[])

  return (
    <Row ref={row3} tabIndex={0} onKeyUp={onKeyDownHandle} >
      <Key3>
        <span className="capsLock">caps lock</span>
      </Key3>
      <Key style={{border: highlight}}>
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

      <Key3 className="return-key">
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
  .return-key {
    display: flex;
    align-items: end;
    justify-content: flex-end;
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
  :hover {
   background: pink;
   color: black;
   box-shadow: 0px 0px 2px yellow;
   transition: 0.3s;
  }
`;

const Key3 = styled.div`
  width: 12%;
  height: 100%;
  background: black;
  border-radius: 6px;
  display: flex;
  align-items: end;
  justify-content: flex-start;
  .capsLock {
    padding: 10px;
  }
  .return {
    margin: 10px;
  }
  :hover {
   background: pink;
   color: black;
   box-shadow: 0px 0px 2px yellow;
   transition: 0.3s;
  }
  /* .return {
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
  } */
`;

const SpanTop = styled.span`
  padding-top: 10px;
`;

const SpanBottom = styled.span`
  padding-bottom: 10px;
`;
