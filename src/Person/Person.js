import React from "react";
import personClasses from "./Person.css";
import Radium, { StyleRoot } from "radium";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 1rem auto;
  border: 1px solid #c0c0c0;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: "500px") {
    width: 500px;
  }
`;

const person = (props) => {
  /* const style = {
    "@media (min-width:500px)": {
      width: "450px",
    },
  }; */

  return (
    // <div className="Person" style={style}>
    <div className={personClasses.Person}>
      <p onClick={props.click}>
        My name is {props.name} and my age is {props.age}
      </p>
      <p>
        <strong>{props.children}</strong>
      </p>
      <input type="text" onChange={props.changeName} value={props.name} />
    </div>
    // </div>
  );
};

export default person;
