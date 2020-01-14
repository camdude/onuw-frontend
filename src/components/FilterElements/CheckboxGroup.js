import React, { useState } from "react";

const CheckboxGroup = props => {
  const [groupState] = useState(props.value);

  const changeHandler = event => {
    let list = groupState;

    //  Add or remove checkbox to list when clicked
    if (list.includes(event.target.name)) {
      list.splice(list.indexOf(event.target.name), 1);
    } else {
      list.push(event.target.name);
    }
    props.onInput(props.name, list);
  };

  return (
    <fieldset className="CheckboxGroup">
      <legend>Expansions</legend>
      {props.inputs.map(i => {
        return (
          <div key={i} className="form-group">
            <input
              // className="form-group__input"
              id={i}
              type="checkbox"
              name={i}
              checked={groupState.includes(i)}
              onChange={changeHandler}
            />
            <label className="form-group__label" htmlFor={i}>
              {i}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
};

export default CheckboxGroup;
