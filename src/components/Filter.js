import React, { useState, useEffect } from "react";

import RoleSetCard from "../components/RoleSetCard";

const Filter = props => {
  const [data, setData] = useState([
    {
      id: "0001",
      title: "Evil Transformation",
      players: 3,
      complexity: "complex",
      rating: 8,
      gameTypes: ["original", "daybreak"]
    },
    {
      id: "0002",
      title: "Cautionary Tale",
      players: 4,
      complexity: "moderate",
      rating: 6,
      gameTypes: ["original", "daybreak"]
    },
    {
      id: "0003",
      title: "Total Chaos",
      players: 5,
      complexity: "complex",
      rating: 7,
      gameTypes: ["original", "daybreak"]
    },
    {
      id: "0004",
      title: "Classic Werewolf",
      players: 3,
      complexity: "simple",
      rating: 4,
      gameTypes: ["original"]
    },
    {
      id: "0005",
      title: "Daybreak",
      players: 3,
      complexity: "moderate",
      rating: 3,
      gameTypes: ["daybreak"]
    }
  ]);
  const [controls, setControls] = useState({
    players: {
      value: 0
    },
    complexity: {
      value: "all"
    },
    gameType: {
      original: true,
      daybreak: true
    }
  });
  const [filteredList, setFilteredList] = useState(data);

  const onChangePlayersHandler = event => {
    setControls({
      ...controls,
      players: {
        value: event.target.value
      }
    });
  };

  const onChangeComplexityHandler = event => {
    setControls({
      ...controls,
      complexity: {
        value: event.target.value
      }
    });
  };

  const onChangeGameTypeHandler = event => {
    setControls({
      ...controls,
      gameType: {
        ...controls.gameType,
        [event.target.name]: event.target.checked
      }
    });
  };

  const filter = () => {
    let filtered = data;
    if (controls.players.value >= 3) {
      filtered = data.filter(set => {
        return set.players == controls.players.value;
      });
    }
    if (controls.complexity.value != "all") {
      filtered = filtered.filter(set => {
        return set.complexity == controls.complexity.value;
      });
    }
    filtered = filtered.filter(set => {
      const games = {
        original: false,
        daybreak: false
      };
      set.gameTypes.forEach(game => {
        if (game == "original") {
          games.original = true;
        }
        if (game == "daybreak") {
          games.daybreak = true;
        }
      });
      return (
        games.original == controls.gameType.original &&
        games.daybreak == controls.gameType.daybreak
      );
    });
    // filtered = filtered.filter(set => {
    //   let exists = false;
    //   set.gameTypes.forEach(game => {
    //     if (controls.gameType[game]) {
    //       exists = true;
    //     }
    //   });
    //   return exists
    // });

    setFilteredList(filtered);
  };

  useEffect(() => {
    filter();
  }, [controls]);

  return (
    <div className="Filter">
      <form className="Filter__controls">
        <div>
          <input
            type="number"
            value={controls.players.value}
            onChange={onChangePlayersHandler}
          />
          <label>Players</label>
        </div>
        <div>
          <select
            value={controls.complexity.value}
            onChange={onChangeComplexityHandler}
          >
            <option value="all">All</option>
            <option value="simple">Simple</option>
            <option value="moderate">Moderate</option>
            <option value="complex">Complex</option>
          </select>
          <label>Complexity</label>
        </div>
        <div>
          <fieldset>
            <legend>Game Type</legend>
            <input
              type="checkbox"
              name="original"
              checked={controls.gameType.original}
              onChange={onChangeGameTypeHandler}
            />
            Original
            <br />
            <input
              type="checkbox"
              name="daybreak"
              checked={controls.gameType.daybreak}
              onChange={onChangeGameTypeHandler}
            />
            Daybreak
            <br />
          </fieldset>
        </div>
      </form>
      <br />
      {filteredList.map((set, index) => {
        return (
          <RoleSetCard
            key={index}
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
