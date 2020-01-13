import React, { useState } from "react";

import Navigation from "../layouts/Navigation";
import Text from "../components/UIElements/Text";
import Button from "../components/FormElements/Button";
import Filter from "../components/Filter";

const SetList = () => {
  const [data] = useState([
    {
      id: "0001",
      title: "Evil Transformation",
      players: 3,
      complexity: "complex",
      rating: 8,
      expansions: ["original", "daybreak"]
    },
    {
      id: "0002",
      title: "Cautionary Tale",
      players: 4,
      complexity: "moderate",
      rating: 6,
      expansions: ["original", "daybreak"]
    },
    {
      id: "0003",
      title: "Total Chaos",
      players: 5,
      complexity: "complex",
      rating: 7,
      expansions: ["original", "daybreak"]
    },
    {
      id: "0004",
      title: "Classic Werewolf",
      players: 3,
      complexity: "simple",
      rating: 4,
      expansions: ["original"]
    },
    {
      id: "0005",
      title: "One Night Ultimate Daybreak",
      players: 3,
      complexity: "moderate",
      rating: 3,
      expansions: ["daybreak"]
    },
    {
      id: "0006",
      title: "One Night Ultimate Werewolf (3 Players)",
      players: 3,
      complexity: "simple",
      rating: 4,
      expansions: ["original"]
    },
    {
      id: "0007",
      title: "One Night Ultimate Werewolf (4 Players)",
      players: 4,
      complexity: "simple",
      rating: 4,
      expansions: ["original"]
    },
    {
      id: "0008",
      title: "One Night Ultimate Werewolf (5 Players)",
      players: 5,
      complexity: "simple",
      rating: 4,
      expansions: ["original"]
    }
  ]);

  return (
    <div className="SetList">
      <Navigation />
      <main className="main-body">
        <Text element="h2">Role Sets</Text>
        <Button to="/rolesets/add">Add Role Set</Button>
        <Filter data={data} />
      </main>
    </div>
  );
};

export default SetList;
