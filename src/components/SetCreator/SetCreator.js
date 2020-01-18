import React, { useState } from "react";

import Button from "../FormElements/Button";
import CardSelector from "./CardSelector";

const SetCreator = props => {
  const [rolesetState, setRolesetState] = useState([
    "alien",
    "alien",
    "alien",
    "alien",
    "alien",
    "alien"
  ]);

  const onAddCardHandler = event => {
    event.preventDefault();
    setRolesetState([...rolesetState, "alien"]);
  };

  const onCardChangedHandler = event => {
    const newRolesetState = [...rolesetState];
    newRolesetState[event.target.id] = event.target.value;
    setRolesetState(newRolesetState);
  };

  const onRemoveCardHandler = index => {
    if (rolesetState.length > 6) {
      const newRolesetState = [...rolesetState];
      newRolesetState.splice(index, 1);
      setRolesetState(newRolesetState);
    }
  };

  return (
    <div className="Set-Creator">
      {rolesetState.map((c, index) => (
        <CardSelector
          key={index}
          index={index}
          selected={c}
          onChange={onCardChangedHandler}
          onRemove={onRemoveCardHandler}
          removeDisabled={!(rolesetState.length > 6)}
        />
      ))}
      <Button onClick={onAddCardHandler}>&#43;</Button>
    </div>
  );
};

export default SetCreator;