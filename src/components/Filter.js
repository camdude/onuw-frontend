import React, { useState, useEffect } from "react";

import CheckboxGroup from "../components/FilterElements/CheckboxGroup";
import RoleSetCard from "../components/RoleSetCard";
import { useFilter } from "../hooks/useFilter";

const Filter = props => {
  const data = props.data;
  const [filterState, inputHandler] = useFilter({
    players: "all",
    complexity: "all",
    expansions: [
      "original",
      "daybreak",
      "alien",
      "vampire",
      "super villians",
      "bonus"
    ]
  });
  const [filteredList, setFilteredList] = useState(props.data);

  const onInputChangeHandler = event => {
    let value =
      event.target.type === "number"
        ? parseInt(event.target.value)
        : event.target.value;

    inputHandler(event.target.name, value);
  };

  const filter = () => {
    let filtered = data;

    //  Filter out players
    if (filterState.players >= 3) {
      filtered = data.filter(set => {
        return set.players == filterState.players;
      });
    }

    //  Filter out complexity
    if (filterState.complexity !== "all") {
      filtered = filtered.filter(set => {
        return set.complexity === filterState.complexity;
      });
    }

    //  Filter out game type
    filtered = filtered.filter(set => {
      return set.expansions.every(val => filterState.expansions.includes(val));
    });

    //  Update list
    setFilteredList(filtered);
  };

  useEffect(() => {
    //  Filter list when any settings change
    filter();
  }, [filterState]);

  return (
    <div className="Filter">
      <div className="Filter__controls">
        <div className="form-group">
        <select
            className="form-group__input"
            name="players"
            value={filterState.players}
            onChange={onInputChangeHandler}
          >
            <option value="all">All (3+)</option>
            <option value="3">3 Players</option>
            <option value="4">4 Players</option>
            <option value="5">5 Players</option>
            <option value="6">6 Players</option>
            <option value="7">7 Players</option>
            <option value="8">8 Players</option>
            <option value="9">9 Players</option>
            <option value="10">10 Players</option>
            <option value="11">11 Players</option>
            <option value="12">12 Players</option>
            <option value="13">13 Players</option>
            <option value="14">14 Players</option>
            <option value="15">15 Players</option>
            <option value="16">16 Players</option>
            <option value="17">17 Players</option>
            <option value="18">18 Players</option>
            <option value="19">19 Players</option>
            <option value="20">20 Players</option>
          </select>
          <div className="form-group__details">
            <label className="form-group__label" htmlFor={props.id}>
              Players
            </label>
          </div>
        </div>
        <div className="form-group">
          <select
            className="form-group__input"
            name="complexity"
            value={filterState.complexity}
            onChange={onInputChangeHandler}
          >
            <option value="all">All</option>
            <option value="simple">Simple</option>
            <option value="moderate">Moderate</option>
            <option value="complex">Complex</option>
          </select>
          <div className="form-group__details">
            <label className="form-group__label" htmlFor={props.id}>
              Complexity
            </label>
          </div>
        </div>

        <div>
          <CheckboxGroup
            name="expansions"
            inputs={[
              "original",
              "daybreak",
              "alien",
              "vampire",
              "super villians",
              "bonus"
            ]}
            value={filterState.expansions}
            onInput={inputHandler}
          />
        </div>
      </div>
      <br />
      {filteredList.map((set, index) => {
        return (
          <RoleSetCard
            key={index}
            data={set}
          />
        );
      })}
    </div>
  );
};

export default Filter;
