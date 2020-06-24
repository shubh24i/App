import React from "react";
import personClasses from "./Person.css";

const person = (props) => {
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
