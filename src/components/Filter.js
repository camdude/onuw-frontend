import React, { useState, useEffect } from "react";

import CheckboxGroup from "../components/FilterElements/CheckboxGroup";
import RoleSetCard from "../components/RoleSetCard";
import { useFilter } from "../hooks/useFilter";

const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  a.sort();
  b.sort();

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const arrayIncludes = (a, b) => {
  return a.some(r => b.indexOf(r) >= 0);
};

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
    //  TODO: This does not currently factor in when multiple are selected.
    filtered = filtered.filter(set => {
      return (
        arraysEqual(set.expansions, filterState.expansions) &&
        set.expansions.some(r => filterState.expansions.indexOf(r) >= 0)
      );
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
