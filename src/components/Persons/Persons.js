import React from "react";
import Person from "./Person/Person";

const persons = (props) => {
  console.log("[persons] render");
  return props.persons.map((person, index) => (
    <Person
      click={() => props.deletePerson(index)}
      name={person.name}
      age={person.age}
      key={person.id}
      changeName={(event) => {
        props.changeName(event, person.id);
      }}
    />
  ));
};

export default persons;
