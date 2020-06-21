import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";

const app = () => {
  const [personCurrentState, personsUpdateState] = useState({
    persons: [
      { name: "Sanjay", age: 39 },
      { name: "Vinod", age: 35 },
      { name: "Rajesh", age: 45 },
    ],
  });

  const [otherCurrentState, otehrUpdateStae] = useState({
    otherState: "This is otehr state",
  });

  const switchNameHandler = () => {
    /* console.log("Was clicked"); */
    personsUpdateState({
      persons: [
        { name: "Sanju", age: 39 },
        { name: "Vinod", age: 35 },
        { name: "Rajesh", age: 46 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I am react app</h1>
      <button onClick={switchNameHandler}>Clic Me</button>
      <Person
        name={personCurrentState.persons[0].name}
        age={personCurrentState.persons[0].age}
      />
      <Person
        name={personCurrentState.persons[1].name}
        age={personCurrentState.persons[1].age}
      >
        My Hobbies is : Watch Movies
      </Person>
      <Person
        name={personCurrentState.persons[2].name}
        age={personCurrentState.persons[2].age}
      ></Person>
    </div>
  );
};

export default app;
