import React, { useState, useEffect } from "react";

import CheckboxGroup from "../components/FilterElements/CheckboxGroup";
import RoleSetCard from "../components/RoleSetCard";
import { useFilter } from "../hooks/useFilter";

const Filter = props => {
  const data = props.data;
  const [filterState, inputHandler] = useFilter({
    players: 0,
    complexity: "all",
    expansions: ["original"]
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
        return set.players === filterState.players;
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
        <div>
          <input
            name="players"
            type="number"
            value={filterState.players}
            onChange={onInputChangeHandler}
          />
          <label htmlFor="players">Players</label>
        </div>
        <div>
          <select
            name="complexity"
            value={filterState.complexity}
            onChange={onInputChangeHandler}
          >
            <option value="all">All</option>
            <option value="simple">Simple</option>
            <option value="moderate">Moderate</option>
            <option value="complex">Complex</option>
          </select>
          <label htmlFor="complexity">Complexity</label>
        </div>
        <div>
          <CheckboxGroup
            name="expansions"
            inputs={[
              "original",
              "daybreak",
              "vampire",
              "aliens",
              "super villians"
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
            id={set.id}
            title={set.title}
            players={set.players}
            complexity={set.complexity}
            rating={set.rating}
          />
        );
      })}
    </div>
  );
};

export default Filter;
